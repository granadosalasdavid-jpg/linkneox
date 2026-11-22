// =====================================================================
//  ERAS DE IMPERIO — IA RIVAL
//  La IA no toca la simulación directamente: mira el estado y devuelve
//  ÓRDENES, igual que hace el jugador con el ratón. Así es justa y
//  determinista (funciona igual en una partida en red).
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  const REPARTO = [ // qué parte de los aldeanos va a cada recurso según la época
    { comida: 0.55, madera: 0.45, oro: 0, piedra: 0 },
    { comida: 0.37, madera: 0.28, oro: 0.20, piedra: 0.15 },
    { comida: 0.35, madera: 0.25, oro: 0.30, piedra: 0.10 },
  ];
  const FUENTE = { comida: 'arbusto', madera: 'arbol', oro: 'oro', piedra: 'piedra' };

  class IA {
    constructor(jugador, nivel) {
      this.j = jugador;
      this.cfg = EI.DATOS.ia[nivel] || EI.DATOS.ia.normal;
      this.oleada = 0;
      this.siguienteAtaque = Math.round(this.cfg.primerAtaque * EI.DATOS.ticksPorSegundo);
      this.ejercito = []; // ids de soldados enviados al ataque
      this.calma = 0;     // segundos seguidos sin peligro (para sacar a los refugiados)
      this.vision = null; // lo que ve y recuerda (se crea al pensar por primera vez)
      this.explorador = 0; // id del soldado que explora
      this.patrulla = 0;   // siguiente punto de patrulla cuando ya está todo explorado
    }

    pensar(sim) {
      const j = this.j, J = sim.jugadores[j], D = sim.D, ordenes = [];
      if (J.derrotado || sim.ganador >= 0) return ordenes;
      const orden = (o) => { o.jugador = j; ordenes.push(o); };
      // La IA solo usa lo que ven sus unidades y edificios (y lo que recuerda): no hace trampas.
      if (!this.vision) this.vision = new EI.Vision(sim, j);
      this.vision.actualizar();
      const veo = (e) => this.vision.seVe(e);
      const mias = sim.entidades.filter(e => e.jugador === j && !e.muerto);
      const aldeanos = mias.filter(e => e.clase === 'unidad' && D.unidades[e.tipo].recolecta);
      const soldados = mias.filter(e => e.clase === 'unidad' && !D.unidades[e.tipo].recolecta);
      const sacerdotes = soldados.filter(s => D.unidades[s.tipo].sacerdote);
      const asedio = soldados.filter(s => D.unidades[s.tipo].asedio);
      const combatientes = soldados.filter(s => !D.unidades[s.tipo].sacerdote && !D.unidades[s.tipo].asedio);
      const edificios = mias.filter(e => e.clase === 'edificio');
      const de = (tipo, hecho) => edificios.filter(b => b.tipo === tipo && (hecho == null || b.construido === hecho));
      const centro = de('centro', true)[0];
      const R = J.recursos;
      const pob = aldeanos.length + soldados.length, lim = sim.limitePoblacion(j);
      const libres = aldeanos.filter(u => u.estado === 'quieto');
      const usados = new Set();
      const tomarObrero = (x, y) => {
        let lista = libres.filter(u => !usados.has(u.id));
        if (!lista.length) lista = aldeanos.filter(u => !usados.has(u.id) && ['construir', 'dentro', 'refugiar'].indexOf(u.estado) < 0);
        let mejor = null, md = 1e9;
        for (const u of lista) { const d = (u.x - x) ** 2 + (u.y - y) ** 2; if (d < md) { md = d; mejor = u; } }
        if (mejor) usados.add(mejor.id);
        return mejor;
      };
      const construir = (tipo, cx, cy) => {
        if (!sim.puedePagar(j, D.edificios[tipo].coste) || D.edificios[tipo].epoca > J.epoca) return false;
        const sitio = this.buscarSitio(sim, tipo, cx, cy);
        if (!sitio) return false;
        const u = tomarObrero(sitio.x, sitio.y);
        if (!u) return false;
        orden({ tipo: 'construir', ids: [u.id], tipoEdificio: tipo, tx: sitio.x, ty: sitio.y });
        return true;
      };

      // --- sin centro urbano: intentar rehacerlo
      if (!centro) {
        if (aldeanos.length && !de('centro', false).length) { const u = aldeanos[0]; construir('centro', Math.floor(u.x), Math.floor(u.y)); }
      }
      const base = centro || edificios[0] || aldeanos[0] || soldados[0];
      if (!base) return ordenes;
      const bx = Math.floor(base.x), by = Math.floor(base.y);
      // Como cualquier jugador, supone que el rival empezó en la esquina opuesta del mapa.
      if (!this.sospecha) this.sospecha = { x: sim.W - 1 - bx, y: sim.H - 1 - by };

      // --- avanzar de época
      const sigEpoca = D.epocas[J.epoca + 1];
      const quiereAvanzar = sigEpoca && !J.avanzando && aldeanos.length >= 8 + J.epoca * 3;
      if (quiereAvanzar && centro && sim.puedePagar(j, sigEpoca.coste)) orden({ tipo: 'avanzarEpoca', edificio: centro.id });
      const reserva = Object.assign({}, quiereAvanzar ? sigEpoca.coste : {});
      const maxAldeanos = Math.min(this.cfg.aldeanosMax, 10 + J.epoca * 5);
      // con pocos aldeanos, guarda comida para reponerlos antes que hacer soldados
      if (centro && aldeanos.length < maxAldeanos * 0.7) reserva.comida = (reserva.comida || 0) + 50;
      // ¿Se puede pagar sin tocar lo ahorrado? (solo cuentan los recursos que pide ese coste)
      const puedeConReserva = (coste) => {
        for (const k in coste) if ((R[k] || 0) < coste[k] + (reserva[k] || 0)) return false;
        return true;
      };

      // --- aldeanos
      if (centro && !centro.cola.some(it => it.tipo === 'unidad') && aldeanos.length < maxAldeanos && pob < lim && R.comida >= 50)
        orden({ tipo: 'entrenar', edificio: centro.id, unidad: 'aldeano' });

      // --- edificios
      const enObra = edificios.filter(b => !b.construido);
      if (lim - pob <= 3 && lim < D.poblacionMaxima && !de('casa', false).length) construir('casa', bx, by);
      else if (!de('cuartel').length && aldeanos.length >= 6) construir('cuartel', bx, by);
      else if (!de('almacen').length && aldeanos.length >= 7) {
        const arbol = sim.masCercano(bx + 0.5, by + 0.5, e => e.clase === 'recurso' && veo(e) && e.tipo === 'arbol' && Math.abs(e.x - bx) + Math.abs(e.y - by) > 6);
        if (arbol) construir('almacen', Math.floor(arbol.x), Math.floor(arbol.y));
      }
      else if (J.epoca >= 1 && !de('templo').length && puedeConReserva(D.edificios.templo.coste)) construir('templo', bx, by);
      else if (J.epoca >= 1 && de('torre').length < 1 && puedeConReserva(D.edificios.torre.coste)) construir('torre', bx, by);
      else if (J.epoca >= 2 && !de('taller').length && puedeConReserva(D.edificios.taller.coste)) construir('taller', bx, by);
      else if (J.epoca >= 1 && de('cuartel').length < (this.cfg.cuarteles || 1) + (J.epoca >= 2 ? 1 : 0) && puedeConReserva(D.edificios.cuartel.coste) && R.madera >= 250)
        construir('cuartel', bx, by);
      // obras sin nadie trabajando
      const obraDe = (u) => { const o = u.estado === 'construir' && sim.obtener(u.objetivo); return o ? o.tipo : null; };
      for (const b of enObra) {
        if (aldeanos.some(u => u.estado === 'construir' && u.objetivo === b.id)) continue;
        // muralla o puente: si ya hay un equipo con ellos, siguen solos tramo a tramo
        if (D.edificios[b.tipo].linea && aldeanos.some(u => obraDe(u) === b.tipo)) continue;
        const u = tomarObrero(b.x, b.y);
        if (u) orden({ tipo: 'ayudar', ids: [u.id], objetivo: b.id });
      }

      // --- puente sobre el río: si para llegar al rival hay que dar mucho rodeo, o si el vado
      //     por el que pasaría está defendido (entonces el ejército irá por el puente)
      if (this.puente === 'hecho' && !de('puente').length) { this.puente = null; this.ruta = null; } // se lo han roto: otra vez
      if (this.cfg.puentes && this.puente == null && aldeanos.length >= 8 && sim.tick >= (this.revisarPuente || 0)) {
        this.revisarPuente = sim.tick + 30 * sim.TPS; // como mucho, cada 30 segundos
        const plan = this.planearPuente(sim, aldeanos.find(u => !u.dentro));
        if (plan === false) this.puente = 'no';
        else if (plan && puedeConReserva({ madera: plan.casillas.length * D.edificios.puente.coste.madera + 30 })) {
          const ids = [];
          for (let k = 0; k < 2; k++) { const u = tomarObrero(plan.casillas[0][0], plan.casillas[0][1]); if (u) ids.push(u.id); }
          if (ids.length) {
            orden({ tipo: 'construirLinea', ids, tipoEdificio: 'puente', casillas: plan.casillas, eje: plan.eje });
            this.puente = 'hecho';
            if (plan.vado) this.ruta = { punto: plan.otraOrilla, casillas: plan.casillas, vado: plan.vado };
          }
        }
      }
      // --- muralla alrededor de la base (desde la Antigüedad, poco a poco según la piedra que sobre)
      if (this.cfg.murallas && centro && J.epoca >= 1 && aldeanos.length >= 12 && de('cuartel', true).length) {
        if (!this.muro) this.muro = this.planearMuralla(sim, centro, edificios);
        const ocupados = aldeanos.some(u => obraDe(u) === 'muralla' || obraDe(u) === 'puerta') || de('muralla', false).length || de('puerta', false).length;
        if (!ocupados) {
          // primero las puertas (para no encerrar a nadie); luego los tramos, empezando por el lado del rival
          const puerta = this.muro.puertas.find(([x, y]) => sim.zonaLibre('puerta', x, y, j) && !sim.muroPropio(x, y, j) && !this.hayPuerta(sim, x, y));
          if (puerta && puedeConReserva(D.edificios.puerta.coste)) {
            const u = tomarObrero(puerta[0], puerta[1]);
            if (u) orden({ tipo: 'construir', ids: [u.id], tipoEdificio: 'puerta', tx: puerta[0], ty: puerta[1] });
          } else if (!puerta) {
            const coste = D.edificios.muralla.coste.piedra;
            const cabe = Math.floor(((R.piedra || 0) - (reserva.piedra || 0) - 40) / coste); // guarda algo de piedra para torres
            const pendientes = this.muro.tramos.filter(([x, y]) => sim.zonaLibre('muralla', x, y, j));
            const n = Math.min(10, cabe, pendientes.length);
            if (pendientes.length && n >= Math.min(3, pendientes.length)) {
              const tanda = pendientes.slice(0, n);
              const ids = [];
              for (let k = 0; k < (this.cfg.obrerosMuralla || 2); k++) { const u = tomarObrero(tanda[0][0], tanda[0][1]); if (u) ids.push(u.id); }
              if (ids.length) orden({ tipo: 'construirLinea', ids, tipoEdificio: 'muralla', casillas: tanda });
            }
          }
        }
      }

      // --- repartir aldeanos ociosos
      const reparto = REPARTO[J.epoca];
      const cuenta = { comida: 0, madera: 0, oro: 0, piedra: 0 };
      const recursoDe = (tipo) => D.fuentes[tipo] ? D.fuentes[tipo].recurso : 'comida';
      const trabajando = new Map(); // id de fuente -> aldeanos que la usan
      for (const u of aldeanos) if ((u.estado === 'recolectar' || u.estado === 'volver') && u.recurso) {
        cuenta[recursoDe(u.recurso.tipo)]++;
        trabajando.set(u.recurso.id, (trabajando.get(u.recurso.id) || 0) + 1);
      }
      const granjaLibre = () => de('granja', true).find(g => !trabajando.get(g.id));
      let granjaPedida = de('granja', false).length > 0;
      for (const u of libres) {
        if (usados.has(u.id)) continue;
        let mejorRec = null, falta = -1e9;
        for (const k in reparto) {
          if (!reparto[k]) continue;
          const f = reparto[k] * aldeanos.length - cuenta[k];
          if (f > falta) { falta = f; mejorRec = k; }
        }
        let r = mejorRec && sim.masCercano(bx + 0.5, by + 0.5, e => e.clase === 'recurso' && veo(e) && e.tipo === FUENTE[mejorRec], mejorRec === 'comida' ? 12 : null);
        if (!r && mejorRec === 'comida') {
          r = granjaLibre();
          if (!r && !granjaPedida && sim.puedePagar(j, D.edificios.granja.coste)) {
            const sitio = this.buscarSitio(sim, 'granja', bx, by);
            if (sitio) { usados.add(u.id); granjaPedida = true; orden({ tipo: 'construir', ids: [u.id], tipoEdificio: 'granja', tx: sitio.x, ty: sitio.y }); continue; }
          }
        }
        if (!r) r = sim.masCercano(u.x, u.y, e => e.clase === 'recurso' && veo(e) && e.tipo !== 'arbusto') || sim.masCercano(u.x, u.y, e => e.clase === 'recurso' && veo(e));
        if (r) { orden({ tipo: 'recolectar', ids: [u.id], objetivo: r.id }); cuenta[sim.recursoDe(r)]++; trabajando.set(r.id, (trabajando.get(r.id) || 0) + 1); }
      }
      // Reequilibrio: si a un recurso le sobran aldeanos y a otro le faltan, cambia uno de sitio.
      {
        let sobra = null, falta = null, mas = 1.5, menos = -1.5;
        for (const k in reparto) {
          const f = reparto[k] * aldeanos.length - cuenta[k];
          if (reparto[k] && f > mas) { mas = f; falta = k; }
          if (f < menos) { menos = f; sobra = k; }
        }
        if (falta && sobra) {
          const u = aldeanos.find(a => a.estado === 'recolectar' && a.recurso && recursoDe(a.recurso.tipo) === sobra && !usados.has(a.id));
          const r = u && sim.masCercano(bx + 0.5, by + 0.5, e => e.clase === 'recurso' && veo(e) && e.tipo === FUENTE[falta]);
          if (r) { orden({ tipo: 'recolectar', ids: [u.id], objetivo: r.id }); usados.add(u.id); }
        }
      }

      // --- soldados
      for (const cuartel of de('cuartel', true)) {
        if (cuartel.cola.length >= 2 || pob >= lim) continue;
        // Mezcla: más o menos un tercio de tiradores y el resto cuerpo a cuerpo,
        // siempre la unidad más moderna que se pueda pagar.
        const tiradores = combatientes.filter(s => D.unidades[s.tipo].distancia).length;
        const quiereTirador = tiradores * 3 < combatientes.length + 1;
        // Si no llega para el tipo que toca, espera (si no, acabaría con un ejército solo de
        // tiradores, que casi no dañan edificios).
        const opciones = D.edificios.cuartel.entrena
          .filter(t => D.unidades[t].epoca <= J.epoca && !!D.unidades[t].distancia === quiereTirador)
          .sort((a, b) => D.unidades[b].epoca - D.unidades[a].epoca);
        const tipo = opciones.find(t => puedeConReserva(D.unidades[t].coste));
        if (tipo) orden({ tipo: 'entrenar', edificio: cuartel.id, unidad: tipo });
      }
      // sacerdotes (hasta 2) y asedio (2 arietes y 1 catapulta)
      const enCola = (b, t) => b.cola.filter(it => it.unidad === t).length;
      for (const templo of de('templo', true)) {
        if (pob < lim && sacerdotes.length + enCola(templo, 'sacerdote') < 2 && !templo.cola.length && puedeConReserva(D.unidades.sacerdote.coste))
          orden({ tipo: 'entrenar', edificio: templo.id, unidad: 'sacerdote' });
      }
      for (const taller of de('taller', true)) {
        if (pob >= lim || taller.cola.length) continue;
        const arietes = asedio.filter(s => s.tipo === 'ariete').length, catapultas = asedio.length - arietes;
        const tipo = arietes < 2 ? 'ariete' : catapultas < 1 ? 'catapulta' : null;
        if (tipo && puedeConReserva(D.unidades[tipo].coste)) orden({ tipo: 'entrenar', edificio: taller.id, unidad: tipo });
      }
      // los sacerdotes con la fe llena intentan convertir al enemigo más valioso que tengan cerca
      for (const s of sacerdotes) {
        if (s.fe < 100 || s.estado === 'convertir') continue;
        let mejor = null, valor = -1;
        for (const e of sim.entidades) {
          if (e.clase !== 'unidad' || e.dentro || e.jugador < 0 || e.jugador === j || !veo(e)) continue;
          if ((e.x - s.x) ** 2 + (e.y - s.y) ** 2 > 36) continue;
          const v = e.vidaMax + (D.unidades[e.tipo].recolecta ? 0 : 100);
          if (v > valor) { valor = v; mejor = e; }
        }
        if (mejor) orden({ tipo: 'convertir', ids: [s.id], objetivo: mejor.id });
      }

      // --- defensa: enemigos cerca de casa
      const intruso = sim.masCercano(bx + 0.5, by + 0.5, e => e.jugador >= 0 && e.jugador !== j && e.clase === 'unidad' && veo(e), 12);
      if (intruso) {
        const ids = combatientes.filter(s => s.estado !== 'atacar').map(s => s.id);
        if (ids.length) orden({ tipo: 'atacar', ids, objetivo: intruso.id });
      }
      // refugiar a los aldeanos si los atacantes superan a los defensores; sacarlos cuando haya calma
      if (centro) {
        const cerca = (e, r) => (e.x - centro.x) ** 2 + (e.y - centro.y) ** 2 <= r * r;
        const atacantes = sim.entidades.filter(e => e.clase === 'unidad' && !e.dentro && e.jugador >= 0 && e.jugador !== j &&
          !D.unidades[e.tipo].recolecta && cerca(e, 10) && veo(e)).length;
        const defensores = combatientes.filter(s => cerca(s, 12)).length;
        if (atacantes >= 2 && atacantes > defensores) {
          this.calma = 0;
          const hueco = D.edificios.centro.refugio - centro.ocupantes.length;
          const ids = aldeanos.filter(u => !u.dentro && u.estado !== 'refugiar' && cerca(u, 11)).slice(0, hueco).map(u => u.id);
          if (ids.length) orden({ tipo: 'refugiar', ids, objetivo: centro.id });
        } else if (centro.ocupantes.length && ++this.calma >= 5) {
          orden({ tipo: 'sacar', edificio: centro.id });
          this.calma = 0;
        }
      }

      // --- explorador: mientras no sepa dónde está el enemigo, manda a un soldado a descubrir el mapa
      const conocido = this.edificioEnemigoConocido(sim, bx, by);
      let explorador = this.explorador && sim.obtener(this.explorador);
      if (explorador && explorador.jugador !== j) explorador = null;
      if (conocido) { // ya lo encontró: vuelve a casa y pasa a ser un soldado más
        if (explorador) orden({ tipo: 'mover', ids: [explorador.id], x: bx + 0.5, y: by + 0.5 });
        this.explorador = 0; explorador = null;
      }
      else {
        if (!explorador) {
          const candidatos = combatientes.filter(s => s.estado === 'quieto' && this.ejercito.indexOf(s.id) < 0)
            .sort((a, b) => D.unidades[b.tipo].velocidad - D.unidades[a.tipo].velocidad || a.id - b.id);
          explorador = candidatos[0] || null;
          this.explorador = explorador ? explorador.id : 0;
        }
        if (explorador && explorador.estado === 'quieto') {
          const p = this.puntoSospechoso() || this.puntoSinExplorar(Math.floor(explorador.x), Math.floor(explorador.y)) || this.puntoPatrulla();
          if (p) orden({ tipo: 'mover', ids: [explorador.id], x: p.x, y: p.y });
        }
      }

      // --- ataque por oleadas
      this.ejercito = this.ejercito.filter(id => { const s = sim.obtener(id); return s && s.jugador === j; });
      const enCasa = soldados.filter(s => this.ejercito.indexOf(s.id) < 0 && s.estado === 'quieto' && s.id !== this.explorador);
      const necesarios = this.cfg.tamOleada + this.oleada * this.cfg.crecimientoOleada;
      const tarde = sim.tick > this.siguienteAtaque + this.cfg.entreOleadas * sim.TPS * 2;
      // si se retrasa mucho, ataca con lo que tenga, pero nunca con menos de la mitad de lo previsto
      if (sim.tick >= this.siguienteAtaque && (enCasa.length >= necesarios || (tarde && enCasa.length >= Math.max(2, Math.ceil(necesarios / 2))))) {
        const blanco = this.blanco(sim, bx, by);
        // con el vado defendido y el puente ya hecho, primero cruza por el puente
        const r = this.ruta, puenteListo = r && r.casillas.every(([x, y]) => { const e = sim.obtener(sim.encima[y * sim.W + x]); return e && e.tipo === 'puente' && e.jugador === j && e.construido; });
        const porPuente = puenteListo && this.defendido(sim, r.vado.x, r.vado.y);
        if (blanco) {
          orden({ tipo: 'atacarMover', ids: enCasa.map(s => s.id), x: porPuente ? r.punto.x : blanco.x, y: porPuente ? r.punto.y : blanco.y });
          for (const s of enCasa) this.ejercito.push(s.id);
          this.oleada++;
          this.siguienteAtaque = sim.tick + Math.round(this.cfg.entreOleadas * sim.TPS);
        }
      }
      // los que ya atacan y se han quedado parados siguen hacia el siguiente objetivo
      const parados = this.ejercito.map(id => sim.obtener(id)).filter(s => s && s.estado === 'quieto');
      if (parados.length) {
        const blanco = this.blanco(sim, Math.floor(parados[0].x), Math.floor(parados[0].y));
        if (blanco) orden({ tipo: 'atacarMover', ids: parados.map(s => s.id), x: blanco.x, y: blanco.y });
      }
      return ordenes;
    }

    // Adónde atacar: el edificio enemigo conocido más cercano; si no, una unidad enemiga a la
    // vista; si no se conoce nada, la zona sin explorar más cercana (el ejército explora).
    blanco(sim, x, y) {
      const j = this.j, v = this.vision;
      return this.edificioEnemigoConocido(sim, x, y) ||
             sim.masCercano(x, y, e => e.jugador >= 0 && e.jugador !== j && e.clase === 'unidad' && v.seVe(e)) ||
             this.puntoSospechoso() || this.puntoSinExplorar(x, y) || this.puntoPatrulla();
    }
    // La esquina donde cree que empezó el rival, si todavía no la ha visto.
    puntoSospechoso() {
      const s = this.sospecha;
      return s && !this.vision.exploradaCasilla(s.x, s.y) ? { x: s.x + 0.5, y: s.y + 0.5 } : null;
    }
    // Todo explorado y nada a la vista: recorre por turnos las zonas que ahora no vigila
    // (el enemigo puede haber construido donde antes no había nada).
    puntoPatrulla() {
      const v = this.vision, puntos = [];
      for (const py of this.rejilla(v.H)) for (const px of this.rejilla(v.W)) puntos.push({ x: px + 0.5, y: py + 0.5 });
      for (let k = 0; k < puntos.length; k++) {
        const p = puntos[(this.patrulla + k) % puntos.length];
        if (!v.verCasilla(p.x, p.y)) { this.patrulla = (this.patrulla + k + 1) % puntos.length; return p; }
      }
      return null;
    }
    // Edificio enemigo que se ve ahora o que se recuerda (el más cercano a x,y).
    edificioEnemigoConocido(sim, x, y) {
      const j = this.j, v = this.vision;
      const cuenta = (e) => !sim.D.edificios[e.tipo].noCuenta; // las murallas y puentes no son el objetivo
      let mejor = sim.masCercano(x, y, e => e.jugador >= 0 && e.jugador !== j && e.clase === 'edificio' && cuenta(e) && v.seVe(e));
      let md = mejor ? (mejor.x - x) ** 2 + (mejor.y - y) ** 2 : 1e9;
      for (const r of v.recuerdosOcultos()) {
        if (!cuenta(r)) continue;
        const d = (r.x - x) ** 2 + (r.y - y) ** 2;
        if (d < md || (d === md && mejor && r.id < mejor.id)) { md = d; mejor = r; }
      }
      return mejor;
    }
    // Posiciones de la rejilla de exploración, simétricas para que ningún lado del mapa salga ganando.
    rejilla(n) {
      const a = [];
      for (let p = 4; p < n / 2; p += 6) a.push(p, n - 1 - p);
      return a.sort((x, y) => x - y);
    }
    // Punto de una rejilla del mapa todavía sin explorar, el más cercano a x,y.
    puntoSinExplorar(x, y) {
      const v = this.vision;
      let mejor = null, md = 1e9;
      for (const py of this.rejilla(v.H)) for (const px of this.rejilla(v.W)) {
        if (v.exploradaCasilla(px, py)) continue;
        const d = (px - x) ** 2 + (py - y) ** 2;
        if (d < md) { md = d; mejor = { x: px + 0.5, y: py + 0.5 }; }
      }
      return mejor;
    }

    // ¿Dónde tender un puente? Compara el camino real hasta el rival con la línea recta: si el
    // rodeo es grande, busca el cruce del río más estrecho sobre esa línea (solo en casillas que
    // ya ha visto). Devuelve {casillas, eje}, null (todavía no se sabe) o false (no hace falta).
    planearPuente(sim, desde) {
      const v = this.vision, ter = sim.terreno, W = sim.W;
      if (!desde) return null;
      // hacia la base rival: su centro urbano si lo ha visto; si no, la esquina donde la supone
      const v0 = this.vision;
      const centroRival = sim.entidades.find(e => !e.muerto && e.tipo === 'centro' && e.jugador >= 0 && e.jugador !== this.j && v0.seVe(e)) ||
        v0.recuerdosOcultos().find(r => r.tipo === 'centro');
      const meta = centroRival || this.sospecha;
      if (!meta) return null;
      const tx = Math.floor(meta.x), ty = Math.floor(meta.y);
      const recta = Math.hypot(tx + 0.5 - desde.x, ty + 0.5 - desde.y);
      sim._jug = this.j;
      const camino = sim.buscarCamino(desde.x, desde.y, (x, y) => Math.abs(x - tx) <= 2 && Math.abs(y - ty) <= 2, tx, ty);
      let largo = 0, px = desde.x, py = desde.y;
      for (const p of camino || []) { largo += Math.hypot(p.x - px, p.y - py); px = p.x; py = p.y; }
      const rodeo = !camino || sim.incompleto ? 99 : largo / Math.max(1, recta);
      const agua = (x, y) => sim.dentro(x, y) && ter[y * W + x] === 1;
      const tierra = (x, y) => sim.dentro(x, y) && (ter[y * W + x] === 0 || ter[y * W + x] === 2) && sim.libre(x, y);
      if (!ter.some(t => t === 1)) return false; // no hay río
      if (rodeo < 1.4) {
        // El camino corto pasa por un vado. Si el rival lo tiene defendido, busca otro sitio.
        const vado = this.vadoDelCamino(sim, desde, camino || []);
        if (!vado || !this.defendido(sim, vado.x, vado.y)) return null; // de momento no hace falta (se vuelve a mirar)
        const alt = this.puenteAlternativo(sim, desde, meta, vado, agua, tierra);
        if (alt) alt.vado = vado; // el ejército irá por el puente, no por ese vado
        return alt;
      }
      // primera casilla de agua sobre la línea recta
      let ax = -1, ay = -1;
      const pasos = Math.ceil(recta * 2);
      for (let k = 0; k <= pasos; k++) {
        const x = Math.floor(desde.x + (tx + 0.5 - desde.x) * k / pasos), y = Math.floor(desde.y + (ty + 0.5 - desde.y) * k / pasos);
        if (agua(x, y)) { ax = x; ay = y; break; }
      }
      if (ax < 0) return false; // el rodeo no es por el río (montañas): un puente no ayuda
      let mejor = null;
      for (const [dx, dy, eje] of [[1, 0, 'x'], [0, 1, 'y']]) {
        let a = 0, b = 0;
        while (a < 8 && agua(ax - dx * (a + 1), ay - dy * (a + 1))) a++;
        while (b < 8 && agua(ax + dx * (b + 1), ay + dy * (b + 1))) b++;
        if (!tierra(ax - dx * (a + 1), ay - dy * (a + 1)) || !tierra(ax + dx * (b + 1), ay + dy * (b + 1))) continue; // tiene que acabar en las dos orillas
        const casillas = [];
        for (let k = -a; k <= b; k++) casillas.push([ax + dx * k, ay + dy * k]);
        if (!mejor || casillas.length < mejor.casillas.length) mejor = { casillas, eje };
      }
      if (!mejor) return false;
      return this.orientarPuente(mejor, desde);
    }
    // Empieza por la orilla de su lado y apunta la casilla de tierra del otro lado (por donde
    // pasará el ejército).
    orientarPuente(plan, desde) {
      const c = plan.casillas, dx = plan.eje === 'x' ? 1 : 0, dy = 1 - dx;
      const [x0, y0] = c[0], [x1, y1] = c[c.length - 1];
      // las dos orillas (a dos casillas de los extremos): la lejana es la del otro lado
      const a = { x: Math.min(x0, x1) - dx * 2 + 0.5, y: Math.min(y0, y1) - dy * 2 + 0.5 };
      const b = { x: Math.max(x0, x1) + dx * 2 + 0.5, y: Math.max(y0, y1) + dy * 2 + 0.5 };
      const da = (a.x - desde.x) ** 2 + (a.y - desde.y) ** 2, db = (b.x - desde.x) ** 2 + (b.y - desde.y) ** 2;
      plan.otraOrilla = da > db ? a : b;
      const lejosDe0 = (x1 - desde.x) ** 2 + (y1 - desde.y) ** 2 >= (x0 - desde.x) ** 2 + (y0 - desde.y) ** 2;
      if (!lejosDe0) c.reverse(); // empieza por su orilla
      return plan;
    }
    // Primer vado por el que pasa un camino (o null).
    vadoDelCamino(sim, desde, camino) {
      let px = desde.x, py = desde.y;
      for (const p of camino) {
        const n = Math.ceil(Math.hypot(p.x - px, p.y - py) * 2) || 1;
        for (let k = 0; k <= n; k++) {
          const x = Math.floor(px + (p.x - px) * k / n), y = Math.floor(py + (p.y - py) * k / n);
          if (sim.dentro(x, y) && sim.terreno[y * sim.W + x] === 2) return { x, y };
        }
        px = p.x; py = p.y;
      }
      return null;
    }
    // ¿Tiene el rival torres, murallas o un centro urbano junto a ese punto? (lo que se ve o se recuerda)
    defendido(sim, x, y) {
      const v = this.vision, D = sim.D;
      const peligro = (e) => e.jugador >= 0 && e.jugador !== this.j && e.clase === 'edificio' && (D.edificios[e.tipo].ataque || D.edificios[e.tipo].muro || e.tipo === 'centro') &&
        (e.x - x - 0.5) ** 2 + (e.y - y - 0.5) ** 2 <= 64;
      return sim.entidades.some(e => !e.muerto && peligro(e) && v.seVe(e)) || v.recuerdosOcultos().some(peligro);
    }
    // El cruce del río más corto y a mano que quede lejos de los vados (ya explorado).
    puenteAlternativo(sim, desde, meta, vado, agua, tierra) {
      const W = sim.W, H = sim.H, ter = sim.terreno, v = this.vision;
      const vados = [];
      for (let i = 0; i < W * H; i++) if (ter[i] === 2) vados.push([i % W, (i / W) | 0]);
      const lejosDeVados = (x, y) => vados.every(([a, b]) => (a - x) ** 2 + (b - y) ** 2 >= 36);
      let mejor = null, puntos = 1e9;
      for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
        if (!agua(x, y)) continue;
        for (const [dx, dy, eje] of [[1, 0, 'x'], [0, 1, 'y']]) {
          if (agua(x - dx, y - dy)) continue; // solo desde el principio de cada cruce
          let n = 1;
          while (n < 8 && agua(x + dx * n, y + dy * n)) n++;
          if (!tierra(x - dx, y - dy) || !tierra(x + dx * n, y + dy * n)) continue;
          const mx = x + dx * n / 2, my = y + dy * n / 2;
          if (!lejosDeVados(mx, my) || (mx - vado.x) ** 2 + (my - vado.y) ** 2 < 100) continue;
          const casillas = [];
          for (let k = 0; k < n; k++) casillas.push([x + dx * k, y + dy * k]);
          if (this.defendido(sim, mx, my)) continue; // (el relieve lo conoce; tus edificios, solo si los ha visto)
          const p = n * 4 + Math.hypot(mx - desde.x, my - desde.y) + Math.hypot(mx - meta.x, my - meta.y);
          if (p < puntos) { puntos = p; mejor = { casillas, eje }; }
        }
      }
      return mejor ? this.orientarPuente(mejor, desde) : null;
    }
    // Recinto cuadrado alrededor del centro urbano (que deje dentro sus edificios), con una
    // puerta en el centro de cada lado. Los tramos van ordenados: primero los del lado del rival.
    planearMuralla(sim, centro, edificios) {
      const cx = centro.tx + 1, cy = centro.ty + 1;
      let r = this.cfg.radioMuralla || 8;
      for (const b of edificios) {
        if (this.D_(b).noCuenta) continue;
        const lejos = Math.max(Math.abs(b.tx - cx), Math.abs(b.ty - cy), Math.abs(b.tx + b.tam - 1 - cx), Math.abs(b.ty + b.tam - 1 - cy)) + 2;
        if (lejos > r && lejos <= r + 4) r = lejos; // los que estén muy lejos se quedan fuera
      }
      const dentro = (x, y) => x >= 1 && y >= 1 && x <= sim.W - 2 && y <= sim.H - 2;
      const tramos = [];
      for (let y = cy - r; y <= cy + r; y++) for (let x = cx - r; x <= cx + r; x++)
        if (Math.max(Math.abs(x - cx), Math.abs(y - cy)) === r && dentro(x, y)) tramos.push([x, y]);
      // puertas: en el centro de cada lado (o lo más cerca posible donde se pueda construir)
      const puertas = [];
      for (const [dx, dy] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
        for (const d of [0, 1, -1, 2, -2, 3, -3]) {
          const x = cx + dx * r + (dx ? 0 : d), y = cy + dy * r + (dy ? 0 : d);
          if (dentro(x, y) && sim.construible(x, y)) { puertas.push([x, y]); break; }
        }
      }
      const s = this.sospecha || { x: sim.W / 2, y: sim.H / 2 };
      const resto = tramos.filter(([x, y]) => !puertas.some(p => p[0] === x && p[1] === y));
      resto.sort((a, b) => ((a[0] - s.x) ** 2 + (a[1] - s.y) ** 2) - ((b[0] - s.x) ** 2 + (b[1] - s.y) ** 2) || a[1] - b[1] || a[0] - b[0]);
      puertas.sort((a, b) => ((a[0] - s.x) ** 2 + (a[1] - s.y) ** 2) - ((b[0] - s.x) ** 2 + (b[1] - s.y) ** 2));
      return { puertas, tramos: resto };
    }
    D_(b) { return EI.DATOS.edificios[b.tipo]; }
    hayPuerta(sim, x, y) {
      const e = sim.obtener(sim.encima[y * sim.W + x]);
      return !!(e && e.tipo === 'puerta');
    }
    // Busca un hueco libre (con un pasillo alrededor) cerca de cx,cy.
    buscarSitio(sim, tipo, cx, cy) {
      const tam = EI.DATOS.edificios[tipo].tam;
      for (let r = 2; r <= 14; r++) {
        for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
          const tx = cx + dx, ty = cy + dy;
          if (!sim.zonaLibre(tipo, tx, ty)) continue;
          let ok = true;
          for (let y = ty - 1; y <= ty + tam && ok; y++) for (let x = tx - 1; x <= tx + tam; x++) {
            if (sim.dentro(x, y) && !sim.libre(x, y)) { ok = false; break; }
          }
          if (ok) return { x: tx, y: ty };
        }
      }
      return null;
    }
  }

  EI.IA = IA;

  // -------------------------------------------------------------------
  //  LOCKSTEP: cola de órdenes con retraso. Cada orden se programa para
  //  un tick futuro; en red, cada jugador enviaría las suyas a los demás
  //  y todos ejecutarían el mismo tick con las mismas órdenes.
  // -------------------------------------------------------------------
  class Lockstep {
    constructor(sim, retraso) {
      this.sim = sim;
      this.retraso = retraso == null ? 2 : retraso;
      this.pendientes = [];
      this.secuencia = 0;
      this.historial = []; // todas las órdenes ejecutadas (sirve para repeticiones)
      this.ias = [];
    }
    enviar(orden) {
      const o = JSON.parse(JSON.stringify(orden)); // garantiza que la orden es serializable
      o.tick = this.sim.tick + this.retraso;
      o.seq = this.secuencia++;
      this.pendientes.push(o);
    }
    avanzar() {
      const sim = this.sim;
      for (const ia of this.ias) if ((sim.tick + ia.j * 5) % sim.TPS === 0) for (const o of ia.pensar(sim)) this.enviar(o);
      const ahora = [], resto = [];
      for (const o of this.pendientes) (o.tick <= sim.tick ? ahora : resto).push(o);
      ahora.sort((a, b) => a.tick - b.tick || a.jugador - b.jugador || a.seq - b.seq);
      this.pendientes = resto;
      for (const o of ahora) this.historial.push(o);
      sim.paso(ahora);
      return sim.eventos;
    }
  }
  EI.Lockstep = Lockstep;
})();
