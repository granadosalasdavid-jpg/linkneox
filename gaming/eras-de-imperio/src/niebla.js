// =====================================================================
//  ERAS DE IMPERIO — NIEBLA DE GUERRA (lo que se dibuja)
//  Usa la visión del jugador (vision.js) y la pinta sobre el mapa:
//   - Sin explorar: negro.
//   - Explorado pero sin nadie tuyo cerca: oscurecido; se ve el terreno,
//     los recursos y los edificios enemigos tal como los viste la última vez.
//   - A la vista de tus unidades o edificios: todo normal.
//  No cambia la simulación: en una partida en red cada jugador tendría su niebla.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  class Niebla extends EI.Vision {
    constructor(sim, jugador) {
      super(sim, jugador);
      this.canvas = document.createElement('canvas');
      this.canvas.width = this.W; this.canvas.height = this.H;
      this.actualizar();
    }
    actualizar() {
      const cambio = super.actualizar();
      if (cambio) this.pintar();
      return cambio;
    }

    // Imagen de la niebla: un píxel por casilla (luego se estira y se suaviza).
    pintar() {
      const ctx = this.canvas.getContext('2d');
      const img = ctx.createImageData(this.W, this.H), d = img.data;
      for (let i = 0; i < this.W * this.H; i++) {
        d[i * 4] = 8; d[i * 4 + 1] = 10; d[i * 4 + 2] = 8;
        d[i * 4 + 3] = this.visible[i] ? 0 : this.explorado[i] ? 120 : 255;
      }
      ctx.putImageData(img, 0, 0);
    }
    // Dibuja la niebla sobre el mapa (el contexto ya está en coordenadas del mapa isométrico).
    dibujar(ctx) {
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      // casilla (x,y) -> isométrico: ((x - y) * 32, (x + y) * 16)
      ctx.transform(32, 16, -32, 16, 0, 0);
      ctx.drawImage(this.canvas, 0, 0);
      ctx.restore();
    }
  }

  EI.Niebla = Niebla;
})();
