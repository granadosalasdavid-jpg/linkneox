// =====================================================================
//  ERAS DE IMPERIO — SIMULACIÓN
//  Toda la lógica del juego. Avanza a "ticks" fijos (10 por segundo) y
//  solo cambia mediante ÓRDENES (objetos simples que se pueden convertir
//  a JSON). Con la misma semilla y las mismas órdenes, el resultado es
//  siempre idéntico: esto permite añadir multijugador "lockstep" después.
//  Aquí no se dibuja nada ni se usa el reloj del ordenador.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  const ALCANCE_TRABAJO = 0.75; // distancia para recolectar o construir
  const RADIO_UNIDAD = 0.3;

  // Desplazamientos para que un grupo no se amontone en el mismo punto.
  const FORMACION = [];
  for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) FORMACION.push([x * 0.6, y * 0.6, x * x + y * y, y * 9 + x]);
  FORMACION.sort((a, b) => a[2] - b[2] || a[3] - b[3]);

  class Simulacion {
    constructor(opciones) {
      opciones = opciones || {};
      this.D = EI.DATOS;
      this.TPS = this.D.ticksPorSegundo;
      // Opciones de partida (todas deben ser iguales en todos los jugadores para el modo en red):
      // tamano (pequeno/mediano/grande), recursos (normales/altos/muyAltos), semilla, aleatorio.
      const tam = (this.D.tamanosMapa || {})[opciones.tamano] || { escala: 1 };
      this.escala = tam.escala;
      this.W = this.D.mapa.ancho * this.escala;
      this.H = this.D.mapa.alto * this.escala;
      this.niebla = opciones.niebla != null ? !!opciones.niebla : this.D.niebla !== false;
      this.variado = !!opciones.aleatorio; // mapa aleatorio: la base también cambia un poco
      this.limiteNodos = Math.max(3000, this.W * this.H); // A*: en mapas grandes (y con ríos) busca más lejos
      // relieve de cada casilla: 0 hierba, 1 agua, 2 vado, 3 montaña (EI.TERRENO)
      this.relieve = (this.D.relievesPartida || {})[opciones.relieve] || { rio: false, montanas: false };
      this.terreno = new Uint8Array(this.W * this.H);
      // puertas y puentes no ocupan la casilla como un edificio normal:
      // encima = id del puente o la puerta que hay en la casilla; puertaEn = dueño de la puerta + 1
      this.encima = new Int32Array(this.W * this.H);
      this.puertaEn = new Uint8Array(this.W * this.H);
      this._jug = -1; // jugador para el que se calcula el paso (sus puertas sí se cruzan)
      this.incompleto = false; // la última búsqueda de camino no llegó a la meta
      const inicial = ((this.D.recursosPartida || {})[opciones.recursos] || {}).recursos || this.D.recursosIniciales;
      this.tick = 0;
      this.azar = (opciones.semilla != null ? opciones.semilla : this.D.mapa.semilla) >>> 0;
      this.siguienteId = 1;
      this.entidades = []; // siempre ordenadas por id
      this.porId = new Map();
      this.bloqueo = new Int32Array(this.W * this.H);
      // ritmo = multiplicador de velocidad de recolección de cada jugador (la dificultad de la IA)
      this.jugadores = this.D.jugadores.map((j, i) => ({
        id: i, recursos: Object.assign({}, inicial), epoca: 0, avanzando: false, derrotado: false,
        ritmo: (opciones.ritmo && opciones.ritmo[i]) || 1,
      }));
      this.ganador = -1;
      this.eventos = [];
      this._prepararBusqueda();
      this.generarMapa();
    }

    // ------------------------------------------------------------ utilidades
    aleatorio() { // mulberry32: generador pseudoaleatorio determinista
      let t = this.azar = (this.azar + 0x6D2B79F5) >>> 0;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    entero(n) { return Math.floor(this.aleatorio() * n); }
    ticks(segundos) { return Math.max(1, Math.round(segundos * this.TPS)); }
    dentro(tx, ty) { return tx >= 0 && ty >= 0 && tx < this.W && ty < this.H; }
    libre(tx, ty) { return this.dentro(tx, ty) && this.bloqueo[ty * this.W + tx] === 0; }
    // Se puede poner algo encima (edificio o recurso): libre y de hierba (no en un vado).
    construible(tx, ty) { const i = ty * this.W + tx; return this.libre(tx, ty) && this.terreno[i] === 0 && this.encima[i] === 0; }
    // Se puede pisar (para el jugador this._jug): libre y sin puerta ajena.
    pasable(tx, ty) {
      if (!this.dentro(tx, ty)) return false;
      const i = ty * this.W + tx, p = this.puertaEn[i];
      return this.bloqueo[i] === 0 && (p === 0 || p === this._jug + 1);
    }
    datosEdificio(e) { return e && e.clase === 'edificio' ? this.D.edificios[e.tipo] : null; }
    terrenoEn(x, y) { const tx = Math.floor(x), ty = Math.floor(y); return this.dentro(tx, ty) ? this.terreno[ty * this.W + tx] : 0; }
    datosDe(e) {
      return e.clase === 'unidad' ? this.D.unidades[e.tipo] : e.clase === 'edificio' ? this.D.edificios[e.tipo] : this.D.fuentes[e.tipo];
    }
    obtener(id) { return this.porId.get(id); }
    // ¿Puede el jugador j recolectar de e? (fuentes del mapa o sus granjas terminadas)
    esFuente(e, j) {
      return e.clase === 'recurso' || (e.clase === 'edificio' && e.jugador === j && e.construido && !!this.D.edificios[e.tipo].cultivo);
    }
    recursoDe(e) { return e.clase === 'recurso' ? this.D.fuentes[e.tipo].recurso : 'comida'; }
    aviso(jugador, texto) { this.eventos.push({ tipo: 'aviso', jugador, texto }); }

    // Distancia desde una unidad hasta el borde de otra entidad.
    distancia(u, e) {
      if (e.clase === 'unidad') {
        const dx = e.x - u.x, dy = e.y - u.y;
        return Math.sqrt(dx * dx + dy * dy) - RADIO_UNIDAD;
      }
      const cx = Math.min(Math.max(u.x, e.tx), e.tx + e.tam);
      const cy = Math.min(Math.max(u.y, e.ty), e.ty + e.tam);
      const dx = cx - u.x, dy = cy - u.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    // ------------------------------------------------------------ entidades
    agregar(e) {
      this.entidades.push(e);
      this.porId.set(e.id, e);
      const de = this.datosEdificio(e);
      if (de && (de.puente || de.puerta)) { // no bloquean como un edificio: se apuntan aparte
        const i = e.ty * this.W + e.tx;
        this.encima[i] = e.id;
        if (de.puerta) { this.puertaEn[i] = e.jugador + 1; this.expulsar(e, e.jugador); }
      } else if (e.clase !== 'unidad') { this._marcar(e, e.id); if (e.clase === 'edificio') this.expulsar(e, -1); }
      return e;
    }
    // Saca a las unidades que se han quedado dentro de un edificio nuevo (o en el agua de
    // un puente roto) a la casilla libre más cercana. excepto = jugador al que no se saca.
    expulsar(e, excepto) {
      for (const u of this.entidades) {
        if (u.clase !== 'unidad' || u.muerto || u.dentro || u.jugador === excepto) continue;
        if (u.x < e.tx || u.y < e.ty || u.x >= e.tx + e.tam || u.y >= e.ty + e.tam) continue;
        this._jug = u.jugador;
        let mejor = null, md = 1e9;
        for (let r = 1; r <= 3 && !mejor; r++)
          for (let y = e.ty - r; y < e.ty + e.tam + r; y++) for (let x = e.tx - r; x < e.tx + e.tam + r; x++) {
            if (x >= e.tx && y >= e.ty && x < e.tx + e.tam && y < e.ty + e.tam) continue;
            if (!this.pasable(x, y)) continue;
            const d = (x + 0.5 - u.x) ** 2 + (y + 0.5 - u.y) ** 2;
            if (d < md) { md = d; mejor = { x: x + 0.5, y: y + 0.5 }; }
          }
        if (mejor) { u.x = u.px = mejor.x; u.y = u.py = mejor.y; u.camino = null; }
      }
    }
    // Algo ha cerrado un paso (un puente roto): todos vuelven a calcular su camino.
    recalcularCaminos() {
      for (const u of this.entidades) {
        if (u.clase !== 'unidad' || u.muerto || !u.camino) continue;
        if (u.estado === 'mover' && u.destino) this.ordenMover([u], u.destino.x, u.destino.y, u.atacarMover);
        else u.camino = null;
      }
    }
    // Quita una entidad sin avisos (por ejemplo, el tramo de muralla que se cambia por una puerta).
    quitar(e) { e.muerto = true; this.porId.delete(e.id); this._marcar(e, 0); }
    _marcar(e, valor) {
      for (let y = e.ty; y < e.ty + e.tam; y++)
        for (let x = e.tx; x < e.tx + e.tam; x++) if (this.dentro(x, y)) this.bloqueo[y * this.W + x] = valor;
    }
    eliminar(e) {
      if (e.muerto) return;
      e.muerto = true;
      this.porId.delete(e.id);
      const de = this.datosEdificio(e);
      if (de && (de.puente || de.puerta)) {
        const i = e.ty * this.W + e.tx;
        this.encima[i] = 0; this.puertaEn[i] = 0;
        if (de.puente) { // vuelve a ser agua: los que estaban encima saltan a la orilla
          this.bloqueo[i] = -1;
          this.expulsar(e, -2);
          this.recalcularCaminos();
        }
      } else if (e.clase !== 'unidad') this._marcar(e, 0);
      if (e.clase === 'unidad') this.eventos.push({ tipo: 'muerte', jugador: e.jugador, x: e.x, y: e.y });
      if (e.clase === 'edificio') {
        if (e.ocupantes.length) this.sacar(e); // los refugiados salen antes de que caiga
        for (const it of e.cola) if (it.tipo === 'epoca') this.jugadores[e.jugador].avanzando = false;
        this.eventos.push({ tipo: 'destruido', jugador: e.jugador, x: e.x, y: e.y, edificio: e.tipo });
      }
    }
    crearUnidad(tipo, jugador, x, y) {
      const d = this.D.unidades[tipo];
      return this.agregar({
        id: this.siguienteId++, clase: 'unidad', tipo, jugador, x, y, px: x, py: y,
        vida: d.vida, vidaMax: d.vida, estado: 'quieto', objetivo: 0, camino: null, destino: null,
        atacarMover: false, auto: false, tras: null, carga: null, recurso: null,
        enfriamiento: 0, contador: 0, fallos: 0, dir: 1, golpeTick: -999, golpeado: -999, disparo: null,
        dentro: 0,                     // id del edificio donde está refugiado (0 = fuera)
        fe: d.sacerdote ? 100 : 0,     // sacerdotes: 100 = puede convertir
        canal: 0,                      // sacerdotes: ticks que lleva convirtiendo
      });
    }
    crearEdificio(tipo, jugador, tx, ty, construido) {
      const d = this.D.edificios[tipo];
      return this.agregar({
        id: this.siguienteId++, clase: 'edificio', tipo, jugador, tx, ty, tam: d.tam,
        x: tx + d.tam / 2, y: ty + d.tam / 2, vidaMax: d.vida,
        vida: construido ? d.vida : Math.max(1, Math.round(d.vida * 0.1)),
        construido: !!construido, progreso: 0, total: this.ticks(d.tiempo),
        cola: [], reunion: null, enfriamiento: 0, disparo: null, golpeado: -999,
        ocupantes: [], // aldeanos refugiados dentro
      });
    }
    crearRecurso(tipo, tx, ty) {
      if (!this.construible(tx, ty) || (this.despejar && this.despejar[ty * this.W + tx])) return null;
      return this.agregar({
        id: this.siguienteId++, clase: 'recurso', tipo, jugador: -1, tx, ty, tam: 1,
        x: tx + 0.5, y: ty + 0.5, cantidad: this.D.fuentes[tipo].cantidad, variante: this.entero(4),
      });
    }

    // ------------------------------------------------------------ mapa
    generarMapa() {
      const W = this.W, H = this.H;
      const espejo = (x, y) => [W - 1 - x, H - 1 - y];
      const bases = [[8, H - 9], espejo(8, H - 9)];
      const ambos = (tipo, x, y) => { this.crearRecurso(tipo, x, y); const [mx, my] = espejo(x, y); this.crearRecurso(tipo, mx, my); };

      this.generarRelieve(bases);
      // Centros urbanos primero, para que nada los tape.
      bases.forEach(([bx, by], j) => this.crearEdificio('centro', j, bx - 1, by - 1, true));

      const [bx, by] = bases[0]; // el jugador 0 está a la izquierda; todo se refleja para la IA
      // Mapa aleatorio: la base se gira sobre su diagonal y el oro y la piedra pueden cambiar
      // de sitio (siempre igual para los dos jugadores, para que sea justo).
      const girar = this.variado && this.aleatorio() < 0.5;
      const cambiar = this.variado && this.aleatorio() < 0.5;
      const pos = (dx, dy) => girar ? [bx - dy, by - dx] : [bx + dx, by + dy];
      const grupo = (tipo, cx, cy, lista) => lista.forEach(([dx, dy]) => ambos(tipo, ...pos(cx + dx, cy + dy)));
      const oro = cambiar ? 'piedra' : 'oro', piedra = cambiar ? 'oro' : 'piedra';
      grupo('arbusto', 4, 1, [[0, 0], [1, 0], [0, 1], [1, 1], [1, -1], [2, 0]]);
      grupo(piedra, -1, -6, [[0, 0], [1, 0], [0, -1], [1, -1]]);
      grupo(oro, 4, -5, [[0, 0], [1, 0], [0, -1], [1, -1]]);
      // Bosque junto a la base
      for (let dy = -3; dy <= 5; dy++) for (let dx = -6; dx <= -4; dx++) if (this.aleatorio() < 0.8) ambos('arbol', ...pos(dx, dy));
      for (let dy = 4; dy <= 6; dy++) for (let dx = -2; dx <= 6; dx++) if (this.aleatorio() < 0.7) ambos('arbol', ...pos(dx, dy));
      // Recursos extra hacia el centro del mapa
      grupo('oro', 12, -12, [[0, 0], [1, 0], [0, 1]]);
      grupo('piedra', 9, -2, [[0, 0], [1, 0], [0, 1]]);
      grupo('arbusto', 2, -10, [[0, 0], [1, 0], [0, 1], [1, 1]]);
      grupo('arbusto', 10, 2, [[0, 0], [1, 0], [0, 1], [1, 1]]);
      grupo('arbusto', 14, -7, [[0, 0], [1, 0], [0, 1], [1, 1]]);
      grupo('arbusto', -2, -14, [[0, 0], [1, 0], [0, 1], [1, 1]]);

      // En mapas más grandes hay más sitio que llenar: minas, canteras y bayas repartidas.
      const area = (W * H) / (48 * 48);
      const extras = Math.round((area - 1) * 5), tipos = ['oro', 'piedra', 'arbusto'];
      for (let i = 0, puestos = 0; i < extras * 4 && puestos < extras; i++) {
        const cx = 4 + this.entero(W - 8), cy = 4 + this.entero(H - 8);
        if (!bases.every(([x, y]) => Math.abs(cx - x) + Math.abs(cy - y) > 16)) continue;
        const tipo = tipos[puestos % 3];
        const forma = tipo === 'arbusto' ? [[0, 0], [1, 0], [0, 1], [1, 1]] : [[0, 0], [1, 0], [0, 1]];
        forma.forEach(([dx, dy]) => ambos(tipo, cx + dx, cy + dy));
        puestos++;
      }

      // Bosquecillos repartidos, lejos de las bases
      for (let i = 0; i < Math.round(16 * area); i++) {
        const cx = 2 + this.entero(W - 4), cy = 2 + this.entero(H - 4);
        const lejos = bases.every(([x, y]) => Math.abs(cx - x) + Math.abs(cy - y) > 13);
        if (!lejos) continue;
        const n = 4 + this.entero(7);
        for (let k = 0; k < n; k++) ambos('arbol', cx + this.entero(4) - 1, cy + this.entero(4) - 1);
      }

      // Aldeanos iniciales
      bases.forEach(([x, y], j) => {
        for (let k = 0; k < this.D.aldeanosIniciales; k++) {
          const dir = j === 0 ? 1 : -1;
          this.crearUnidad('aldeano', j, x + dir * (2.4 + (k % 2) * 0.7), y + dir * (-0.6 + k * 0.7));
        }
      });
    }

    // Ríos y montañas. Todo se pone en espejo (casilla i y su opuesta W*H-1-i), así que los dos
    // jugadores tienen el mismo terreno. Solo usa sumas y productos (nada de seno ni coseno),
    // para que salga idéntico en cualquier navegador.
    generarRelieve(bases) {
      const W = this.W, H = this.H, T = this.terreno, R = this.D.relieve, E = this.escala, N = W * H;
      const AGUA = 1, VADO = 2, MONTE = 3;
      if (!this.relieve.rio && !this.relieve.montanas) return;
      const poner = (i, v) => { T[i] = v; T[N - 1 - i] = v; };
      const cercaBase = (x, y, r) => bases.some(([bx, by]) => Math.abs(x - bx) + Math.abs(y - by) <= r);

      if (this.relieve.rio) {
        // El río va de una esquina a la opuesta, entre las dos bases, serpenteando.
        // s(t) = desvío respecto a la diagonal; puntos de control simétricos (s(W-t) = -s(t)).
        const n = 4 + 2 * E, A = R.curvasRio * E, ctrl = new Array(n + 1);
        for (let k = 0; k < n / 2; k++) { ctrl[k] = (this.aleatorio() * 2 - 1) * A; ctrl[n - k] = -ctrl[k]; }
        ctrl[n / 2] = 0;
        const s = (t) => {
          const q = Math.min(n - 1e-9, Math.max(0, t * n / W)), k = Math.floor(q), u = q - k, h = u * u * (3 - 2 * u);
          return ctrl[k] + (ctrl[k + 1] - ctrl[k]) * h;
        };
        const ancho = R.anchoRio + 0.4 * (E - 1);
        const vados = E === 1 ? [0.5, 0.2] : [0.5, 0.3, 0.12];
        const anchoVado = 1.5 + 0.5 * E;
        for (let i = 0; i <= (N - 1) / 2; i++) {
          const x = i % W, y = (i / W) | 0;
          if (cercaBase(x, y, 9)) continue;
          const X = x + 0.5, Y = y + 0.5, t = (X + Y) / 2, d = (X - Y) / 2 - s(t);
          if (Math.abs(d) * 1.4142 >= ancho / 2) continue;
          const vado = vados.some(f => Math.abs(t - W * f) < anchoVado || Math.abs(t - W * (1 - f)) < anchoVado);
          poner(i, vado ? VADO : AGUA);
        }
      }

      // Paso libre: desde la base 0 se llega a todas las casillas transitables (vecinas en cruz).
      const cola = new Int32Array(N), visto = new Uint8Array(N);
      const conectado = () => {
        visto.fill(0);
        let total = 0;
        for (let i = 0; i < N; i++) if (T[i] !== AGUA && T[i] !== MONTE) total++;
        const ini = bases[0][1] * W + bases[0][0];
        let a = 0, b = 0, cuenta = 0;
        cola[b++] = ini; visto[ini] = 1;
        while (a < b) {
          const i = cola[a++]; cuenta++;
          const x = i % W;
          for (const j of [x > 0 ? i - 1 : -1, x < W - 1 ? i + 1 : -1, i - W, i + W]) {
            if (j < 0 || j >= N || visto[j] || T[j] === AGUA || T[j] === MONTE) continue;
            visto[j] = 1; cola[b++] = j;
          }
        }
        return cuenta === total;
      };

      if (this.relieve.montanas) {
        // Cordilleras pequeñas lejos de las bases y del río; si una cerrase un paso, se quita.
        const cercaAgua = (x, y, r) => {
          for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
            const xx = x + dx, yy = y + dy;
            if (this.dentro(xx, yy) && (T[yy * W + xx] === AGUA || T[yy * W + xx] === VADO)) return true;
          }
          return false;
        };
        const grupos = Math.round(R.montanas * N / 2304);
        for (let g = 0, puestos = 0; g < grupos * 4 && puestos < grupos; g++) {
          let x = 3 + this.entero(W - 6), y = 3 + this.entero(H - 6);
          if (cercaBase(x, y, 15)) continue;
          const largo = 5 + this.entero(5 + 3 * E), casillas = [];
          for (let k = 0; k < largo * 3 && casillas.length < largo; k++) {
            const i = y * W + x;
            if (x >= 2 && y >= 2 && x < W - 2 && y < H - 2 && T[i] === 0 && !cercaBase(x, y, 12) && !cercaAgua(x, y, 2) &&
                casillas.indexOf(i) < 0 && casillas.indexOf(N - 1 - i) < 0) casillas.push(i);
            x = Math.min(W - 3, Math.max(2, x + this.entero(3) - 1));
            y = Math.min(H - 3, Math.max(2, y + this.entero(3) - 1));
          }
          if (casillas.length < 3) continue;
          for (const i of casillas) poner(i, MONTE);
          if (conectado()) puestos++;
          else for (const i of casillas) poner(i, 0);
        }
      }

      // Alrededor de los vados no crecen árboles ni recursos (para que nunca queden tapados).
      this.despejar = new Uint8Array(N);
      for (let i = 0; i < N; i++) if (T[i] === VADO) {
        const x = i % W, y = (i / W) | 0;
        for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) if (this.dentro(x + dx, y + dy)) this.despejar[(y + dy) * W + x + dx] = 1;
      }
      // agua y montañas bloquean el paso (-1 = terreno, no es ninguna entidad)
      for (let i = 0; i < N; i++) if (T[i] === AGUA || T[i] === MONTE) this.bloqueo[i] = -1;
      this.pasoLibre = conectado();
    }

    // ------------------------------------------------------------ búsqueda de caminos (A*)
    _prepararBusqueda() {
      const n = this.W * this.H;
      this._g = new Float64Array(n);
      this._padre = new Int32Array(n);
      this._visto = new Int32Array(n);
      this._cerrado = new Int32Array(n);
      this._gen = 0;
      // montículo binario en arrays de números (mucho más rápido que un array de pares)
      this._mf = new Float64Array(n * 8 + 16);
      this._mi = new Int32Array(n * 8 + 16);
    }

    // Devuelve una lista de puntos {x,y} o null. esMeta(tx,ty) dice si una casilla vale como destino.
    buscarCamino(sx, sy, esMeta, mx, my) {
      const W = this.W, H = this.H;
      const inicio = Math.floor(sy) * W + Math.floor(sx);
      const gen = ++this._gen;
      const g = this._g, padre = this._padre, visto = this._visto, cerrado = this._cerrado;
      // heurística algo inflada (x1.2): explora muchas menos casillas y el camino sale casi igual de corto
      const heur = (i) => { const dx = Math.abs((i % W) - mx), dy = Math.abs(((i / W) | 0) - my); return (Math.max(dx, dy) + 0.414 * Math.min(dx, dy)) * 1.2; };
      const MF = this._mf, MI = this._mi, cap = MF.length;
      const bl = this.bloqueo, P = this.puertaEn, jp = this._jug + 1;
      let tam = 0;
      const meter = (i, f) => { // montículo binario ordenado por (f, i)
        if (tam >= cap) return;
        let k = tam++;
        while (k > 0) {
          const p = (k - 1) >> 1;
          if (MF[p] < f || (MF[p] === f && MI[p] <= i)) break;
          MF[k] = MF[p]; MI[k] = MI[p]; k = p;
        }
        MF[k] = f; MI[k] = i;
      };
      const sacar = () => {
        const top = MI[0]; tam--;
        if (tam > 0) {
          const f = MF[tam], i = MI[tam];
          let k = 0;
          for (;;) {
            const a = 2 * k + 1; if (a >= tam) break;
            const b = a + 1;
            let m = a;
            if (b < tam && (MF[b] < MF[a] || (MF[b] === MF[a] && MI[b] < MI[a]))) m = b;
            if (MF[m] < f || (MF[m] === f && MI[m] < i)) { MF[k] = MF[m]; MI[k] = MI[m]; k = m; } else break;
          }
          MF[k] = f; MI[k] = i;
        }
        return top;
      };
      g[inicio] = 0; padre[inicio] = -1; visto[inicio] = gen;
      meter(inicio, heur(inicio));
      let mejor = inicio, mejorH = heur(inicio), meta = -1, nodos = 0;
      while (tam > 0 && nodos < this.limiteNodos) {
        const i = sacar();
        if (cerrado[i] === gen) continue;
        cerrado[i] = gen; nodos++;
        const x = i % W, y = (i / W) | 0;
        if (esMeta(x, y) && (i !== inicio || this.bloqueo[i] === 0)) { meta = i; break; }
        const h = heur(i);
        if (h < mejorH) { mejorH = h; mejor = i; }
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dy) continue;
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
          const j = ny * W + nx;
          if (bl[j] !== 0 || cerrado[j] === gen || (P[j] && P[j] !== jp)) continue; // ocupado o puerta ajena
          if (dx && dy) {
            const a = y * W + nx, b = ny * W + x;
            if (bl[a] !== 0 || bl[b] !== 0 || (P[a] && P[a] !== jp) || (P[b] && P[b] !== jp)) continue;
          }
          const ng = g[i] + (dx && dy ? 1.414 : 1);
          if (visto[j] !== gen || ng < g[j]) { visto[j] = gen; g[j] = ng; padre[j] = i; meter(j, ng + heur(j)); }
        }
      }
      this.incompleto = meta < 0; // no llega: algo (una muralla, el agua...) cierra el paso
      let fin = meta >= 0 ? meta : mejor;
      if (fin === inicio) return meta >= 0 ? [] : null;
      const casillas = [];
      for (let i = fin; i !== inicio && i >= 0; i = padre[i]) casillas.push(i);
      casillas.reverse();
      const puntos = casillas.map(i => ({ x: (i % W) + 0.5, y: ((i / W) | 0) + 0.5 }));
      return this._suavizar(sx, sy, puntos);
    }
    _lineaLibre(ax, ay, bx, by) {
      const dx = bx - ax, dy = by - ay, pasos = Math.ceil(Math.sqrt(dx * dx + dy * dy) / 0.2);
      for (let k = 1; k < pasos; k++) {
        const x = ax + dx * k / pasos, y = ay + dy * k / pasos;
        if (!this.pasable(Math.floor(x), Math.floor(y))) return false;
        // margen lateral para no rozar esquinas
        if (!this.pasable(Math.floor(x + 0.25), Math.floor(y + 0.25)) || !this.pasable(Math.floor(x - 0.25), Math.floor(y - 0.25)) ||
            !this.pasable(Math.floor(x + 0.25), Math.floor(y - 0.25)) || !this.pasable(Math.floor(x - 0.25), Math.floor(y + 0.25))) return false;
      }
      return true;
    }
    _suavizar(sx, sy, puntos) {
      const res = [];
      let ax = sx, ay = sy, i = 0;
      while (i < puntos.length) {
        let j = i;
        for (let k = Math.min(puntos.length - 1, i + 8); k > i; k--) if (this._lineaLibre(ax, ay, puntos[k].x, puntos[k].y)) { j = k; break; }
        res.push(puntos[j]); ax = puntos[j].x; ay = puntos[j].y; i = j + 1;
      }
      return res;
    }
    metaJunto(e) { // casillas pegadas a una entidad con tamaño
      return (x, y) => x >= e.tx - 1 && x <= e.tx + e.tam && y >= e.ty - 1 && y <= e.ty + e.tam && !(x >= e.tx && x < e.tx + e.tam && y >= e.ty && y < e.ty + e.tam);
    }
    // Caminos largos recientes hacia una entidad: si otra unidad que estaba al lado acaba de
    // calcular el camino al mismo objetivo, se aprovecha (los grupos no lo calculan 20 veces).
    _reusarCamino(u, e) {
      const lista = this._caminos && this._caminos.get(e.id);
      if (!lista) return null;
      for (const c of lista) {
        if (c.j !== u.jugador || c.tick < this.tick - 30 || Math.abs(c.x - u.x) > 4 || Math.abs(c.y - u.y) > 4) continue;
        if (this._lineaLibre(u.x, u.y, c.camino[0].x, c.camino[0].y)) { u.bloqueado = c.bloqueado; return c.camino.map(p => ({ x: p.x, y: p.y })); }
      }
      return null;
    }
    _guardarCamino(u, e, camino) {
      if (!this._caminos || this.tick - this._caminosTick > 60) { this._caminos = new Map(); this._caminosTick = this.tick; }
      let lista = this._caminos.get(e.id);
      if (!lista) this._caminos.set(e.id, lista = []);
      lista.push({ tick: this.tick, j: u.jugador, bloqueado: u.bloqueado, x: u.x, y: u.y, camino: camino.map(p => ({ x: p.x, y: p.y })) });
    }
    caminoHacia(u, e) {
      this._jug = u.jugador;
      const lejos = Math.abs(u.x - e.x) + Math.abs(u.y - e.y) > 16;
      if (lejos) {
        const c = this._reusarCamino(u, e);
        if (c) { if (e.clase === 'unidad' && !u.bloqueado) c[c.length - 1] = { x: e.x, y: e.y }; return (u.camino = c); }
      }
      this._caminoNuevo(u, e);
      if (lejos && u.camino && u.camino.length >= 3) this._guardarCamino(u, e, u.camino);
      return u.camino;
    }
    _caminoNuevo(u, e) {
      if (e.clase === 'unidad') {
        const tx = Math.floor(e.x), ty = Math.floor(e.y);
        u.camino = this.buscarCamino(u.x, u.y, (x, y) => Math.abs(x - tx) <= 1 && Math.abs(y - ty) <= 1, tx, ty);
        u.bloqueado = this.incompleto;
        // Último paso: ir hasta el propio enemigo. Si ya está en la casilla de al lado,
        // el camino viene vacío y hay que acercarse en línea recta (si no hay nada en medio).
        if (u.bloqueado) { /* no se llega: se queda en el punto más cercano */ }
        else if (u.camino && u.camino.length) u.camino[u.camino.length - 1] = { x: e.x, y: e.y };
        else if (u.camino) u.camino.push({ x: e.x, y: e.y });
      } else {
        u.camino = this.buscarCamino(u.x, u.y, this.metaJunto(e), Math.floor(e.x), Math.floor(e.y));
        u.bloqueado = this.incompleto;
        if (u.camino && !u.bloqueado) { // último paso: arrimarse al borde para quedar a distancia de trabajo
          const ult = u.camino.length ? u.camino[u.camino.length - 1] : { x: u.x, y: u.y };
          const m = 0.45;
          u.camino.push({ x: Math.min(Math.max(ult.x, e.tx - m), e.tx + e.tam + m), y: Math.min(Math.max(ult.y, e.ty - m), e.ty + e.tam + m) });
        }
      }
      return u.camino;
    }
    seguirCamino(u, d) {
      if (!u.camino || !u.camino.length) { u.camino = null; return true; }
      const v = d.velocidad / this.TPS * (this.terrenoEn(u.x, u.y) === 2 ? this.D.relieve.velocidadVado : 1); // los vados frenan
      const p = u.camino[0];
      const dx = p.x - u.x, dy = p.y - u.y, dist = Math.sqrt(dx * dx + dy * dy);
      if (dx - dy !== 0) u.dir = dx - dy > 0 ? 1 : -1;
      // ¿Se ha cerrado el paso desde que se calculó el camino (una muralla nueva, un puente roto)?
      const nx = dist <= v ? p.x : u.x + dx / dist * v, ny = dist <= v ? p.y : u.y + dy / dist * v;
      const ntx = Math.floor(nx), nty = Math.floor(ny);
      if ((ntx !== Math.floor(u.x) || nty !== Math.floor(u.y))) {
        this._jug = u.jugador;
        if (!this.pasable(ntx, nty)) {
          if (u.camino.length === 1) { u.camino = null; return true; } // el destino está justo ahí: se queda al lado
          if (u.estado === 'mover' && u.destino) this.ordenMover([u], u.destino.x, u.destino.y, u.atacarMover);
          else u.camino = null;
          return false;
        }
      }
      if (dist <= v) {
        u.x = p.x; u.y = p.y; u.camino.shift();
        if (!u.camino.length) { u.camino = null; return true; }
      } else { u.x += dx / dist * v; u.y += dy / dist * v; }
      return false;
    }

    // ------------------------------------------------------------ búsquedas
    masCercano(x, y, filtro, maxDist) {
      let mejor = null, md = maxDist == null ? 1e9 : maxDist * maxDist;
      for (const e of this.entidades) {
        if (e.muerto || e.dentro || !filtro(e)) continue; // los refugiados no se ven
        const dx = e.x - x, dy = e.y - y, d = dx * dx + dy * dy;
        if (d < md) { md = d; mejor = e; }
      }
      return mejor;
    }
    enemigoCercano(u, radio) { // primero unidades enemigas; si no hay, edificios (sin contar murallas ni puentes)
      return this.masCercano(u.x, u.y, e => e.jugador >= 0 && e.jugador !== u.jugador && e.clase === 'unidad', radio) ||
             this.masCercano(u.x, u.y, e => e.jugador >= 0 && e.jugador !== u.jugador && e.clase === 'edificio' && !this.esObra(e), radio);
    }
    // Murallas, puertas y puentes: no se atacan solos (solo si cierran el paso o se ordena).
    esObra(e) { const d = this.D.edificios[e.tipo]; return !!(d.muro || d.puente); }
    // Un soldado que no puede llegar (camino bloqueado) ataca el muro enemigo más cercano.
    romperMuro(u, tras) {
      const d = this.D.unidades[u.tipo];
      if (d.recolecta || d.sacerdote || !d.ataque) return false;
      const m = this.masCercano(u.x, u.y, e => e.clase === 'edificio' && e.jugador >= 0 && e.jugador !== u.jugador && this.D.edificios[e.tipo].muro, 3);
      if (!m) return false;
      this.parar(u);
      u.estado = 'atacar'; u.objetivo = m.id; u.auto = true; u.tras = tras || null;
      return true;
    }
    // Lo que una unidad ataca por su cuenta (null = nada): los sacerdotes no atacan,
    // los arietes solo van a por edificios y las catapultas no disparan demasiado cerca.
    objetivoAuto(u, d) {
      if (d.sacerdote || !d.ataque) return null;
      const enemigo = (e) => e.jugador >= 0 && e.jugador !== u.jugador;
      if (d.soloEdificios) return this.masCercano(u.x, u.y, e => enemigo(e) && e.clase === 'edificio' && !this.esObra(e), d.vision);
      if (d.alcanceMin) {
        const lejos = (e) => this.distancia(u, e) >= d.alcanceMin;
        return this.masCercano(u.x, u.y, e => enemigo(e) && e.clase === 'unidad' && lejos(e), d.vision) ||
               this.masCercano(u.x, u.y, e => enemigo(e) && e.clase === 'edificio' && !this.esObra(e) && lejos(e), d.vision);
      }
      return this.enemigoCercano(u, d.vision);
    }
    heridoCercano(u, radio) {
      return this.masCercano(u.x, u.y, e => e.clase === 'unidad' && e.jugador === u.jugador && e.id !== u.id && e.vida < e.vidaMax, radio);
    }
    almacenCercano(u) {
      return this.masCercano(u.x, u.y, e => e.clase === 'edificio' && e.jugador === u.jugador && e.construido && this.D.edificios[e.tipo].almacen);
    }
    poblacion(j) { let n = 0; for (const e of this.entidades) if (!e.muerto && e.clase === 'unidad' && e.jugador === j) n++; return n; }
    limitePoblacion(j) {
      let n = 0;
      for (const e of this.entidades) if (!e.muerto && e.clase === 'edificio' && e.jugador === j && e.construido) n += this.D.edificios[e.tipo].poblacion || 0;
      return Math.min(n, this.D.poblacionMaxima);
    }
    // ¿Se puede poner este edificio aquí? (j = jugador, para la puerta sobre su propia muralla)
    zonaLibre(tipo, tx, ty, j) {
      const d = this.D.edificios[tipo], tam = d.tam;
      if (tx < 1 || ty < 1 || tx + tam > this.W - 1 || ty + tam > this.H - 1) return false;
      if (d.puente) { const i = ty * this.W + tx; return this.terreno[i] === 1 && this.encima[i] === 0; }
      if (d.puerta && this.muroPropio(tx, ty, j)) return true;
      for (let y = ty; y < ty + tam; y++) for (let x = tx; x < tx + tam; x++) if (!this.construible(x, y)) return false;
      return true;
    }
    // ¿Hay al lado (en cruz) una casilla que se pueda pisar? (para empezar un puente)
    _orillaJunto(b) {
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (this.libre(b.tx + dx, b.ty + dy)) return true;
      return false;
    }
    // El tramo de muralla (terminado o no) del jugador j en esa casilla, o null.
    muroPropio(tx, ty, j) {
      if (j == null || !this.dentro(tx, ty)) return null;
      const e = this.porId.get(this.bloqueo[ty * this.W + tx]);
      return e && e.clase === 'edificio' && e.tipo === 'muralla' && e.jugador === j ? e : null;
    }
    puedePagar(j, coste) {
      const r = this.jugadores[j].recursos;
      for (const k in coste) if ((r[k] || 0) < coste[k]) return false;
      return true;
    }
    pagar(j, coste) {
      const r = this.jugadores[j].recursos;
      for (const k in coste) if ((r[k] || 0) < coste[k]) { this.aviso(j, 'Te falta ' + this.D.recursos[k].nombre.toLowerCase() + ' (' + coste[k] + ')'); return false; }
      for (const k in coste) r[k] -= coste[k];
      return true;
    }
    devolver(j, coste) { const r = this.jugadores[j].recursos; for (const k in coste) r[k] += coste[k]; }

    // ------------------------------------------------------------ órdenes
    aplicarOrden(o) {
      const j = o.jugador, J = this.jugadores[j];
      if (!J || J.derrotado || this.ganador >= 0) return;
      const unidades = (o.ids || []).map(id => this.porId.get(id)).filter(u => u && u.clase === 'unidad' && u.jugador === j);
      const edificio = o.edificio != null && typeof o.edificio === 'number' ? this.porId.get(o.edificio) : null;
      const propio = edificio && edificio.clase === 'edificio' && edificio.jugador === j;
      const t = o.objetivo ? this.porId.get(o.objetivo) : null;
      switch (o.tipo) {
        case 'mover': case 'atacarMover':
          this.ordenMover(unidades, o.x, o.y, o.tipo === 'atacarMover'); break;
        case 'detener':
          for (const u of unidades) this.parar(u); break;
        case 'atacar':
          if (!t || t.jugador < 0 || t.jugador === j || t.dentro) break;
          for (const u of unidades) {
            const d = this.D.unidades[u.tipo];
            if (d.sacerdote) { if (t.clase === 'unidad') this.ordenConvertir(u, t); continue; } // el sacerdote convierte
            if (d.soloEdificios && t.clase !== 'edificio') continue;                         // el ariete solo derriba
            this.parar(u); u.estado = 'atacar'; u.objetivo = t.id;
          }
          break;
        case 'convertir':
          if (!t || t.clase !== 'unidad' || t.jugador < 0 || t.jugador === j || t.dentro) break;
          for (const u of unidades) if (this.D.unidades[u.tipo].sacerdote) this.ordenConvertir(u, t);
          break;
        case 'curar':
          if (!t || t.clase !== 'unidad' || t.jugador !== j) break;
          for (const u of unidades) if (this.D.unidades[u.tipo].sacerdote && u.id !== t.id) { this.parar(u); u.estado = 'curar'; u.objetivo = t.id; }
          break;
        case 'refugiar': {
          // al centro urbano indicado o, si no, al más cercano con sitio
          for (const u of unidades) {
            if (!this.D.unidades[u.tipo].recolecta) continue;
            const b = (t && t.clase === 'edificio' && t.jugador === j && t.construido && this.D.edificios[t.tipo].refugio) ? t : this.refugioCercano(u);
            if (!b) { this.aviso(j, 'No hay un centro urbano con sitio'); break; }
            const carga = u.carga, recurso = u.recurso;
            this.parar(u); u.carga = carga; u.recurso = recurso;
            u.estado = 'refugiar'; u.objetivo = b.id;
          }
          break;
        }
        case 'sacar':
          if (propio && edificio.ocupantes.length) this.sacar(edificio);
          break;
        case 'recolectar':
          if (!t || !this.esFuente(t, j)) break;
          for (const u of unidades) if (this.D.unidades[u.tipo].recolecta) { this.parar(u); this.empezarRecolectar(u, t); }
          break;
        case 'construir': {
          const d = this.D.edificios[o.tipoEdificio];
          if (!d) break;
          if (d.epoca > J.epoca) { this.aviso(j, 'Necesitas la ' + this.D.epocas[d.epoca].nombre); break; }
          if (!this.zonaLibre(o.tipoEdificio, o.tx, o.ty, j)) { this.aviso(j, 'No se puede construir ahí'); break; }
          const obreros = unidades.filter(u => this.D.unidades[u.tipo].construye);
          if (!obreros.length || !this.pagar(j, d.coste)) break;
          if (d.puerta) { const m = this.muroPropio(o.tx, o.ty, j); if (m) this.quitar(m); } // la puerta sustituye al tramo de muralla
          const b = this.crearEdificio(o.tipoEdificio, j, o.tx, o.ty, false);
          for (const u of obreros) { this.parar(u); u.estado = 'construir'; u.objetivo = b.id; }
          this.eventos.push({ tipo: 'cimiento', jugador: j, id: b.id });
          break;
        }
        case 'construirLinea': { // muralla o puente: varias casillas seguidas de una vez
          const d = this.D.edificios[o.tipoEdificio];
          if (!d || !d.linea || !Array.isArray(o.casillas)) break;
          if (d.epoca > J.epoca) { this.aviso(j, 'Necesitas la ' + this.D.epocas[d.epoca].nombre); break; }
          const obreros = unidades.filter(u => this.D.unidades[u.tipo].construye);
          if (!obreros.length) break;
          const hechos = [];
          let falta = false;
          for (const c of o.casillas.slice(0, 40)) {
            const tx = c[0] | 0, ty = c[1] | 0;
            if (!this.zonaLibre(o.tipoEdificio, tx, ty, j)) continue; // las casillas ocupadas se saltan
            if (!this.puedePagar(j, d.coste)) { falta = true; break; }
            this.pagar(j, d.coste);
            const b = this.crearEdificio(o.tipoEdificio, j, tx, ty, false);
            if (d.puente) b.eje = o.eje === 'y' ? 'y' : 'x';
            hechos.push(b);
          }
          if (falta) this.aviso(j, hechos.length ? 'No llega para toda la ' + d.nombre.toLowerCase() + ': solo ' + hechos.length + ' tramos' : 'Te faltan recursos para la ' + d.nombre.toLowerCase());
          if (!hechos.length) { if (!falta) this.aviso(j, 'No se puede construir ahí'); break; }
          // empiezan por el tramo más cercano al grupo; luego siguen solos con el resto
          let cx = 0, cy = 0; for (const u of obreros) { cx += u.x; cy += u.y; } cx /= obreros.length; cy /= obreros.length;
          let primero = hechos[0], md = 1e9;
          for (const b of hechos) {
            if (d.puente && !this._orillaJunto(b)) continue; // un puente se empieza desde la orilla
            const dd = (b.tx + 0.5 - cx) ** 2 + (b.ty + 0.5 - cy) ** 2;
            if (dd < md) { md = dd; primero = b; }
          }
          for (const u of obreros) { this.parar(u); u.estado = 'construir'; u.objetivo = primero.id; }
          this.eventos.push({ tipo: 'cimiento', jugador: j, id: primero.id });
          break;
        }
        case 'ayudar':
          if (!t || t.clase !== 'edificio' || t.jugador !== j || t.construido) break;
          for (const u of unidades) if (this.D.unidades[u.tipo].construye) { this.parar(u); u.estado = 'construir'; u.objetivo = t.id; }
          break;
        case 'entrenar': {
          const du = this.D.unidades[o.unidad];
          if (!propio || !edificio.construido || !du) break;
          const de = this.D.edificios[edificio.tipo];
          if (!de.entrena || de.entrena.indexOf(o.unidad) < 0) break;
          if (du.epoca > J.epoca) { this.aviso(j, 'Necesitas la ' + this.D.epocas[du.epoca].nombre); break; }
          if (edificio.cola.length >= 5) { this.aviso(j, 'La cola está llena'); break; }
          if (!this.pagar(j, du.coste)) break;
          edificio.cola.push({ tipo: 'unidad', unidad: o.unidad, progreso: 0, total: this.ticks(du.tiempo), coste: du.coste });
          break;
        }
        case 'avanzarEpoca': {
          if (!propio || !edificio.construido || !this.D.edificios[edificio.tipo].avanzaEpoca) break;
          const sig = J.epoca + 1, ep = this.D.epocas[sig];
          if (!ep || J.avanzando) break;
          if (edificio.cola.length >= 5) { this.aviso(j, 'La cola está llena'); break; }
          if (!this.pagar(j, ep.coste)) break;
          J.avanzando = true;
          edificio.cola.push({ tipo: 'epoca', epoca: sig, progreso: 0, total: this.ticks(ep.tiempo), coste: ep.coste });
          break;
        }
        case 'cancelar': {
          if (!propio) break;
          const it = edificio.cola[o.indice];
          if (!it) break;
          edificio.cola.splice(o.indice, 1);
          this.devolver(j, it.coste);
          if (it.tipo === 'epoca') J.avanzando = false;
          break;
        }
        case 'reunion':
          if (propio) edificio.reunion = { x: o.x, y: o.y, objetivo: o.objetivo || 0 };
          break;
      }
    }

    parar(u) {
      u.estado = 'quieto'; u.camino = null; u.objetivo = 0; u.atacarMover = false; u.auto = false; u.tras = null; u.fallos = 0; u.destino = null; u.canal = 0;
    }
    ordenConvertir(u, t) {
      if (u.fe < 100) { this.aviso(u.jugador, 'El sacerdote aún no ha recuperado la fe'); return; }
      this.parar(u); u.estado = 'convertir'; u.objetivo = t.id;
    }
    refugioCercano(u) {
      return this.masCercano(u.x, u.y, e => e.clase === 'edificio' && e.jugador === u.jugador && e.construido &&
        this.D.edificios[e.tipo].refugio && e.ocupantes.length < this.D.edificios[e.tipo].refugio);
    }
    // Saca a todos los refugiados de un edificio; vuelven a lo que estaban haciendo.
    sacar(b) {
      for (const id of b.ocupantes) {
        const u = this.porId.get(id);
        if (!u) continue;
        const p = this.puntoSalida(b);
        u.dentro = 0; u.x = u.px = p.x; u.y = u.py = p.y;
        this.parar(u);
        this.reanudarTrabajo(u);
      }
      b.ocupantes = [];
      this.eventos.push({ tipo: 'salida', jugador: b.jugador, x: b.x, y: b.y });
    }
    // Un aldeano vuelve a recolectar lo que tenía asignado (si sigue existiendo algo parecido cerca).
    reanudarTrabajo(u) {
      const prev = u.recurso;
      if (!prev || !this.D.unidades[u.tipo].recolecta) { this.parar(u); return; }
      const vivo = this.porId.get(prev.id);
      const r = (vivo && this.esFuente(vivo, u.jugador) && vivo) || this.masCercano(prev.x, prev.y, e => e.tipo === prev.tipo && this.esFuente(e, u.jugador), 8);
      if (r) this.empezarRecolectar(u, r); else this.parar(u);
    }
    ordenMover(unidades, x, y, atacando) {
      const lista = unidades.slice().sort((a, b) => a.id - b.id);
      const guias = []; // caminos largos ya calculados en esta orden (los comparten los que van juntos)
      lista.forEach((u, k) => {
        const off = FORMACION[Math.min(k, FORMACION.length - 1)];
        let dx = x + (lista.length > 1 ? off[0] : 0), dy = y + (lista.length > 1 ? off[1] : 0);
        dx = Math.min(Math.max(dx, 0.3), this.W - 0.3); dy = Math.min(Math.max(dy, 0.3), this.H - 0.3);
        const carga = u.carga, recurso = u.recurso;
        this.parar(u);
        u.carga = carga; u.recurso = recurso;
        const tx = Math.floor(dx), ty = Math.floor(dy);
        // Si otra unidad de la orden salía de muy cerca hacia el mismo sitio lejano, se reutiliza su
        // camino (en mapas grandes calcular 20 caminos de punta a punta costaría demasiado).
        this._jug = u.jugador;
        const destLibre = this.pasable(tx, ty);
        let compartido = null, compBloq = false;
        if (Math.abs(u.x - dx) + Math.abs(u.y - dy) > 16) for (const gu of guias) {
          if (gu.j !== u.jugador || Math.abs(gu.x - u.x) > 4 || Math.abs(gu.y - u.y) > 4) continue;
          const c = gu.camino, ult = c[c.length - 2];
          if (!this._lineaLibre(u.x, u.y, c[0].x, c[0].y)) continue;
          if (gu.bloqueado) { // el guía no llega: se sigue su camino entero (acaba junto al obstáculo)
            compartido = c.map(p => ({ x: p.x, y: p.y })); compBloq = true; break;
          }
          if (!destLibre || this._lineaLibre(ult.x, ult.y, dx, dy)) {
            compartido = c.slice(0, c.length - 1).map(p => ({ x: p.x, y: p.y }));
            compartido.push({ x: tx + 0.5, y: ty + 0.5 });
            break;
          }
        }
        // si el destino está ocupado (un edificio, agua, una montaña), vale cualquier casilla cercana
        // (si no, la búsqueda recorrería el mapa entero buscando una casilla imposible)
        const R = destLibre ? 0 : 2;
        u.camino = compartido || this.buscarCamino(u.x, u.y, (cx, cy) => Math.abs(cx - tx) <= R && Math.abs(cy - ty) <= R, tx, ty) || [];
        u.bloqueado = compartido ? compBloq : this.incompleto;
        if (!compartido && u.camino.length >= 3 && Math.abs(u.x - dx) + Math.abs(u.y - dy) > 16)
          guias.push({ x: u.x, y: u.y, j: u.jugador, bloqueado: u.bloqueado, camino: u.camino.map(p => ({ x: p.x, y: p.y })) });
        if (destLibre && !u.bloqueado) {
          if (u.camino.length) u.camino[u.camino.length - 1] = { x: dx, y: dy }; else u.camino.push({ x: dx, y: dy });
        }
        u.estado = 'mover'; u.destino = { x: dx, y: dy }; u.atacarMover = !!atacando;
      });
    }
    empezarRecolectar(u, r) {
      u.estado = 'recolectar'; u.objetivo = r.id; u.recurso = { tipo: r.tipo, id: r.id, x: r.x, y: r.y }; u.contador = 0; u.camino = null; u.fallos = 0;
    }
    atacarAuto(u, e) {
      const tras = u.atacarMover && u.destino ? { x: u.destino.x, y: u.destino.y } : u.tras;
      this.parar(u);
      u.estado = 'atacar'; u.objetivo = e.id; u.auto = true; u.tras = tras;
    }

    // ------------------------------------------------------------ actualización por tick
    paso(ordenes) {
      this.eventos = [];
      if (this.ganador < 0) {
        for (const o of ordenes) this.aplicarOrden(o);
        for (let i = 0; i < this.entidades.length; i++) {
          const e = this.entidades[i];
          if (e.muerto) continue;
          if (e.clase === 'unidad') { e.px = e.x; e.py = e.y; this.actualizarUnidad(e); }
          else if (e.clase === 'edificio') this.actualizarEdificio(e);
        }
        this.separar();
        this.entidades = this.entidades.filter(e => !e.muerto);
        this.comprobarVictoria();
      }
      this.tick++;
    }

    actualizarUnidad(u) {
      if (u.dentro) return; // refugiado: no hace nada
      const d = this.D.unidades[u.tipo];
      if (u.enfriamiento > 0) u.enfriamiento--;
      if (d.sacerdote && u.fe < 100) u.fe = Math.min(100, u.fe + 100 / (d.recargaFe * this.TPS));
      const escanear = (this.tick + u.id) % 5 === 0;
      switch (u.estado) {
        case 'quieto':
          if (escanear && d.sacerdote) { const h = this.heridoCercano(u, d.vision); if (h) { u.estado = 'curar'; u.objetivo = h.id; u.auto = true; } }
          else if (escanear && !d.recolecta) { const e = this.objetivoAuto(u, d); if (e) this.atacarAuto(u, e); }
          break;
        case 'mover': {
          const fin = this.seguirCamino(u, d);
          if (u.atacarMover && escanear) { const e = this.objetivoAuto(u, d); if (e) { this.atacarAuto(u, e); break; } }
          if (fin && u.atacarMover && u.bloqueado && u.destino && this.romperMuro(u, { x: u.destino.x, y: u.destino.y })) break; // una muralla corta el paso: a derribarla
          if (fin) { u.estado = 'quieto'; u.atacarMover = false; }
          break;
        }
        case 'atacar': this._atacar(u, d); break;
        case 'recolectar': this._recolectar(u, d); break;
        case 'volver': this._volver(u, d); break;
        case 'construir': this._construir(u, d); break;
        case 'refugiar': this._refugiar(u, d); break;
        case 'curar': this._curar(u, d); break;
        case 'convertir': this._convertir(u, d); break;
      }
    }

    // Ir al centro urbano y meterse dentro.
    _refugiar(u, d) {
      const b = this.porId.get(u.objetivo);
      const cabe = b && b.construido && b.jugador === u.jugador && b.ocupantes.length < (this.D.edificios[b.tipo].refugio || 0);
      if (!cabe) { const otro = this.refugioCercano(u); if (otro) { u.objetivo = otro.id; u.camino = null; } else this.parar(u); return; }
      if (this.distancia(u, b) <= ALCANCE_TRABAJO) {
        if (u.carga && u.carga.cantidad > 0 && this.D.edificios[b.tipo].almacen) { // de paso, deja lo que lleva
          this.jugadores[u.jugador].recursos[u.carga.tipo] += u.carga.cantidad; u.carga = null;
        }
        u.dentro = b.id; u.estado = 'dentro'; u.camino = null; u.x = u.px = b.x; u.y = u.py = b.y;
        b.ocupantes.push(u.id);
        this.eventos.push({ tipo: 'refugio', jugador: u.jugador, x: b.x, y: b.y });
        return;
      }
      if (!u.camino && !this.caminoHacia(u, b)) { this.parar(u); return; }
      if (this.seguirCamino(u, d) && this.distancia(u, b) > ALCANCE_TRABAJO && ++u.fallos > 3) this.parar(u);
    }

    // Sacerdote: curar a una unidad propia herida; al acabar busca otra cerca.
    _curar(u, d) {
      const t = this.porId.get(u.objetivo);
      if (!t || t.dentro || t.jugador !== u.jugador || t.vida >= t.vidaMax) {
        const otro = this.heridoCercano(u, d.vision);
        if (otro) { u.objetivo = otro.id; u.camino = null; } else this.parar(u);
        return;
      }
      if (this.distancia(u, t) <= d.alcanceCura) {
        u.camino = null;
        t.vida = Math.min(t.vidaMax, t.vida + d.curacion / this.TPS);
        if ((this.tick + u.id) % 10 === 0) { u.golpeTick = this.tick; this.eventos.push({ tipo: 'cura', jugador: u.jugador, x: t.x, y: t.y }); }
        return;
      }
      if (!u.camino || (this.tick + u.id) % 8 === 0) { if (!this.caminoHacia(u, t)) { this.parar(u); return; } }
      this.seguirCamino(u, d);
    }

    // Sacerdote: convertir una unidad enemiga. Hay que quedarse a su alcance unos segundos.
    _convertir(u, d) {
      const t = this.porId.get(u.objetivo);
      if (!t || t.dentro || t.jugador === u.jugador || t.jugador < 0) { this.parar(u); return; }
      if (this.distancia(u, t) <= d.alcance) {
        u.camino = null;
        if (t.x - t.y !== u.x - u.y) u.dir = (t.x - t.y) > (u.x - u.y) ? 1 : -1;
        if (u.canal === 0) this.eventos.push({ tipo: 'rezo', jugador: u.jugador, x: u.x, y: u.y });
        u.canal++; u.golpeTick = this.tick;
        if (u.canal >= this.ticks(d.conversion)) {
          const antes = t.jugador;
          t.jugador = u.jugador;
          this.parar(t); t.recurso = null; t.carga = null;
          u.fe = 0; this.parar(u);
          this.eventos.push({ tipo: 'convertido', jugador: u.jugador, antes, x: t.x, y: t.y, id: t.id, unidad: t.tipo });
        }
        return;
      }
      u.canal = 0; // se ha alejado: hay que empezar de nuevo
      if (!u.camino || (this.tick + u.id) % 8 === 0) { if (!this.caminoHacia(u, t)) { this.parar(u); return; } }
      this.seguirCamino(u, d);
    }

    _atacar(u, d) {
      const t = this.porId.get(u.objetivo);
      if (!t || t.dentro || t.jugador === u.jugador) { // muerto, refugiado o convertido
        const tras = u.tras;
        if (tras) this.ordenMover([u], tras.x, tras.y, true);
        else if (d.recolecta && u.auto) this.reanudarTrabajo(u); // el aldeano vuelve a su trabajo
        else this.parar(u);
        return;
      }
      const dist = this.distancia(u, t);
      // un aldeano que se defiende no persigue lejos; los demás, algo más
      if (u.auto && dist > (d.recolecta ? 3 : d.vision * 1.8)) { if (d.recolecta) this.reanudarTrabajo(u); else this.parar(u); return; }
      if (d.alcanceMin && dist < d.alcanceMin) { // catapulta: demasiado cerca, se aparta
        if (!u.camino) {
          const dx = u.x - t.x, dy = u.y - t.y, l = Math.sqrt(dx * dx + dy * dy) || 1;
          const nx = u.x + dx / l * 1.5, ny = u.y + dy / l * 1.5;
          if (this.libre(Math.floor(nx), Math.floor(ny))) u.camino = [{ x: nx, y: ny }]; else { this.parar(u); return; }
        }
        this.seguirCamino(u, d);
        return;
      }
      if (dist <= d.alcance + 0.15) {
        u.camino = null; u.fallos = 0;
        if (t.x - t.y !== u.x - u.y) u.dir = (t.x - t.y) > (u.x - u.y) ? 1 : -1;
        if (u.enfriamiento === 0) {
          if (d.distancia) { // el daño llega a la vez; el proyectil solo se dibuja
            u.disparo = { tick: this.tick, x: t.x, y: t.y };
            this.eventos.push({ tipo: 'disparo', jugador: u.jugador, x: u.x, y: u.y, proyectil: d.proyectil });
          }
          if (d.area) this.impactoArea(u, t, d); else this.golpear(u, t, d.ataque);
          u.enfriamiento = this.ticks(d.cadencia); u.golpeTick = this.tick;
        }
        return;
      }
      if (!u.camino || (t.clase === 'unidad' && (this.tick + u.id) % 8 === 0)) {
        if (!this.caminoHacia(u, t)) {
          if (u.bloqueado && !this.D.edificios[t.tipo]?.muro && this.romperMuro(u, u.tras || { x: t.x, y: t.y })) return;
          this.parar(u); return;
        }
      }
      if (this.seguirCamino(u, d) && this.distancia(u, t) > d.alcance + 0.15) {
        // no llega porque una muralla cierra el paso: la derriba y luego sigue
        if (u.bloqueado && !this.D.edificios[t.tipo]?.muro && this.romperMuro(u, u.tras || { x: t.x, y: t.y })) return;
        if (t.clase !== 'unidad' && ++u.fallos > 3) this.parar(u);
      }
    }

    _recolectar(u, d) {
      const cap = this.D.recoleccion.capacidad;
      let r = this.porId.get(u.objetivo);
      if (!r) {
        const tipo = u.recurso && u.recurso.tipo;
        r = tipo && this.masCercano(u.x, u.y, e => e.tipo === tipo && this.esFuente(e, u.jugador), 8);
        if (r) { this.empezarRecolectar(u, r); return; }
        if (u.carga && u.carga.cantidad > 0) { u.estado = 'volver'; u.camino = null; return; }
        this.parar(u); return;
      }
      const recurso = this.recursoDe(r);
      const segundos = r.clase === 'recurso' ? this.D.recoleccion.segundosPorUnidad[recurso] : this.D.edificios[r.tipo].segundosPorUnidad;
      if (u.carga && u.carga.tipo !== recurso) u.carga = null;
      if (u.carga && u.carga.cantidad >= cap) { u.estado = 'volver'; u.camino = null; return; }
      if (this.distancia(u, r) <= ALCANCE_TRABAJO) {
        u.camino = null; u.fallos = 0;
        if (r.x - r.y !== u.x - u.y) u.dir = (r.x - r.y) > (u.x - u.y) ? 1 : -1;
        if (++u.contador >= this.ticks(segundos / this.jugadores[u.jugador].ritmo)) {
          u.contador = 0; u.golpeTick = this.tick;
          if (!u.carga) u.carga = { tipo: recurso, cantidad: 0 };
          u.carga.cantidad++;
          this.eventos.push({ tipo: 'recolecta', jugador: u.jugador, recurso, x: u.x, y: u.y });
          if (r.clase === 'recurso' && --r.cantidad <= 0) this.eliminar(r);
          if (u.carga.cantidad >= cap) { u.estado = 'volver'; u.camino = null; }
        }
        return;
      }
      if (!u.camino && !this.caminoHacia(u, r)) { this.parar(u); return; }
      if (this.seguirCamino(u, d) && this.distancia(u, r) > ALCANCE_TRABAJO) {
        if (++u.fallos > 3) {
          // no se llega: probar con otra fuente cercana del mismo tipo
          const otro = this.masCercano(u.x, u.y, e => e.tipo === r.tipo && e.id !== r.id && this.esFuente(e, u.jugador), 6);
          if (otro) this.empezarRecolectar(u, otro); else this.parar(u);
        }
      }
    }

    _volver(u, d) {
      const b = this.almacenCercano(u);
      if (!b || !u.carga) { const c = u.carga; this.parar(u); u.carga = c; return; }
      if (this.distancia(u, b) <= ALCANCE_TRABAJO) {
        this.jugadores[u.jugador].recursos[u.carga.tipo] += u.carga.cantidad;
        u.carga = null; u.camino = null;
        const prev = u.recurso;
        const vivo = prev && prev.id && this.porId.get(prev.id);
        const r = vivo || (prev && this.masCercano(prev.x, prev.y, e => e.tipo === prev.tipo && this.esFuente(e, u.jugador), 8));
        if (r) this.empezarRecolectar(u, r); else this.parar(u);
        return;
      }
      if (!u.camino && !this.caminoHacia(u, b)) { this.parar(u); return; }
      if (this.seguirCamino(u, d) && this.distancia(u, b) > ALCANCE_TRABAJO && ++u.fallos > 3) this.parar(u);
    }

    _construir(u, d) {
      const b = this.porId.get(u.objetivo);
      if (!b || b.construido) {
        if (b && this.esFuente(b, u.jugador)) { this.empezarRecolectar(u, b); return; } // granja recién hecha: a cultivarla
        if (b && this.D.edificios[b.tipo].linea) { // muralla o puente: sigue con el tramo pendiente más cercano
          const sig = this.masCercano(u.x, u.y, e => e.clase === 'edificio' && e.tipo === b.tipo && e.jugador === u.jugador && !e.construido, 8);
          if (sig) { u.objetivo = sig.id; u.camino = null; u.fallos = 0; return; }
        }
        // al terminar, vuelve a lo que estaba recolectando antes
        const prev = u.recurso, vivo = prev && this.porId.get(prev.id);
        const r = vivo || (prev && this.masCercano(u.x, u.y, e => e.tipo === prev.tipo && this.esFuente(e, u.jugador), 10));
        if (r) this.empezarRecolectar(u, r); else this.parar(u);
        return;
      }
      if (this.distancia(u, b) <= ALCANCE_TRABAJO) {
        u.camino = null; u.fallos = 0;
        if ((this.tick + u.id) % 6 === 0) { u.golpeTick = this.tick; this.eventos.push({ tipo: 'martillo', jugador: u.jugador, x: u.x, y: u.y }); }
        b.progreso++;
        b.vida = Math.min(b.vidaMax, b.vida + b.vidaMax * 0.9 / b.total);
        if (b.progreso >= b.total) {
          b.construido = true; b.vida = Math.max(b.vida, Math.round(b.vidaMax * 0.95));
          if (this.D.edificios[b.tipo].puente) this.bloqueo[b.ty * this.W + b.tx] = 0; // ya se puede cruzar
          this.eventos.push({ tipo: 'construido', jugador: b.jugador, id: b.id, edificio: b.tipo });
        }
        return;
      }
      if (!u.camino && !this.caminoHacia(u, b)) { this.parar(u); return; }
      if (this.seguirCamino(u, d) && this.distancia(u, b) > ALCANCE_TRABAJO && ++u.fallos > 3) this.parar(u);
    }

    golpear(atacante, t, ataque) {
      const dt = this.datosDe(t);
      const da = atacante.clase === 'unidad' ? this.D.unidades[atacante.tipo] : {};
      let fuerza = ataque;
      if (da.bonus && t.clase === 'unidad' && dt.distancia) fuerza += da.bonus;       // caballería contra tiradores
      if (da.contraEdificios && t.clase === 'edificio') fuerza *= da.contraEdificios; // flechas contra muros
      const aDistancia = atacante.clase === 'edificio' || da.distancia;
      const armadura = (dt.armadura || 0) + (aDistancia ? dt.armaduraDistancia || 0 : 0); // el ariete aguanta flechas
      const dano = Math.max(1, Math.round(fuerza - armadura));
      t.vida -= dano;
      t.golpeado = this.tick;
      this.eventos.push({ tipo: 'golpe', jugador: t.jugador, x: t.x, y: t.y, de: atacante.tipo });
      if (t.vida <= 0) { this.eliminar(t); return; }
      if (t.clase !== 'unidad' || atacante.clase !== 'unidad') return;
      const du = this.D.unidades[t.tipo];
      const puedeResponder = du.ataque > 0 && !du.sacerdote && !(du.soloEdificios) &&
        !(du.alcanceMin && this.distancia(t, atacante) < du.alcanceMin);
      if (!puedeResponder) return;
      if (du.defiende) {
        // El aldeano se defiende si estaba trabajando o parado (no si huye o va a refugiarse).
        if (['quieto', 'recolectar', 'volver', 'construir'].indexOf(t.estado) >= 0) this.atacarAuto(t, atacante);
        return;
      }
      // Un soldado atacado responde si estaba parado o si estaba golpeando un edificio.
      if (!du.recolecta) {
        const actual = t.estado === 'atacar' && this.porId.get(t.objetivo);
        if (t.estado === 'quieto' || (actual && actual.clase === 'edificio')) this.atacarAuto(t, atacante);
      }
    }

    // Catapulta: daño completo al objetivo y la mitad a todo lo que esté alrededor (¡también a los tuyos!).
    impactoArea(u, t, d) {
      const cx = t.x, cy = t.y, r2 = d.area * d.area;
      this.eventos.push({ tipo: 'explosion', jugador: u.jugador, x: cx, y: cy });
      const tocados = this.entidades.filter(e => !e.muerto && !e.dentro && e.id !== t.id && e.clase !== 'recurso' &&
        (e.x - cx) * (e.x - cx) + (e.y - cy) * (e.y - cy) <= r2);
      this.golpear(u, t, d.ataque);
      for (const e of tocados) if (!e.muerto) this.golpear(u, e, d.ataque / 2);
    }

    actualizarEdificio(b) {
      if (!b.construido) return;
      const d = this.D.edificios[b.tipo];
      // Arma del edificio: la torre siempre; el centro urbano solo con aldeanos refugiados dentro.
      const arma = d.ataque ? { ataque: d.ataque, alcance: d.alcance, cadencia: d.cadencia }
        : (d.refugio && b.ocupantes.length ? { ataque: d.ataqueRefugio + Math.floor(b.ocupantes.length / 2), alcance: d.alcanceRefugio, cadencia: d.cadenciaRefugio } : null);
      if (arma) {
        if (b.enfriamiento > 0) b.enfriamiento--;
        else {
          const objetivo = this.masCercano(b.x, b.y, e => e.clase === 'unidad' && e.jugador >= 0 && e.jugador !== b.jugador, arma.alcance + b.tam / 2);
          if (objetivo) {
            b.disparo = { tick: this.tick, x: objetivo.x, y: objetivo.y };
            this.eventos.push({ tipo: 'flecha', jugador: b.jugador, x: b.x, y: b.y });
            b.enfriamiento = this.ticks(arma.cadencia);
            this.golpear(b, objetivo, arma.ataque);
          }
        }
      }
      const it = b.cola[0];
      if (!it) return;
      if (it.progreso < it.total) it.progreso++;
      if (it.progreso < it.total) return;
      if (it.tipo === 'epoca') {
        const J = this.jugadores[b.jugador];
        J.epoca = it.epoca; J.avanzando = false; b.cola.shift();
        this.eventos.push({ tipo: 'epoca', jugador: b.jugador, epoca: it.epoca });
        return;
      }
      if (this.poblacion(b.jugador) >= this.limitePoblacion(b.jugador)) {
        if (!it.avisado) { it.avisado = true; this.aviso(b.jugador, 'Población al máximo: construye casas'); }
        return;
      }
      b.cola.shift();
      const p = this.puntoSalida(b);
      const u = this.crearUnidad(it.unidad, b.jugador, p.x, p.y);
      this.eventos.push({ tipo: 'entrenado', jugador: b.jugador, id: u.id, unidad: it.unidad });
      if (b.reunion) {
        const r = b.reunion.objetivo && this.porId.get(b.reunion.objetivo);
        if (r && this.esFuente(r, u.jugador) && this.D.unidades[u.tipo].recolecta) this.empezarRecolectar(u, r);
        else if (r && r.clase === 'edificio' && r.jugador === b.jugador && !r.construido && this.D.unidades[u.tipo].construye) { u.estado = 'construir'; u.objetivo = r.id; }
        else this.ordenMover([u], b.reunion.x, b.reunion.y, false);
      }
    }
    puntoSalida(b) {
      const hacia = b.reunion || { x: b.x + b.tam, y: b.y + b.tam };
      let mejor = null, md = 1e9;
      for (let y = b.ty - 1; y <= b.ty + b.tam; y++) for (let x = b.tx - 1; x <= b.tx + b.tam; x++) {
        if (!this.libre(x, y)) continue;
        const dx = x + 0.5 - hacia.x, dy = y + 0.5 - hacia.y, dd = dx * dx + dy * dy;
        if (dd < md) { md = dd; mejor = { x: x + 0.5, y: y + 0.5 }; }
      }
      return mejor || { x: b.x, y: b.y + b.tam / 2 + 0.5 };
    }

    // Empuja suavemente a las unidades que se pisan.
    separar() {
      const us = this.entidades.filter(e => e.clase === 'unidad' && !e.muerto && !e.dentro);
      for (let i = 0; i < us.length; i++) for (let k = i + 1; k < us.length; k++) {
        const a = us[i], b = us[k];
        const dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy;
        if (d2 >= 0.16) continue;
        let nx, ny;
        if (d2 < 1e-6) { nx = ((a.id * 7 + b.id) % 3) - 1 || 1; ny = ((a.id + b.id * 5) % 3) - 1; } else { const d = Math.sqrt(d2); nx = dx / d; ny = dy / d; }
        const f = 0.04;
        const quietoA = a.estado !== 'mover', quietoB = b.estado !== 'mover';
        if (quietoA && this.libre(Math.floor(a.x - nx * f), Math.floor(a.y - ny * f))) { a.x -= nx * f; a.y -= ny * f; }
        if (quietoB && this.libre(Math.floor(b.x + nx * f), Math.floor(b.y + ny * f))) { b.x += nx * f; b.y += ny * f; }
      }
    }

    comprobarVictoria() {
      const vivos = this.jugadores.map(() => 0);
      for (const e of this.entidades) if (e.jugador >= 0 && !e.muerto && !(e.clase === 'edificio' && this.D.edificios[e.tipo].noCuenta)) vivos[e.jugador]++; // murallas y puentes no cuentan
      this.jugadores.forEach((J, i) => {
        if (!J.derrotado && vivos[i] === 0) { J.derrotado = true; this.eventos.push({ tipo: 'derrota', jugador: i }); }
      });
      const quedan = this.jugadores.filter(J => !J.derrotado);
      if (quedan.length === 1 && this.ganador < 0) {
        this.ganador = quedan[0].id;
        this.eventos.push({ tipo: 'fin', ganador: this.ganador });
      }
    }

    // Huella del estado para comprobar que dos simulaciones van idénticas.
    huella() {
      let h = 2166136261 >>> 0;
      const mezclar = (n) => { h ^= (n | 0); h = Math.imul(h, 16777619) >>> 0; };
      mezclar(this.tick); mezclar(this.azar);
      for (const J of this.jugadores) { for (const k in J.recursos) mezclar(J.recursos[k]); mezclar(J.epoca); }
      for (const e of this.entidades) { mezclar(e.id); mezclar(Math.round(e.x * 1000)); mezclar(Math.round(e.y * 1000)); mezclar(Math.round((e.vida || e.cantidad || 0) * 100)); }
      return h.toString(16);
    }
  }

  EI.Simulacion = Simulacion;
})();
