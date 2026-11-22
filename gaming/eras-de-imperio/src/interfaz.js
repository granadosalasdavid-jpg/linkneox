// =====================================================================
//  ERAS DE IMPERIO — INTERFAZ Y CONTROLES
//  Convierte el ratón y el teclado en ÓRDENES para la simulación y
//  muestra la barra de recursos, el panel inferior y los avisos.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  const $ = (s) => document.querySelector(s);
  const JUG = 0; // el jugador humano

  function textoCoste(coste) {
    const R = EI.DATOS.recursos;
    return Object.keys(coste || {}).map(k => `<span class="coste">${R[k].icono}${coste[k]}</span>`).join(' ');
  }

  class Interfaz {
    constructor(juego) {
      this.juego = juego;
      this.seleccion = new Set();
      this.fantasma = null;      // edificio que se está colocando
      this.recuadro = null;      // recuadro de selección
      this.raton = { x: 0, y: 0, dentro: false };
      this.teclas = {};
      this.grupos = {};          // grupos de unidades: número → ids
      this.clavePanel = '';
      this.ultimoAvisoAtaque = -1e9;
      this.conectar();
    }
    get sim() { return this.juego.sim; }
    get render() { return this.juego.render; }
    enviar(o) { o.jugador = JUG; this.juego.lockstep.enviar(o); }
    sonar(nombre) { if (EI.Sonido) EI.Sonido.tocar(nombre, { vol: 0.6 }); }

    // ---------------------------------------------------------- entrada
    conectar() {
      const cv = this.juego.canvas;
      cv.addEventListener('contextmenu', e => e.preventDefault());
      cv.addEventListener('mousedown', e => this.alPulsar(e));
      window.addEventListener('mousemove', e => this.alMover(e));
      window.addEventListener('mouseup', e => this.alSoltar(e));
      cv.addEventListener('dblclick', e => this.dobleClic(e));
      cv.addEventListener('mouseenter', () => { this.raton.dentro = true; });
      cv.addEventListener('mouseleave', () => { this.raton.dentro = false; });
      cv.addEventListener('wheel', e => {
        e.preventDefault();
        const r = this.render, [wx, wy] = r.aMundo(e.offsetX, e.offsetY);
        r.zoom = Math.min(1.6, Math.max(0.5, r.zoom * (e.deltaY < 0 ? 1.1 : 1 / 1.1)));
        const [sx, sy] = r.aPantalla(wx, wy);
        r.camX += e.offsetX - sx; r.camY += e.offsetY - sy; r.limitarCamara();
      }, { passive: false });
      window.addEventListener('keydown', e => this.alTeclear(e));
      window.addEventListener('keyup', e => { this.teclas[e.key.toLowerCase()] = false; });
      const mini = $('#minimapa');
      const moverMini = (e) => { const [x, y] = this.render.minimapaAMundo(e.offsetX * mini.width / mini.clientWidth, e.offsetY * mini.height / mini.clientHeight); this.render.centrarEn(x, y); };
      mini.addEventListener('mousedown', e => { if (e.button === 0) { this.arrastrandoMini = true; moverMini(e); } else if (e.button === 2) { this.ordenEnPunto(...this.render.minimapaAMundo(e.offsetX * mini.width / mini.clientWidth, e.offsetY * mini.height / mini.clientHeight), null); } });
      mini.addEventListener('mousemove', e => { if (this.arrastrandoMini) moverMini(e); });
      mini.addEventListener('contextmenu', e => e.preventDefault());
      window.addEventListener('mouseup', () => { this.arrastrandoMini = false; });
      $('#acciones').addEventListener('click', e => { const b = e.target.closest('[data-accion]'); if (b && !b.disabled) this.accion(b.dataset.accion, b.dataset.valor); });
      $('#cola').addEventListener('click', e => { const b = e.target.closest('[data-indice]'); if (b) this.enviar({ tipo: 'cancelar', edificio: +b.dataset.edificio, indice: +b.dataset.indice }); });
    }
    posCanvas(e) { const r = this.juego.canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }

    alPulsar(e) {
      const [x, y] = this.posCanvas(e);
      if (e.button === 0) {
        if (this.fantasma) { this.raton.x = x; this.raton.y = y; this.moverFantasma(); this.colocar(e.shiftKey); return; }
        this.recuadro = { x0: x, y0: y, x1: x, y1: y, activo: false };
      } else if (e.button === 2) {
        if (this.fantasma) { if (this.fantasma.inicio) this.fantasma.inicio = null; else this.fantasma = null; return; } // con el muro empezado, solo se suelta el inicio
        const [wx, wy] = this.render.aMundo(x, y);
        this.ordenEnPunto(wx, wy, this.render.entidadEn(x, y, this.juego.alfa));
      }
    }
    alMover(e) {
      const [x, y] = this.posCanvas(e);
      this.raton.x = x; this.raton.y = y;
      if (this.recuadro) {
        this.recuadro.x1 = x; this.recuadro.y1 = y;
        if (Math.abs(x - this.recuadro.x0) + Math.abs(y - this.recuadro.y0) > 6) this.recuadro.activo = true;
      }
    }
    alSoltar(e) {
      if (e.button !== 0 || !this.recuadro) return;
      const r = this.recuadro; this.recuadro = null;
      if (!e.shiftKey) this.seleccion.clear();
      if (r.activo) {
        const x0 = Math.min(r.x0, r.x1), x1 = Math.max(r.x0, r.x1), y0 = Math.min(r.y0, r.y1), y1 = Math.max(r.y0, r.y1);
        for (const u of this.sim.entidades) {
          if (u.clase !== 'unidad' || u.jugador !== JUG || u.dentro) continue;
          const [sx, sy] = this.render.aPantalla(...this.render.posUnidad(u, this.juego.alfa));
          if (sx >= x0 && sx <= x1 && sy - 10 >= y0 - 10 && sy - 10 <= y1) this.seleccion.add(u.id);
        }
      } else {
        const ent = this.render.entidadEn(r.x0, r.y0, this.juego.alfa);
        if (ent) {
          if (e.shiftKey && this.seleccion.has(ent.id)) this.seleccion.delete(ent.id);
          else { if (ent.jugador !== JUG || ent.clase !== 'unidad') this.seleccion.clear(); this.seleccion.add(ent.id); }
        }
      }
      this.limpiarSeleccion();
      if (this.seleccion.size) this.sonar('seleccion');
    }
    dobleClic(e) {
      const [x, y] = this.posCanvas(e);
      const ent = this.render.entidadEn(x, y, this.juego.alfa);
      if (!ent || ent.jugador !== JUG || ent.clase !== 'unidad') return;
      for (const u of this.sim.entidades) {
        if (u.clase !== 'unidad' || u.jugador !== JUG || u.tipo !== ent.tipo || u.dentro) continue;
        const [sx, sy] = this.render.aPantalla(u.x, u.y);
        if (sx > 0 && sy > 0 && sx < this.render.ancho && sy < this.render.alto) this.seleccion.add(u.id);
      }
    }
    // Una selección mezclada solo conserva unidades propias.
    limpiarSeleccion() {
      const ents = [...this.seleccion].map(id => this.sim.obtener(id)).filter(Boolean);
      const propias = ents.filter(e => e.jugador === JUG && e.clase === 'unidad');
      if (propias.length && propias.length !== ents.length) this.seleccion = new Set(propias.map(e => e.id));
    }
    elegidos() { return [...this.seleccion].map(id => this.sim.obtener(id)).filter(Boolean); }

    ordenEnPunto(wx, wy, ent) {
      const sim = this.sim, D = sim.D;
      const elegidos = this.elegidos().filter(e => e.jugador === JUG);
      const unidades = elegidos.filter(e => e.clase === 'unidad');
      const marca = (color) => { this.render.marcas.push({ x: ent ? ent.x : wx, y: ent ? ent.y : wy, t: performance.now(), color }); this.sonar('orden'); };
      if (!unidades.length) {
        const ed = elegidos.find(e => e.clase === 'edificio' && D.edificios[e.tipo].entrena);
        if (ed) { this.enviar({ tipo: 'reunion', edificio: ed.id, x: wx, y: wy, objetivo: ent ? ent.id : 0 }); marca('#fff'); }
        return;
      }
      const ids = unidades.map(u => u.id);
      const aldeanos = unidades.filter(u => D.unidades[u.tipo].recolecta).map(u => u.id);
      const otros = unidades.filter(u => !D.unidades[u.tipo].recolecta).map(u => u.id);
      const sacerdotes = unidades.filter(u => D.unidades[u.tipo].sacerdote).map(u => u.id);
      // (el ataque de un sacerdote contra una unidad es convertirla: lo resuelve la simulación)
      if (ent && ent.jugador >= 0 && ent.jugador !== JUG) { this.enviar({ tipo: 'atacar', ids, objetivo: ent.id }); marca(sacerdotes.length === ids.length ? '#fd5' : '#f44'); return; }
      if (ent && sacerdotes.length && ent.clase === 'unidad' && ent.jugador === JUG && ent.vida < ent.vidaMax && sacerdotes.indexOf(ent.id) < 0) {
        this.enviar({ tipo: 'curar', ids: sacerdotes, objetivo: ent.id });
        const resto = ids.filter(id => sacerdotes.indexOf(id) < 0);
        if (resto.length) this.enviar({ tipo: 'mover', ids: resto, x: wx, y: wy });
        marca('#7f7'); return;
      }
      if (ent && aldeanos.length && ent.clase === 'edificio' && ent.jugador === JUG && ent.construido && D.edificios[ent.tipo].refugio) {
        this.enviar({ tipo: 'refugiar', ids: aldeanos, objetivo: ent.id });
        if (otros.length) this.enviar({ tipo: 'mover', ids: otros, x: wx, y: wy });
        marca('#fd5'); return;
      }
      if (ent && aldeanos.length && sim.esFuente(ent, JUG)) {
        this.enviar({ tipo: 'recolectar', ids: aldeanos, objetivo: ent.id });
        if (otros.length) this.enviar({ tipo: 'mover', ids: otros, x: wx, y: wy });
        marca('#ff6'); return;
      }
      if (ent && aldeanos.length && ent.clase === 'edificio' && ent.jugador === JUG && !ent.construido) {
        this.enviar({ tipo: 'ayudar', ids: aldeanos, objetivo: ent.id });
        if (otros.length) this.enviar({ tipo: 'mover', ids: otros, x: wx, y: wy });
        marca('#6cf'); return;
      }
      this.enviar({ tipo: this.teclas['control'] ? 'atacarMover' : 'mover', ids, x: wx, y: wy });
      marca('#6f6');
    }

    alTeclear(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      // grupos: Ctrl+número guarda, Mayús+número añade, número elige (dos veces: la cámara va allí)
      const num = /^(Digit|Numpad)([0-9])$/.exec(e.code || '');
      if (num) { e.preventDefault(); this.grupo(+num[2], e.ctrlKey || e.metaKey, e.shiftKey); return; }
      const k = e.key.toLowerCase();
      this.teclas[k] = true;
      if (k === 'escape') { if (this.fantasma) this.fantasma = null; else this.seleccion.clear(); }
      else if (k === 'p' || k === ' ') { e.preventDefault(); this.juego.alternarPausa(); }
      else if (k === 'h') { const c = this.sim.entidades.find(x => x.jugador === JUG && x.tipo === 'centro'); if (c) { this.seleccion = new Set([c.id]); this.render.centrarEn(c.x, c.y); } }
      else if (k === '.' || k === 'i') this.aldeanoOcioso();
      else if (k === 'delete') { /* reservado */ }
      else {
        const b = document.querySelector(`#acciones [data-tecla="${k}"]`);
        if (b && !b.disabled) this.accion(b.dataset.accion, b.dataset.valor);
      }
    }
    // Lo que queda vivo y es tuyo de un grupo (los muertos y los convertidos se caen solos).
    miembros(n) {
      return (this.grupos[n] || []).map(id => this.sim.obtener(id)).filter(e => e && !e.muerto && e.jugador === JUG);
    }
    grupo(n, guardar, anadir) {
      if (guardar || anadir) {
        const propios = this.elegidos().filter(e => e.jugador === JUG);
        if (!propios.length) { this.mensaje('Elige primero las unidades del grupo ' + n); return; }
        const ids = new Set(anadir ? this.miembros(n).map(e => e.id) : []);
        for (const e of propios) ids.add(e.id);
        for (const m in this.grupos) if (+m !== n && !anadir) this.grupos[m] = this.grupos[m].filter(id => !ids.has(id)); // cada unidad, en un solo grupo
        this.grupos[n] = [...ids];
        this.mensaje(`Grupo ${n}: ${ids.size} ${ids.size === 1 ? 'elegido' : 'elegidos'} · pulsa ${n} para volver a elegirlos`);
        this.sonar('boton');
        return;
      }
      const lista = this.miembros(n).filter(e => !e.dentro);
      if (!lista.length) { this.mensaje(`El grupo ${n} está vacío (Ctrl+${n} para guardar lo elegido)`); return; }
      const ahora = performance.now();
      const doble = this._ultimoGrupo === n && ahora - this._tiempoGrupo < 450;
      this._ultimoGrupo = n; this._tiempoGrupo = ahora;
      this.seleccion = new Set(lista.map(e => e.id));
      if (doble) { // segunda pulsación: la cámara va al grupo
        let x = 0, y = 0; for (const e of lista) { x += e.x; y += e.y; }
        this.render.centrarEn(x / lista.length, y / lista.length);
      }
    }
    aldeanoOcioso() {
      const ociosos = this.sim.entidades.filter(u => u.jugador === JUG && u.tipo === 'aldeano' && u.estado === 'quieto');
      if (!ociosos.length) { this.mensaje('No hay aldeanos ociosos'); return; }
      this._ocioso = ((this._ocioso || 0) + 1) % ociosos.length;
      const u = ociosos[this._ocioso];
      this.seleccion = new Set([u.id]); this.render.centrarEn(u.x, u.y);
    }

    accion(accion, valor) {
      const sel = this.elegidos().filter(e => e.jugador === JUG);
      this.sonar('boton');
      if (accion === 'construir') {
        this.fantasma = { tipo: valor, tx: 0, ty: 0, valido: false, inicio: null, casillas: [] };
        const d = this.sim.D.edificios[valor];
        if (d.puente) this.mensaje('Puente: clic en una orilla y clic en la otra (solo sobre el agua)');
        else if (d.linea) this.mensaje('Muralla: clic donde empieza y clic donde acaba · Mayús = seguir el muro');
        else if (d.puerta) this.mensaje('Puerta: ponla sobre tu muralla. Tus unidades pasan; las enemigas, no');
      }
      else if (accion === 'entrenar') { const ed = sel.find(e => e.clase === 'edificio'); if (ed) this.enviar({ tipo: 'entrenar', edificio: ed.id, unidad: valor }); }
      else if (accion === 'epoca') { const ed = sel.find(e => e.clase === 'edificio'); if (ed) this.enviar({ tipo: 'avanzarEpoca', edificio: ed.id }); }
      else if (accion === 'detener') this.enviar({ tipo: 'detener', ids: sel.filter(e => e.clase === 'unidad').map(e => e.id) });
      else if (accion === 'refugiar') this.enviar({ tipo: 'refugiar', ids: sel.filter(e => e.tipo === 'aldeano').map(e => e.id) });
      else if (accion === 'sacar') { const ed = sel.find(e => e.clase === 'edificio'); if (ed) this.enviar({ tipo: 'sacar', edificio: ed.id }); }
      else if (accion === 'ocioso') this.aldeanoOcioso();
    }
    colocar(seguir) {
      const f = this.fantasma;
      const ids = this.elegidos().filter(u => u.jugador === JUG && u.tipo === 'aldeano').map(u => u.id);
      if (!ids.length) { this.fantasma = null; return; }
      if (this.sim.D.edificios[f.tipo].linea) { // muralla / puente: dos clics (inicio y final)
        if (!f.inicio) { f.inicio = { tx: f.tx, ty: f.ty }; return; }
        const casillas = f.casillas.filter(c => c.ok).map(c => [c.x, c.y]);
        if (!casillas.length) { this.mensaje(f.casillas.some(c => c.caro) ? 'Te faltan recursos' : 'No se puede construir ahí'); return; }
        this.enviar({ tipo: 'construirLinea', ids, tipoEdificio: f.tipo, casillas, eje: f.eje });
        this.sonar('martillo');
        if (seguir) f.inicio = { tx: f.tx, ty: f.ty }; else this.fantasma = null; // con Mayús el muro sigue desde aquí
        return;
      }
      if (!f.valido) { this.mensaje('No se puede construir ahí'); return; }
      this.enviar({ tipo: 'construir', ids, tipoEdificio: f.tipo, tx: f.tx, ty: f.ty });
      this.sonar('martillo');
      if (!seguir) this.fantasma = null;
    }

    // ---------------------------------------------------------- cada fotograma
    actualizar(dt) {
      const r = this.render, v = 700 * dt;
      // cámara con teclado y bordes de pantalla
      let dx = 0, dy = 0;
      if (this.teclas['a'] || this.teclas['arrowleft']) dx += v;
      if (this.teclas['d'] || this.teclas['arrowright']) dx -= v;
      if (this.teclas['w'] || this.teclas['arrowup']) dy += v;
      if (this.teclas['s'] || this.teclas['arrowdown']) dy -= v;
      if (this.raton.dentro && !this.recuadro && this.juego.bordes) {
        const m = 14;
        if (this.raton.x < m) dx += v; if (this.raton.x > r.ancho - m) dx -= v;
        if (this.raton.y < m) dy += v; if (this.raton.y > r.alto - m) dy -= v;
      }
      if (dx || dy) { r.camX += dx; r.camY += dy; r.limitarCamara(); }
      this.moverFantasma();
      for (const id of [...this.seleccion]) { const e = this.sim.obtener(id); if (!e || e.dentro || !r.niebla.seVe(e)) this.seleccion.delete(id); }
      this.barra();
      this.panel();
    }

    // fantasma de construcción bajo el ratón
    moverFantasma() {
      const f = this.fantasma, r = this.render;
      if (!f) return;
      const tam = this.sim.D.edificios[f.tipo].tam;
      const [wx, wy] = r.aMundo(this.raton.x, this.raton.y);
      f.tx = Math.floor(wx - tam / 2 + 0.5); f.ty = Math.floor(wy - tam / 2 + 0.5);
      f.valido = this.sim.zonaLibre(f.tipo, f.tx, f.ty, JUG) &&
        r.niebla.edificioExplorado({ tx: f.tx, ty: f.ty, tam }); // no se construye a ciegas
      if (this.sim.D.edificios[f.tipo].linea) this.lineaFantasma();
    }
    // Casillas de la muralla o el puente entre el primer clic y el ratón, cada una con
    // ok (se construirá), caro (no llega el dinero) o ninguna (ocupada / no vale).
    lineaFantasma() {
      const f = this.fantasma, sim = this.sim, d = sim.D.edificios[f.tipo];
      const a = f.inicio || { tx: f.tx, ty: f.ty };
      let pts = [];
      if (d.linea === 'recta') { // puente: en línea recta horizontal o vertical
        const ex = Math.abs(f.tx - a.tx) >= Math.abs(f.ty - a.ty);
        f.eje = ex ? 'x' : 'y';
        const n = ex ? f.tx - a.tx : f.ty - a.ty, s = Math.sign(n) || 1;
        for (let k = 0; k <= Math.abs(n) && pts.length < 40; k++) pts.push(ex ? [a.tx + k * s, a.ty] : [a.tx, a.ty + k * s]);
      } else { // muralla: línea libre casilla a casilla (Bresenham)
        let x = a.tx, y = a.ty;
        const dx = Math.abs(f.tx - x), dy = -Math.abs(f.ty - y), sx = f.tx > x ? 1 : -1, sy = f.ty > y ? 1 : -1;
        let err = dx + dy;
        while (pts.length < 40) {
          pts.push([x, y]);
          if (x === f.tx && y === f.ty) break;
          const e2 = 2 * err;
          if (e2 >= dy) { err += dy; x += sx; }
          if (e2 <= dx) { err += dx; y += sy; }
        }
      }
      const r = sim.jugadores[JUG].recursos, gasto = {};
      f.casillas = pts.map(([x, y]) => {
        const c = { x, y, ok: false, caro: false };
        if (!sim.zonaLibre(f.tipo, x, y, JUG) || !this.render.niebla.edificioExplorado({ tx: x, ty: y, tam: 1 })) return c;
        let llega = true;
        for (const k in d.coste) if ((r[k] || 0) < (gasto[k] || 0) + d.coste[k]) llega = false;
        if (!llega) { c.caro = true; return c; }
        for (const k in d.coste) gasto[k] = (gasto[k] || 0) + d.coste[k];
        c.ok = true;
        return c;
      });
      f.valido = f.casillas.some(c => c.ok);
      f.gasto = gasto;
    }

    barra() {
      const sim = this.sim, J = sim.jugadores[JUG], D = sim.D;
      const seg = Math.floor(sim.tick / sim.TPS);
      const html = Object.keys(D.recursos).map(k => `<span class="rec" title="${D.recursos[k].nombre}">${D.recursos[k].icono} ${Math.floor(J.recursos[k])}</span>`).join('') +
        `<span class="rec" title="Población">👥 ${sim.poblacion(JUG)}/${sim.limitePoblacion(JUG)}</span>` +
        `<span class="epoca">${D.epocas[J.epoca].nombre}${J.avanzando ? ' → avanzando…' : ''}</span>` +
        `<span class="reloj">⏱ ${Math.floor(seg / 60)}:${String(seg % 60).padStart(2, '0')}</span>` +
        Object.keys(this.grupos).map(n => [n, this.miembros(n).length]).filter(g => g[1]) // grupos guardados
          .map(([n, c]) => `<span class="grupo" title="Grupo ${n}: pulsa ${n} para elegirlo">${n}<small>·${c}</small></span>`).join('');
      if (html !== this._barra) { $('#recursos').innerHTML = html; this._barra = html; }
    }

    panel() {
      const sim = this.sim, D = sim.D, J = sim.jugadores[JUG];
      const sel = this.elegidos();
      const info = $('#info'), acciones = $('#acciones'), cola = $('#cola');
      const propias = sel.filter(e => e.jugador === JUG);
      const aldeanos = propias.filter(e => e.tipo === 'aldeano');
      const edificio = sel.length === 1 && sel[0].clase === 'edificio' ? sel[0] : null;
      const asequible = (c) => sim.puedePagar(JUG, c || {});

      // ---- información
      let htmlInfo = '';
      if (!sel.length) htmlInfo = '<div class="ayuda">Clic o recuadro para elegir. Clic derecho para mover, recolectar, construir o atacar.<br>WASD/flechas: cámara · H: centro · .: ocioso · P: pausa<br>Ctrl+1…9: guardar grupo · 1…9: elegirlo (2 veces: ir allí)</div>';
      else if (sel.length === 1) {
        const e = sel[0], d = sim.datosDe(e);
        const dueno = e.jugador >= 0 ? `<span style="color:${D.jugadores[e.jugador].color}">${D.jugadores[e.jugador].nombre}</span>` : '';
        htmlInfo = `<div class="nombre">${d.nombre} ${dueno}</div>`;
        if (e.clase === 'recurso') htmlInfo += `<div>${D.recursos[d.recurso].icono} Quedan ${e.cantidad}</div>`;
        else {
          htmlInfo += `<div>❤ ${Math.ceil(e.vida)}/${e.vidaMax}</div>`;
          if (e.clase === 'unidad') {
            if (d.sacerdote) htmlInfo += `<div>✨ Fe: ${Math.floor(e.fe)}%${e.fe >= 100 ? ' (puede convertir)' : ''}</div>`;
            else htmlInfo += `<div>⚔ ${d.ataque} &nbsp; 🛡 ${d.armadura}${d.distancia ? ` &nbsp; 🏹 alcance ${d.alcance}` : ''}${d.soloEdificios ? ' · solo edificios' : ''}</div>`;
            const estados = { quieto: 'Esperando', mover: 'Moviéndose', atacar: 'Atacando', recolectar: 'Recolectando', volver: 'Llevando recursos', construir: 'Construyendo',
              refugiar: 'Corriendo a refugiarse', curar: 'Curando', convertir: 'Convirtiendo…' };
            htmlInfo += `<div class="estado">${estados[e.estado] || ''}${e.carga ? ` · lleva ${e.carga.cantidad} ${D.recursos[e.carga.tipo].icono}` : ''}</div>`;
          } else if (!e.construido) htmlInfo += `<div class="estado">En construcción: ${Math.floor(100 * e.progreso / e.total)}%</div>`;
          else if (D.edificios[e.tipo].ataque) htmlInfo += `<div>⚔ ${D.edificios[e.tipo].ataque} · alcance ${D.edificios[e.tipo].alcance}</div>`;
          if (e.clase === 'edificio' && D.edificios[e.tipo].refugio && e.construido)
            htmlInfo += `<div>🏠 Refugiados: ${e.ocupantes.length}/${D.edificios[e.tipo].refugio}${e.ocupantes.length ? ' · dispara flechas' : ''}</div>`;
        }
      } else {
        const cuenta = {};
        for (const e of sel) cuenta[e.tipo] = (cuenta[e.tipo] || 0) + 1;
        htmlInfo = `<div class="nombre">${sel.length} unidades</div><div>` + Object.keys(cuenta).map(t => `${cuenta[t]} × ${D.unidades[t] ? D.unidades[t].nombre : t}`).join('<br>') + '</div>';
      }
      if (htmlInfo !== this._info) { info.innerHTML = htmlInfo; this._info = htmlInfo; }

      // ---- botones
      const botones = [];
      const boton = (accion, valor, titulo, coste, activo, tecla, motivo) =>
        botones.push(`<button data-accion="${accion}" data-valor="${valor || ''}" ${tecla ? `data-tecla="${tecla}"` : ''} ${activo ? '' : 'disabled'} title="${motivo || ''}"><b>${titulo}</b>${tecla ? `<i>${tecla.toUpperCase()}</i>` : ''}<br>${textoCoste(coste)}</button>`);
      if (aldeanos.length) {
        const teclas = { casa: 'c', granja: 'g', almacen: 'l', cuartel: 'b', torre: 't', centro: 'u', templo: 'o', taller: 'k' };
        for (const t in D.edificios) {
          const d = D.edificios[t], bloqueado = d.epoca > J.epoca;
          boton('construir', t, d.nombre + (d.linea ? ' (tramo)' : ''), d.coste, !bloqueado && asequible(d.coste), teclas[t] || d.tecla, bloqueado ? 'Necesita ' + D.epocas[d.epoca].nombre : '');
        }
        boton('refugiar', '', 'Refugiarse', null, true, 'z', 'Corren al centro urbano y se esconden dentro');
      }
      if (propias.length && propias.every(e => e.clase === 'unidad')) boton('detener', '', 'Detener', null, true, 'x');
      if (edificio && edificio.jugador === JUG && edificio.construido) {
        const de = D.edificios[edificio.tipo];
        for (const t of de.entrena || []) {
          const du = D.unidades[t], bloqueado = du.epoca > J.epoca;
          if (bloqueado && du.epoca > J.epoca + 1) continue;
          boton('entrenar', t, du.nombre, du.coste, !bloqueado && asequible(du.coste), du.tecla, bloqueado ? 'Necesita ' + D.epocas[du.epoca].nombre : '');
        }
        const sig = D.epocas[J.epoca + 1];
        if (de.avanzaEpoca && sig) boton('epoca', '', 'Avanzar a ' + sig.nombre, sig.coste, !J.avanzando && asequible(sig.coste), 'v', J.avanzando ? 'Ya estás avanzando' : 'Desbloquea nuevas unidades y edificios');
        if (de.refugio) boton('sacar', '', `Sacar aldeanos (${edificio.ocupantes.length})`, null, edificio.ocupantes.length > 0, 'z', 'Los refugiados salen y vuelven a trabajar');
      }
      if (!edificio || edificio.jugador !== JUG) boton('ocioso', '', 'Aldeano ocioso', null, true, '.');
      const htmlAcc = botones.join('');
      if (htmlAcc !== this._acc) { acciones.innerHTML = htmlAcc; this._acc = htmlAcc; }

      // ---- cola de producción
      let htmlCola = '';
      if (edificio && edificio.jugador === JUG && edificio.cola.length) {
        htmlCola = edificio.cola.map((it, i) => {
          const nombre = it.tipo === 'epoca' ? D.epocas[it.epoca].nombre : D.unidades[it.unidad].nombre;
          const pct = Math.floor(100 * it.progreso / it.total);
          return `<div class="item" data-edificio="${edificio.id}" data-indice="${i}" title="Clic para cancelar"><span>${nombre}</span><div class="prog"><div style="width:${pct}%"></div></div></div>`;
        }).join('');
      }
      if (htmlCola !== this._cola) { cola.innerHTML = htmlCola; this._cola = htmlCola; }
    }

    // ---------------------------------------------------------- avisos
    mensaje(texto, tipo) {
      const caja = $('#mensajes');
      const div = document.createElement('div');
      div.className = 'msg ' + (tipo || '');
      div.textContent = texto;
      caja.appendChild(div);
      while (caja.children.length > 4) caja.firstChild.remove();
      setTimeout(() => div.classList.add('fuera'), 2600);
      setTimeout(() => div.remove(), 3200);
    }
    procesarEventos(eventos) {
      const D = this.sim.D;
      if (EI.Sonido) EI.Sonido.eventos(eventos, JUG);
      for (const ev of eventos) {
        if (ev.tipo === 'aviso' && ev.jugador === JUG) this.mensaje(ev.texto, 'malo');
        else if (ev.tipo === 'epoca') this.mensaje(ev.jugador === JUG ? `¡Has llegado a la ${D.epocas[ev.epoca].nombre}!` : `El rival ha llegado a la ${D.epocas[ev.epoca].nombre}`, ev.jugador === JUG ? 'bueno' : 'malo');
        else if (ev.tipo === 'construido' && ev.jugador === JUG) this.mensaje(`Construido: ${D.edificios[ev.edificio].nombre}`, 'bueno');
        else if (ev.tipo === 'golpe' && ev.jugador === JUG && this.sim.tick - this.ultimoAvisoAtaque > 200) {
          this.ultimoAvisoAtaque = this.sim.tick;
          this.mensaje('¡Te están atacando!', 'malo');
        }
        else if (ev.tipo === 'destruido' && ev.jugador !== JUG) this.mensaje(`Has destruido: ${D.edificios[ev.edificio].nombre}`, 'bueno');
        else if (ev.tipo === 'convertido' && ev.jugador === JUG) this.mensaje(`¡Has convertido: ${D.unidades[ev.unidad].nombre}!`, 'bueno');
        else if (ev.tipo === 'convertido' && ev.antes === JUG) this.mensaje(`El enemigo ha convertido a tu ${D.unidades[ev.unidad].nombre.toLowerCase()}`, 'malo');
      }
    }
  }

  EI.Interfaz = Interfaz;
})();
