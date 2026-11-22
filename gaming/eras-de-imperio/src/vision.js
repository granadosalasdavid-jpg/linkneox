// =====================================================================
//  ERAS DE IMPERIO — VISIÓN DE UN JUGADOR
//  Calcula qué casillas ve ahora y cuáles ha explorado un jugador, y
//  recuerda los edificios enemigos que ha visto. No dibuja nada: lo usan
//  la niebla de la pantalla (niebla.js) y la IA, que así no hace trampas.
//  Solo lee el estado de la simulación, así que es determinista.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  class Vision {
    constructor(sim, jugador) {
      this.sim = sim;
      this.j = jugador;
      this.W = sim.W; this.H = sim.H;
      this.activa = sim.niebla != null ? sim.niebla : EI.DATOS.niebla !== false; // opción de la partida
      this.explorado = new Uint8Array(this.W * this.H);
      this.visible = new Uint8Array(this.W * this.H);
      this.recuerdos = new Map(); // edificios enemigos vistos: id -> copia de cómo eran
      this.tickCalculado = -1;
    }

    // Recalcula (como mucho una vez por tick). Devuelve true si ha cambiado algo.
    actualizar() {
      const sim = this.sim;
      if (this.tickCalculado === sim.tick && this._ganador === sim.ganador) return false;
      this.tickCalculado = sim.tick; this._ganador = sim.ganador;
      const W = this.W, H = this.H, vis = this.visible, exp = this.explorado;
      vis.fill(0);
      if (!this.activa || sim.ganador >= 0) { vis.fill(1); exp.fill(1); } // sin niebla, o al acabar: se ve todo
      else {
        for (const e of sim.entidades) {
          if (e.jugador !== this.j || e.muerto || e.dentro) continue;
          const d = sim.datosDe(e);
          const r = e.clase === 'unidad' ? d.vision : (d.vision || 4) + e.tam / 2;
          const x0 = Math.max(0, Math.floor(e.x - r)), x1 = Math.min(W - 1, Math.floor(e.x + r));
          const y0 = Math.max(0, Math.floor(e.y - r)), y1 = Math.min(H - 1, Math.floor(e.y + r));
          for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
            const dx = x + 0.5 - e.x, dy = y + 0.5 - e.y;
            if (dx * dx + dy * dy <= r * r) { vis[y * W + x] = 1; exp[y * W + x] = 1; }
          }
        }
      }
      for (const e of sim.entidades) {
        if (e.clase !== 'edificio' || e.jugador === this.j || e.muerto) continue;
        if (this.edificioVisible(e)) this.recuerdos.set(e.id, {
          id: e.id, clase: 'edificio', tipo: e.tipo, jugador: e.jugador, tx: e.tx, ty: e.ty, tam: e.tam, x: e.x, y: e.y, eje: e.eje,
          construido: e.construido, progreso: e.progreso, total: e.total, epoca: sim.jugadores[e.jugador].epoca, recuerdo: true,
        });
      }
      for (const [id, r] of this.recuerdos) { // si ya no está y su sitio se ve, se olvida
        const vivo = sim.obtener(id);
        if ((!vivo || vivo.jugador === this.j) && this.edificioVisible(r)) this.recuerdos.delete(id);
      }
      return true;
    }

    verCasilla(x, y) {
      const tx = Math.floor(x), ty = Math.floor(y);
      return tx >= 0 && ty >= 0 && tx < this.W && ty < this.H && this.visible[ty * this.W + tx] === 1;
    }
    exploradaCasilla(x, y) {
      const tx = Math.floor(x), ty = Math.floor(y);
      return tx >= 0 && ty >= 0 && tx < this.W && ty < this.H && this.explorado[ty * this.W + tx] === 1;
    }
    edificioVisible(e) {
      for (let y = e.ty; y < e.ty + e.tam; y++) for (let x = e.tx; x < e.tx + e.tam; x++) if (this.verCasilla(x, y)) return true;
      return false;
    }
    edificioExplorado(e) {
      for (let y = e.ty; y < e.ty + e.tam; y++) for (let x = e.tx; x < e.tx + e.tam; x++) if (this.exploradaCasilla(x, y)) return true;
      return false;
    }
    // ¿Este jugador ve ahora mismo esta entidad?
    seVe(e) {
      if (e.jugador === this.j) return true;
      if (e.clase === 'unidad') return !e.dentro && this.verCasilla(e.x, e.y);
      if (e.clase === 'recurso') return this.edificioExplorado(e);
      return this.edificioVisible(e);
    }
    // Edificios enemigos recordados que ahora mismo no se ven.
    recuerdosOcultos() {
      const lista = [];
      for (const r of this.recuerdos.values()) if (!this.edificioVisible(r)) lista.push(r);
      return lista;
    }
  }

  EI.Vision = Vision;
})();
