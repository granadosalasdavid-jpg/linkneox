// =====================================================================
//  ERAS DE IMPERIO — SONIDO
//  Todos los efectos y la música se fabrican aquí mismo con el sintetizador
//  del navegador (Web Audio), sin archivos. Si en EI.SONIDOS (archivo
//  sonidos/sonidos.js) hay archivos para un sonido, se usan esos en su lugar.
//  Los sonidos de la batalla solo se oyen si pasan dentro de la pantalla,
//  y suenan más a la izquierda o a la derecha según dónde ocurren.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  let ac = null, salida = null, busEfectos = null, busMusica = null, ruidoBuf = null, medidor = null;
  const ultimo = {};      // último momento en que sonó cada tipo (para no saturar)
  const archivos = {};    // sonidos cargados desde archivo: nombre -> [AudioBuffer]
  let musicaNodo = null, musicaTimer = null, musicaArchivo = null;

  const ajustes = { sonido: true, musica: true, volumen: 0.8 };
  try { Object.assign(ajustes, JSON.parse(localStorage.getItem('eras.sonido') || '{}')); } catch (e) { /* sin almacenamiento */ }
  const guardar = () => { try { localStorage.setItem('eras.sonido', JSON.stringify(ajustes)); } catch (e) { /* nada */ } };

  // Separación mínima en milisegundos entre dos sonidos del mismo tipo.
  const ESPERA = { golpe: 70, metal: 70, impacto: 70, honda: 90, ballesta: 90, ariete: 150, catapulta: 200, explosion: 150,
    cura: 500, rezo: 800, convertido: 300, refugio: 250, talar: 110, picar: 110, cosecha: 160, martillo: 120, flecha: 90, muerte: 120,
    seleccion: 40, orden: 60, boton: 40, aviso: 400, ataque: 6000, destruido: 300 };

  // ---------------------------------------------------------- arranque
  function iniciar() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    ac = new Ctx();
    salida = ac.createGain(); salida.gain.value = ajustes.volumen; salida.connect(ac.destination);
    medidor = ac.createAnalyser(); medidor.fftSize = 2048; salida.connect(medidor);
    busEfectos = ac.createGain(); busEfectos.gain.value = ajustes.sonido ? 1 : 0; busEfectos.connect(salida);
    busMusica = ac.createGain(); busMusica.gain.value = ajustes.musica ? 0.5 : 0; busMusica.connect(salida);
    ruidoBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
    const d = ruidoBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    cargarArchivos();
  }
  function cargarArchivos() {
    const lista = EI.SONIDOS || {};
    if (!location.protocol.startsWith('http')) return; // con doble clic en index.html no se pueden leer
    for (const nombre in lista) {
      const rutas = [].concat(lista[nombre]);
      archivos[nombre] = [];
      for (const r of rutas) {
        fetch(r).then(x => { if (!x.ok) throw new Error(x.status); return x.arrayBuffer(); })
          .then(b => ac.decodeAudioData(b))
          .then(buf => { archivos[nombre].push(buf); if (nombre === 'musica' && ajustes.musica) empezarMusica(); })
          .catch(() => console.info('Sin archivo de sonido', r, ': se usa el sintetizado'));
      }
    }
  }

  // ---------------------------------------------------------- piezas básicas
  // Devuelve un nodo de salida con volumen y paneo ya conectado al bus.
  function canal(vol, pan, bus) {
    const g = ac.createGain(); g.gain.value = vol;
    if (pan && ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); p.connect(bus || busEfectos); }
    else g.connect(bus || busEfectos);
    return g;
  }
  // Tono con envolvente: tipo de onda, frecuencia inicial y final, duración, volumen.
  function tono(destino, t, onda, f0, f1, dur, vol, ataque) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = onda; o.frequency.setValueAtTime(f0, t);
    if (f1 && f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + (ataque || 0.005));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(destino);
    o.start(t); o.stop(t + dur + 0.02);
  }
  // Ráfaga de ruido filtrado.
  function ruido(destino, t, filtro, f0, f1, dur, vol, q) {
    const s = ac.createBufferSource(); s.buffer = ruidoBuf;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ac.createBiquadFilter(); f.type = filtro; f.Q.value = q || 1;
    f.frequency.setValueAtTime(f0, t);
    if (f1 && f1 !== f0) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ac.createGain();
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(destino);
    s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.02);
  }
  const nota = (n) => 440 * Math.pow(2, (n - 69) / 12); // número MIDI -> hercios
  const azar = (a, b) => a + Math.random() * (b - a);

  // ---------------------------------------------------------- efectos sintetizados
  const SINTE = {
    golpe(d, t) { tono(d, t, 'sine', azar(130, 170), 60, 0.12, 0.7); ruido(d, t, 'bandpass', azar(900, 1400), 400, 0.09, 0.6, 1.5); },
    metal(d, t) { tono(d, t, 'triangle', azar(1500, 2100), 900, 0.18, 0.25); tono(d, t, 'sine', 140, 70, 0.1, 0.5); ruido(d, t, 'highpass', 2500, 2500, 0.07, 0.45); },
    talar(d, t) { tono(d, t, 'sine', azar(260, 330), 180, 0.08, 0.6); ruido(d, t, 'bandpass', 700, 500, 0.06, 0.5, 2); },
    picar(d, t) { tono(d, t, 'triangle', azar(1700, 2300), 1400, 0.12, 0.25); ruido(d, t, 'highpass', 3000, 3000, 0.05, 0.4); },
    cosecha(d, t) { ruido(d, t, 'highpass', 2500, 4000, 0.14, 0.18); },
    martillo(d, t) { tono(d, t, 'square', azar(500, 650), 300, 0.05, 0.15); ruido(d, t, 'bandpass', 1500, 800, 0.05, 0.4, 2); },
    flecha(d, t) { ruido(d, t, 'bandpass', 3500, 700, 0.18, 0.35, 3); },
    honda(d, t) { ruido(d, t, 'bandpass', 900, 2200, 0.12, 0.3, 4); ruido(d, t + 0.12, 'bandpass', 2200, 900, 0.1, 0.25, 4); },
    ballesta(d, t) { tono(d, t, 'square', 260, 90, 0.07, 0.15); ruido(d, t, 'bandpass', 3000, 900, 0.14, 0.35, 3); },
    ariete(d, t) { tono(d, t, 'sine', 70, 40, 0.35, 0.9); ruido(d, t, 'lowpass', 700, 150, 0.3, 0.7); },
    catapulta(d, t) { tono(d, t, 'square', 110, 70, 0.12, 0.12); ruido(d, t + 0.05, 'bandpass', 600, 1800, 0.35, 0.3, 2); },
    explosion(d, t) { ruido(d, t, 'lowpass', 1200, 100, 0.7, 0.9); tono(d, t, 'sine', 90, 40, 0.5, 0.7); },
    cura(d, t) { [84, 88, 91].forEach((n, i) => tono(d, t + i * 0.05, 'sine', nota(n), 0, 0.35, 0.08)); },
    rezo(d, t) { [60, 64, 67, 71].forEach(n => tono(d, t, 'triangle', nota(n), 0, 1.2, 0.05, 0.3)); },
    convertido(d, t) { [76, 83].forEach((n, i) => { tono(d, t + i * 0.25, 'sine', nota(n), 0, 1.0, 0.25); tono(d, t + i * 0.25, 'sine', nota(n) * 2.01, 0, 0.6, 0.06); }); },
    refugio(d, t) { tono(d, t, 'sine', nota(79), 0, 0.5, 0.2); tono(d, t, 'sine', nota(79) * 2.4, 0, 0.3, 0.05); },
    impacto(d, t) { tono(d, t, 'sine', azar(400, 520), 250, 0.05, 0.35); ruido(d, t, 'bandpass', 1800, 900, 0.04, 0.3, 2); },
    muerte(d, t) { tono(d, t, 'sawtooth', azar(170, 210), 80, 0.25, 0.12); ruido(d, t, 'lowpass', 600, 200, 0.2, 0.25); },
    destruido(d, t) { ruido(d, t, 'lowpass', 900, 80, 0.9, 0.8); tono(d, t, 'sine', 70, 35, 0.8, 0.6); },
    seleccion(d, t) { tono(d, t, 'sine', 1100, 1100, 0.04, 0.12); },
    orden(d, t) { tono(d, t, 'sine', 880, 880, 0.04, 0.12); tono(d, t + 0.06, 'sine', 1175, 1175, 0.05, 0.12); },
    boton(d, t) { tono(d, t, 'triangle', 700, 700, 0.04, 0.15); },
    aviso(d, t) { tono(d, t, 'square', 150, 140, 0.16, 0.12); tono(d, t + 0.18, 'square', 120, 115, 0.2, 0.12); },
    entrenado(d, t) { [72, 79].forEach((n, i) => tono(d, t + i * 0.1, 'triangle', nota(n), 0, 0.3, 0.25)); },
    construido(d, t) { [67, 71, 74].forEach((n, i) => tono(d, t + i * 0.09, 'triangle', nota(n), 0, 0.35, 0.25)); },
    ataque(d, t) { // cuerno de alarma
      for (let k = 0; k < 2; k++) {
        const t0 = t + k * 0.55;
        tono(d, t0, 'sawtooth', 220, 205, 0.45, 0.18, 0.05); tono(d, t0, 'sawtooth', 221.5, 206, 0.45, 0.12, 0.05);
      }
    },
    epoca(d, t) { // fanfarria
      [[60, 0, 0.25], [64, 0.18, 0.25], [67, 0.36, 0.25], [72, 0.54, 0.9]].forEach(([n, dt, dur]) => {
        tono(d, t + dt, 'sawtooth', nota(n), 0, dur, 0.12, 0.02); tono(d, t + dt, 'triangle', nota(n + 12), 0, dur, 0.1, 0.02);
      });
    },
    victoria(d, t) { [60, 64, 67, 72, 76, 79, 84].forEach((n, i) => tono(d, t + i * 0.12, 'triangle', nota(n), 0, i === 6 ? 1.4 : 0.3, 0.25)); },
    derrota(d, t) { [69, 65, 62, 57].forEach((n, i) => tono(d, t + i * 0.35, 'sawtooth', nota(n), 0, i === 3 ? 1.6 : 0.4, 0.1, 0.03)); },
  };

  // ---------------------------------------------------------- reproducir
  // opciones: { vol, pan } — vol entre 0 y 1
  function tocar(nombre, opciones) {
    if (!ac || !ajustes.sonido) return;
    const ahora = performance.now();
    if (ultimo[nombre] && ahora - ultimo[nombre] < (ESPERA[nombre] || 30)) return;
    ultimo[nombre] = ahora;
    const o = opciones || {};
    const destino = canal(o.vol == null ? 1 : o.vol, o.pan || 0);
    const bufs = archivos[nombre];
    if (bufs && bufs.length) {
      const s = ac.createBufferSource();
      s.buffer = bufs[Math.floor(Math.random() * bufs.length)];
      s.playbackRate.value = azar(0.94, 1.06);
      s.connect(destino); s.start();
      return;
    }
    if (SINTE[nombre]) SINTE[nombre](destino, ac.currentTime + 0.01);
  }

  // Volumen y paneo según dónde está en el mapa respecto a la cámara (null = fuera de pantalla).
  function posicion(x, y) {
    const r = EI.juego && EI.juego.render;
    if (!r) return { vol: 1, pan: 0 };
    if (r.niebla && !r.niebla.verCasilla(x, y)) return null; // lo que pasa en la niebla no se oye
    const [sx, sy] = r.aPantalla(x, y);
    const m = 60;
    if (sx < -m || sy < -m || sx > r.ancho + m || sy > r.alto + m) return null;
    const dx = (sx - r.ancho / 2) / (r.ancho / 2), dy = (sy - r.alto / 2) / (r.alto / 2);
    return { vol: Math.max(0.25, 1 - 0.5 * Math.sqrt(dx * dx + dy * dy)), pan: dx * 0.7 };
  }
  function enMapa(nombre, x, y, vol) {
    const p = posicion(x, y);
    if (p) tocar(nombre, { vol: p.vol * (vol || 1), pan: p.pan });
  }

  // Traduce los eventos de la simulación a sonidos.
  function eventos(lista, jugador) {
    if (!ac || !lista.length) return;
    for (const ev of lista) {
      switch (ev.tipo) {
        case 'golpe': {
          const tirador = ev.de === 'torre' || (EI.DATOS.unidades[ev.de] && EI.DATOS.unidades[ev.de].distancia);
          if (ev.de === 'catapulta') break; // ya suena la explosión
          const metal = ev.de === 'hoplita' || ev.de === 'caballero';
          enMapa(ev.de === 'ariete' ? 'ariete' : tirador ? 'impacto' : metal ? 'metal' : 'golpe', ev.x, ev.y, tirador ? 0.5 : 0.7);
          if (ev.jugador === jugador && !posicion(ev.x, ev.y)) tocar('ataque', { vol: 0.8 }); // te atacan fuera de la vista
          break;
        }
        case 'recolecta': enMapa(ev.recurso === 'madera' ? 'talar' : ev.recurso === 'comida' ? 'cosecha' : 'picar', ev.x, ev.y, 0.45); break;
        case 'martillo': enMapa('martillo', ev.x, ev.y, 0.4); break;
        case 'flecha': enMapa('flecha', ev.x, ev.y, 0.6); break;
        case 'disparo': enMapa({ piedra: 'honda', virote: 'ballesta', bola: 'catapulta' }[ev.proyectil] || 'flecha', ev.x, ev.y, 0.5); break;
        case 'explosion': enMapa('explosion', ev.x, ev.y, 0.9); break;
        case 'cura': enMapa('cura', ev.x, ev.y, 0.5); break;
        case 'rezo': enMapa('rezo', ev.x, ev.y, 0.7); break;
        case 'convertido': if (ev.jugador === jugador || ev.antes === jugador) tocar('convertido', { vol: 0.8 }); break;
        case 'refugio': if (ev.jugador === jugador) enMapa('refugio', ev.x, ev.y, 0.6); break;
        case 'muerte': enMapa('muerte', ev.x, ev.y, 0.7); break;
        case 'destruido': enMapa('destruido', ev.x, ev.y, 1); break;
        case 'aviso': if (ev.jugador === jugador) tocar('aviso', { vol: 0.7 }); break;
        case 'entrenado': if (ev.jugador === jugador) tocar('entrenado', { vol: 0.6 }); break;
        case 'construido': if (ev.jugador === jugador) tocar('construido', { vol: 0.6 }); break;
        case 'epoca': tocar('epoca', { vol: ev.jugador === jugador ? 0.9 : 0.4 }); if (ev.jugador === jugador) cambiarMusica(); break;
        case 'fin': pararMusica(); tocar(ev.ganador === jugador ? 'victoria' : 'derrota', { vol: 0.9 }); break;
      }
    }
  }

  // ---------------------------------------------------------- música
  // Música tranquila hecha al vuelo: un acorde de fondo y notas sueltas de una escala.
  // Cada época tiene su tonalidad y su ritmo.
  const ESTILOS = [
    { base: 50, escala: [0, 3, 5, 7, 10], pulso: 0.75, onda: 'triangle' },  // Piedra: pentatónica menor, lenta
    { base: 52, escala: [0, 1, 4, 5, 7, 8, 10], pulso: 0.6, onda: 'triangle' }, // Antigüedad: aire mediterráneo
    { base: 50, escala: [0, 2, 3, 5, 7, 9, 10], pulso: 0.55, onda: 'sine' },   // Media: dórico
  ];
  let estilo = ESTILOS[0], paso = 0;
  function epocaJugador() { const j = EI.juego; return j && j.sim ? j.sim.jugadores[0].epoca : 0; }
  function empezarMusica() {
    if (!ac || !ajustes.musica || musicaTimer || musicaArchivo) return;
    const bufs = archivos.musica;
    if (bufs && bufs.length) { // música desde archivo, en bucle
      musicaArchivo = ac.createBufferSource(); musicaArchivo.buffer = bufs[0]; musicaArchivo.loop = true;
      musicaArchivo.connect(busMusica); musicaArchivo.start();
      return;
    }
    estilo = ESTILOS[Math.min(2, epocaJugador())];
    // acorde de fondo
    const g = ac.createGain(); g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.06, ac.currentTime + 3);
    const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
    f.connect(g); g.connect(busMusica);
    const oscs = [0, 7, 12].map((iv, i) => {
      const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.value = nota(estilo.base - 12 + iv); o.detune.value = (i - 1) * 6;
      o.connect(f); o.start(); return o;
    });
    musicaNodo = { g, oscs };
    paso = 0;
    musicaTimer = setInterval(() => {
      if (!ac || ac.state !== 'running') return;
      paso++;
      if (Math.random() < (paso % 4 === 0 ? 0.9 : 0.45)) {
        const n = estilo.base + 12 + estilo.escala[Math.floor(Math.random() * estilo.escala.length)] + (Math.random() < 0.25 ? 12 : 0);
        const t = ac.currentTime + 0.02;
        tono(busMusica, t, estilo.onda, nota(n), 0, estilo.pulso * 2.2, 0.08, 0.02);
      }
      if (paso % 16 === 0) { // cambia el acorde de fondo de vez en cuando
        const salto = [0, 5, 3, 7][Math.floor(paso / 16) % 4];
        musicaNodo.oscs.forEach((o, i) => o.frequency.setTargetAtTime(nota(estilo.base - 12 + salto + [0, 7, 12][i]), ac.currentTime, 0.8));
      }
    }, estilo.pulso * 1000);
  }
  function pararMusica() {
    if (musicaTimer) { clearInterval(musicaTimer); musicaTimer = null; }
    if (musicaNodo) {
      const { g, oscs } = musicaNodo;
      g.gain.cancelScheduledValues(ac.currentTime); g.gain.setTargetAtTime(0, ac.currentTime, 0.4);
      oscs.forEach(o => o.stop(ac.currentTime + 2));
      musicaNodo = null;
    }
    if (musicaArchivo) { musicaArchivo.stop(); musicaArchivo = null; }
  }
  function cambiarMusica() { if (musicaArchivo) return; pararMusica(); setTimeout(empezarMusica, 1500); }

  // ---------------------------------------------------------- ajustes
  function alternar(que) {
    ajustes[que] = !ajustes[que]; guardar();
    if (ac) {
      busEfectos.gain.value = ajustes.sonido ? 1 : 0;
      busMusica.gain.value = ajustes.musica ? 0.5 : 0;
      if (que === 'musica') { if (ajustes.musica) empezarMusica(); else pararMusica(); }
    }
    return ajustes[que];
  }

  // Nivel de la señal que sale ahora mismo (0 = silencio). Sirve para comprobar que suena.
  function nivel() {
    if (!medidor) return 0;
    const d = new Float32Array(medidor.fftSize); medidor.getFloatTimeDomainData(d);
    let m = 0; for (const v of d) m = Math.max(m, Math.abs(v));
    return m;
  }

  EI.Sonido = { iniciar, tocar, eventos, empezarMusica, pararMusica, alternar, ajustes, nivel, estado: () => ac && ac.state };
})();
