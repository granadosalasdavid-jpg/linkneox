// =====================================================================
//  ERAS DE IMPERIO — ARRANQUE Y BUCLE PRINCIPAL
//  La simulación avanza a ticks fijos (10 por segundo); el dibujo va a
//  la velocidad de la pantalla e interpola las posiciones entre ticks.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  const $ = (s) => document.querySelector(s);
  const params = new URLSearchParams(location.search);

  class Juego {
    constructor() {
      this.canvas = $('#juego');
      this.velocidad = 1;
      this.pausa = false;
      this.alfa = 0;
      this.bordes = params.get('bordes') !== '0';
      EI.Graficos.cargarSprites();
      // Opciones de la portada: se recuerdan para la próxima vez (si el navegador lo permite).
      this.selects = { dificultad: '#dificultad', tamano: '#op-tamano', mapa: '#op-mapa', relieve: '#op-relieve', recursos: '#op-recursos', niebla: '#op-niebla' };
      try {
        const guardadas = JSON.parse(localStorage.getItem('eras-opciones') || '{}');
        for (const k in this.selects) if (guardadas[k] && $(this.selects[k]).querySelector(`option[value="${guardadas[k]}"]`)) $(this.selects[k]).value = guardadas[k];
      } catch (e) { /* sin almacenamiento: valores por defecto */ }
      $('#jugar').addEventListener('click', () => this.empezar(this.leerOpciones()));
      $('#otra').addEventListener('click', () => this.empezar(this.opciones));
      $('#pausa').addEventListener('click', () => this.alternarPausa());
      document.querySelectorAll('[data-vel]').forEach(b => b.addEventListener('click', () => this.ponerVelocidad(+b.dataset.vel)));
      const botonSonido = (id, que) => {
        const b = $(id), pintar = () => b.classList.toggle('apagado', !EI.Sonido.ajustes[que]);
        b.addEventListener('click', () => { EI.Sonido.iniciar(); EI.Sonido.alternar(que); pintar(); });
        pintar();
      };
      botonSonido('#btn-sonido', 'sonido');
      botonSonido('#btn-musica', 'musica');
      // El navegador solo deja sonar después de un clic o una tecla del jugador.
      const despertar = () => { if (this.sim) { EI.Sonido.iniciar(); EI.Sonido.empezarMusica(); } };
      window.addEventListener('pointerdown', despertar);
      window.addEventListener('keydown', despertar);
      if (params.get('auto') === '1') this.empezar(this.leerOpciones());
    }

    // Lee las opciones de la portada (en pruebas, los parámetros de la dirección mandan:
    // ?dificultad=, ?tamano=, ?mapa=aleatorio, ?relieve=llano, ?recursos=, ?niebla=0).
    leerOpciones() {
      const o = {};
      for (const k in this.selects) o[k] = params.get(k) || $(this.selects[k]).value;
      if (!params.has('auto')) try { localStorage.setItem('eras-opciones', JSON.stringify(o)); } catch (e) { /* da igual */ }
      return o;
    }

    empezar(op) {
      this.opciones = op;
      const dificultad = this.dificultad = op.dificultad;
      $('#portada').hidden = true; $('#final').hidden = true;
      const demo = params.get('ia') === 'ambos', nivel0 = params.get('ia0') || 'dificil';
      const ritmoIA = (n) => (EI.DATOS.ia[n] || EI.DATOS.ia.normal).recoleccion || 1;
      const aleatorio = op.mapa === 'aleatorio';
      this.sim = new EI.Simulacion({
        // mapa aleatorio: semilla nueva en cada partida (en red, la elegiría el anfitrión y la enviaría)
        semilla: params.has('semilla') ? +params.get('semilla') : aleatorio ? Math.floor(Math.random() * 1e9) : undefined,
        aleatorio, tamano: op.tamano, relieve: op.relieve, recursos: op.recursos, niebla: op.niebla !== '0',
        ritmo: [demo ? ritmoIA(nivel0) : 1, ritmoIA(dificultad)], // tú siempre recoges a ritmo normal
      });
      this.lockstep = new EI.Lockstep(this.sim, 2);
      this.lockstep.ias.push(new EI.IA(1, dificultad));
      if (demo) this.lockstep.ias.push(new EI.IA(0, nivel0)); // modo demostración
      this.render = new EI.Render(this.canvas, this.sim);
      this.render.tamano();
      if (!this.ui) this.ui = new EI.Interfaz(this);
      this.ui.seleccion.clear(); this.ui.fantasma = null; this.ui.grupos = {};
      const c = this.sim.entidades.find(e => e.jugador === 0 && e.tipo === 'centro');
      this.render.centrarEn(c.x + 2, c.y - 2);
      this.ponerVelocidad(+(params.get('vel') || 1));
      this.pausa = false;
      this.acumulado = 0; this.ultimo = performance.now();
      this.ui.mensaje('¡Empieza la partida! Pon a tus aldeanos a recolectar.', 'bueno');
      EI.Sonido.iniciar(); EI.Sonido.pararMusica(); EI.Sonido.empezarMusica();
      if (!this.enMarcha) { this.enMarcha = true; requestAnimationFrame(t => this.bucle(t)); }
    }
    ponerVelocidad(v) {
      this.velocidad = v;
      document.querySelectorAll('[data-vel]').forEach(b => b.classList.toggle('activo', +b.dataset.vel === v));
    }
    alternarPausa() {
      if (!this.sim || this.sim.ganador >= 0) return;
      this.pausa = !this.pausa;
      $('#pausa').textContent = this.pausa ? '▶ Seguir' : '⏸ Pausa';
      $('#aviso-pausa').hidden = !this.pausa;
    }

    // Avanza varios ticks de golpe (útil para pruebas desde la consola).
    avanzarTicks(n) { for (let i = 0; i < n && this.sim.ganador < 0; i++) this.ui.procesarEventos(this.lockstep.avanzar()); this.comprobarFin(); }

    bucle(t) {
      const dt = Math.min(250, t - this.ultimo); this.ultimo = t;
      const ms = 1000 / this.sim.TPS;
      if (!this.pausa && this.sim.ganador < 0) {
        this.acumulado += dt * this.velocidad;
        let n = 0;
        while (this.acumulado >= ms && n < 80) { this.ui.procesarEventos(this.lockstep.avanzar()); this.acumulado -= ms; n++; }
        if (n === 80) this.acumulado = 0;
        this.comprobarFin();
      }
      this.alfa = this.sim.ganador >= 0 ? 1 : Math.min(1, this.acumulado / ms);
      this.ui.actualizar(dt / 1000);
      this.render.dibujar(this.alfa, this.ui);
      if (!this._mini || t - this._mini > 200) { this.render.dibujarMinimapa($('#minimapa')); this._mini = t; }
      requestAnimationFrame(tt => this.bucle(tt));
    }
    comprobarFin() {
      if (this.sim.ganador < 0 || !$('#final').hidden) return;
      const gana = this.sim.ganador === 0, seg = Math.floor(this.sim.tick / this.sim.TPS);
      $('#final-titulo').textContent = gana ? '¡Victoria!' : 'Derrota';
      $('#final-titulo').className = gana ? 'victoria' : 'derrota';
      $('#final-texto').textContent = (gana ? 'Has destruido todos los edificios y unidades del rival' : 'El rival ha destruido todo tu imperio') +
        ` en ${Math.floor(seg / 60)} min ${seg % 60} s. Época alcanzada: ${this.sim.D.epocas[this.sim.jugadores[0].epoca].nombre}.`;
      $('#final').hidden = false;
    }
  }

  window.addEventListener('load', () => { EI.juego = new Juego(); window.juego = EI.juego; });
})();
