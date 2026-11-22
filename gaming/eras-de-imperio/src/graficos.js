// =====================================================================
//  ERAS DE IMPERIO — CAPA DE GRÁFICOS (intercambiable)
//  Cada cosa del juego se dibuja con una función de esta capa. Si en
//  EI.SPRITES (archivo sprites/sprites.js) hay una imagen para esa
//  clave, se usa la imagen; si no, se dibuja con formas sencillas.
//  Para poner gráficos hechos con IA solo hay que rellenar sprites.js.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  const TW = 64, TH = 32; // tamaño de una casilla isométrica en píxeles
  const ESTILO_EPOCA = [
    { pared: '#8a6a44', paredOsc: '#6b5033', tejado: '#c9a04a', tejadoOsc: '#a67f33' }, // piedra: barro y paja
    { pared: '#e6dcc2', paredOsc: '#c4b896', tejado: '#b5523b', tejadoOsc: '#8f3d2b' }, // antigüedad: cal y teja
    { pared: '#a3a39b', paredOsc: '#7e7e77', tejado: '#4e5a6c', tejadoOsc: '#3a4453' }, // media: piedra y pizarra
  ];
  const COLOR_CARGA = { comida: '#c8322c', madera: '#7a4d22', piedra: '#9a9a9a', oro: '#e8c22e' };

  const imagenes = {};
  function cargarSprites() {
    const lista = EI.SPRITES || {};
    for (const clave in lista) {
      const s = lista[clave];
      // Se prueban varias extensiones: los generadores a veces guardan "casa.png.jpeg" o "casa.jpg".
      const base = s.src.replace(/\.(png|jpe?g|webp)$/i, '');
      // 1.º la versión ya preparada por herramientas/preparar_imagenes.ps1 (sin fondo y
      // recortada: funciona aunque se abra index.html con doble clic);
      // 2.º la original, con el nombre con el que guarda Nano Banana ("x.png.jpeg") y otros.
      const lista2 = base.replace(/^sprites\//, 'sprites/listas/') + '.png';
      const candidatos = [lista2, s.src + '.jpeg', s.src, s.src + '.jpg', base + '.jpg', base + '.jpeg', base + '.webp', s.src + '.png'];
      const version = location.protocol.startsWith('http') ? '?v=' + (window.VERSION_CARGA || 0) : '';
      const probar = (k) => {
        if (k >= candidatos.length) { console.info('Sin imagen todavía para', clave, '(' + s.src + '): se usa el dibujo simple'); return; }
        const img = new Image();
        img.onload = () => {
          const yaPreparada = k === 0;
          imagenes[clave] = { img: prepararImagen(img, yaPreparada ? Object.assign({}, s, { quitarFondo: false }) : s), s };
          // unidades: la versión ya teñida con el color de la IA
          if (yaPreparada && EI.DATOS.unidades[clave]) {
            const roja = new Image();
            roja.onload = () => { imagenes[clave + '_1'] = { img: prepararImagen(roja, Object.assign({}, s, { quitarFondo: false })), s: Object.assign({}, s, { tenir: false }) }; };
            roja.src = lista2.replace(/\.png$/, '_j1.png') + version;
          }
        };
        img.onerror = () => probar(k + 1);
        img.src = candidatos[k] + version;
      };
      probar(0);
    }
  }
  // Quita el fondo de color liso (el del borde de la imagen) y recorta los márgenes vacíos,
  // para que la imagen se pueda usar tal cual sale del generador. Solo funciona con el
  // servidor local (iniciar.bat); abriendo index.html con doble clic se usa la imagen sin tocar.
  function prepararImagen(img, s) {
    const w = img.width, h = img.height;
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    let datos;
    try { datos = ctx.getImageData(0, 0, w, h); } catch (e) { return img; }
    const d = datos.data;
    if (s.quitarFondo !== false && d[3] > 200) {
      const fr = d[0], fg = d[1], fb = d[2], tol = s.tolerancia || 120;
      const parecido = (p) => Math.abs(d[p] - fr) + Math.abs(d[p + 1] - fg) + Math.abs(d[p + 2] - fb) <= tol;
      const visto = new Uint8Array(w * h), pila = [];
      for (let x = 0; x < w; x++) pila.push(x, (h - 1) * w + x);
      for (let y = 0; y < h; y++) pila.push(y * w, y * w + w - 1);
      while (pila.length) {
        const i = pila.pop();
        if (visto[i]) continue;
        visto[i] = 1;
        if (!parecido(i * 4)) continue;
        d[i * 4 + 3] = 0;
        const x = i % w, y = (i / w) | 0;
        if (x > 0) pila.push(i - 1); if (x < w - 1) pila.push(i + 1);
        if (y > 0) pila.push(i - w); if (y < h - 1) pila.push(i + w);
      }
      // Restos de fondo encerrados (por ejemplo entre un poste y la pared). Si el fondo es
      // magenta, se borra también todo lo magenta, que nunca forma parte de un edificio.
      const esMagenta = (r, g, b) => r > g * 1.4 + 20 && b > g * 1.4 + 20 && Math.abs(r - b) < 0.4 * Math.max(r, b) + 10;
      const fondoMagenta = esMagenta(fr, fg, fb);
      for (let p = 0; p < d.length; p += 4) {
        if (d[p + 3] === 0) continue;
        if (Math.abs(d[p] - fr) + Math.abs(d[p + 1] - fg) + Math.abs(d[p + 2] - fb) <= tol * 0.6 ||
            (fondoMagenta && esMagenta(d[p], d[p + 1], d[p + 2]))) d[p + 3] = 0;
      }
    }
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4 + 3] > 20) {
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
    if (x1 < 0) return img;
    ctx.putImageData(datos, 0, 0);
    const r = document.createElement('canvas'); r.width = x1 - x0 + 1; r.height = y1 - y0 + 1;
    r.getContext('2d').drawImage(c, -x0, -y0);
    return reducir(r, (s.alto ? s.alto * r.width / r.height : s.ancho || r.width) * 2);
  }
  // Reduce la imagen a un tamaño cercano al que se usa en pantalla (por pasos, para que
  // quede nítida y para que dibujar muchas unidades no sea lento).
  function reducir(img, objetivo) {
    let actual = img;
    while (actual.width > objetivo * 1.6) {
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(actual.width / 2)); c.height = Math.max(1, Math.round(actual.height / 2));
      const cx = c.getContext('2d'); cx.imageSmoothingQuality = 'high';
      cx.drawImage(actual, 0, 0, c.width, c.height);
      actual = c;
    }
    return actual;
  }

  // Cambia el azul de la imagen por el color del jugador (las ropas y estandartes de las
  // unidades se dibujan en azul). Devuelve null si el navegador no deja leer la imagen.
  function tenir(img, colorHex) {
    const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    let datos;
    try { datos = ctx.getImageData(0, 0, c.width, c.height); } catch (e) { return null; }
    const n = parseInt(colorHex.slice(1), 16);
    const [th, ts] = aHsl((n >> 16) & 255, (n >> 8) & 255, n & 255);
    const d = datos.data;
    for (let p = 0; p < d.length; p += 4) {
      if (d[p + 3] === 0) continue;
      const [h, s, l] = aHsl(d[p], d[p + 1], d[p + 2]);
      if (h < 185 || h > 270 || s < 0.16 || l < 0.08 || l > 0.94) continue;
      const [r, g, b] = deHsl(th, Math.min(1, Math.max(s, ts * 0.75)), l);
      d[p] = r; d[p + 1] = g; d[p + 2] = b;
    }
    ctx.putImageData(datos, 0, 0);
    return c;
  }
  function aHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
    if (max === min) return [0, 0, l];
    const d = max - min, s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [h * 60, s, l];
  }
  function deHsl(h, s, l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q, k = h / 360;
    const f = (t) => { t = (t + 1) % 1; return t < 1 / 6 ? p + (q - p) * 6 * t : t < 0.5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p; };
    return [f(k + 1 / 3), f(k), f(k - 1 / 3)].map(v => Math.round(v * 255));
  }

  // Unidad con imagen: se tiñe con el color del jugador, mira hacia donde camina,
  // da saltitos al andar y se inclina al golpear.
  function spriteUnidad(ctx, u, x, y, color, tick, moviendo) {
    const it = imagenes[u.tipo + '_' + u.jugador] || imagenes[u.tipo];
    if (!it) return false;
    let img = it.img;
    if (it.s.tenir !== false && color) {
      it.variantes = it.variantes || {};
      if (!(color in it.variantes)) it.variantes[color] = tenir(it.img, color);
      img = it.variantes[color] || img;
    }
    // tamaño: por altura ("alto") o por anchura ("ancho")
    const alto = it.s.alto || (it.s.ancho || 32) * img.height / img.width, ancho = alto * img.width / img.height;
    const [ax, ay] = it.s.ancla || [0.5, 0.97];
    const base = u.tipo === 'caballero' || u.tipo === 'ariete' || u.tipo === 'catapulta' ? 13 : 8; // tamaño de la sombra y del aro
    sombra(ctx, x, y, base + 1, (base + 1) * 0.42);
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; // aro del color del jugador
    ctx.beginPath(); ctx.ellipse(x, y, base, base * 0.4, 0, 0, Math.PI * 2); ctx.stroke();
    const bote = moviendo ? Math.abs(Math.sin(tick * 0.9 + u.id)) * 2.5 : 0;
    const golpe = tick - u.golpeTick < 4;
    ctx.save();
    ctx.translate(x, y - bote);
    ctx.scale((it.s.mira === 'izquierda' ? -1 : 1) * (u.dir || 1), 1);
    if (golpe) ctx.rotate(0.14);
    ctx.drawImage(img, -ancho * ax, -alto * ay, ancho, alto);
    ctx.restore();
    if (u.carga && u.carga.cantidad > 0) { // lo que lleva el aldeano
      ctx.fillStyle = COLOR_CARGA[u.carga.tipo]; ctx.strokeStyle = 'rgba(0,0,0,0.5)'; ctx.lineWidth = 1;
      ctx.fillRect(x - (u.dir || 1) * 9 - 3, y - alto * 0.62, 6, 7); ctx.strokeRect(x - (u.dir || 1) * 9 - 3, y - alto * 0.62, 6, 7);
    }
    return true;
  }
  // Dibuja el sprite si existe. (x,y) = punto del suelo donde se apoya.
  // escala: para variar un poco el tamaño (por ejemplo, árboles más altos y más bajos).
  function sprite(ctx, claves, x, y, anchoDefecto, escala) {
    for (const c of claves) {
      const it = imagenes[c];
      if (!it) continue;
      const proporcion = it.img.height / it.img.width, k = escala || 1;
      const alto = (it.s.alto || (it.s.ancho || anchoDefecto || it.img.width) * proporcion) * k;
      const ancho = alto / proporcion;
      const [ax, ay] = it.s.ancla || [0.5, 0.9];
      ctx.drawImage(it.img, x - ancho * ax, y - alto * ay, ancho, alto);
      return true;
    }
    return false;
  }

  // ---------------------------------------------------------- utilidades de dibujo
  const iso = (x, y) => [(x - y) * TW / 2, (x + y) * TH / 2];
  function poli(ctx, pts, relleno, borde) {
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.closePath();
    if (relleno) { ctx.fillStyle = relleno; ctx.fill(); }
    if (borde) { ctx.strokeStyle = borde; ctx.lineWidth = 1; ctx.stroke(); }
  }
  const sube = (p, h) => [p[0], p[1] - h];
  function sombra(ctx, x, y, rx, ry) {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
  }
  function aclarar(hex, f) {
    const n = parseInt(hex.slice(1), 16);
    const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => Math.round(f > 0 ? v + (255 - v) * f : v * (1 + f)));
    return 'rgb(' + c.join(',') + ')';
  }
  function ruido(i, j, k) { // número pseudoaleatorio estable por casilla (solo para decorar)
    let h = (i * 374761393 + j * 668265263 + (k || 0) * 2147483647) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }

  // Esquinas en pantalla (relativas al origen del mapa) de un rectángulo del suelo.
  function esquinas(tx, ty, tam, margen) {
    const m = margen || 0;
    return { arriba: iso(tx + m, ty + m), der: iso(tx + tam - m, ty + m), abajo: iso(tx + tam - m, ty + tam - m), izq: iso(tx + m, ty + tam - m) };
  }

  // Caja isométrica con tejado. Devuelve la altura total.
  function caja(ctx, c, alto, est, tejado, alturaTejado) {
    const { arriba, der, abajo, izq } = c;
    poli(ctx, [izq, abajo, sube(abajo, alto), sube(izq, alto)], est.paredOsc, 'rgba(0,0,0,0.35)');
    poli(ctx, [abajo, der, sube(der, alto), sube(abajo, alto)], est.pared, 'rgba(0,0,0,0.35)');
    const A = sube(arriba, alto), B = sube(der, alto), C = sube(abajo, alto), Dd = sube(izq, alto);
    if (tejado === 'plano') {
      poli(ctx, [A, B, C, Dd], est.tejadoOsc, 'rgba(0,0,0,0.4)');
      return alto;
    }
    const cx = (A[0] + C[0]) / 2, cy = (A[1] + C[1]) / 2 - alturaTejado;
    const P = [cx, cy];
    poli(ctx, [A, B, P], est.tejadoOsc);
    poli(ctx, [A, Dd, P], est.tejadoOsc);
    poli(ctx, [Dd, C, P], est.tejado, 'rgba(0,0,0,0.3)');
    poli(ctx, [C, B, P], aclarar(est.tejado.startsWith('#') ? est.tejado : '#888888', 0.15), 'rgba(0,0,0,0.3)');
    return alto + alturaTejado;
  }
  function bandera(ctx, x, y, alto, color) {
    ctx.strokeStyle = '#3b2a1a'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - alto); ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.moveTo(x, y - alto); ctx.lineTo(x + 12, y - alto + 4); ctx.lineTo(x, y - alto + 8); ctx.closePath(); ctx.fill();
  }
  function puerta(ctx, c, ancho, alto) { // puerta en la cara derecha (frente)
    const { abajo, der } = c;
    const mx = abajo[0] + (der[0] - abajo[0]) * 0.5, my = abajo[1] + (der[1] - abajo[1]) * 0.5;
    ctx.fillStyle = '#3a2614';
    ctx.beginPath(); ctx.moveTo(mx - ancho / 2, my + ancho / 4); ctx.lineTo(mx + ancho / 2, my - ancho / 4);
    ctx.lineTo(mx + ancho / 2, my - ancho / 4 - alto); ctx.lineTo(mx - ancho / 2, my + ancho / 4 - alto); ctx.closePath(); ctx.fill();
  }

  // ---------------------------------------------------------- suelo
  function dibujarSuelo(ctx, W, H) {
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) dibujarCasilla(ctx, i, j);
    if (imagenes.suelo) for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) dibujarCasilla(ctx, i, j, true);
  }
  // Una casilla del suelo. textura = segunda pasada con la imagen opcional de suelo hecha con IA.
  // ter(i, j) = relieve de una casilla (0 hierba, 1 agua, 2 vado, 3 montaña); sin él, todo hierba.
  function dibujarCasilla(ctx, i, j, textura, ter) {
    const tipo = ter ? ter(i, j) : 0;
    if (textura) { if (!tipo) { const [x, y] = iso(i + 0.5, j + 1); sprite(ctx, ['suelo'], x, y, TW); } return; }
    const r = ruido(i, j);
    const p = [iso(i, j), iso(i + 1, j), iso(i + 1, j + 1), iso(i, j + 1)];
    const [cx, cy] = iso(i + 0.5, j + 0.5);
    if (tipo === 1 || tipo === 2) { // agua (o vado, poco profundo y con piedras)
      const vado = tipo === 2;
      poli(ctx, p, vado ? `rgb(${92 + Math.round(r * 14)},${146 + Math.round(r * 14)},${160 + Math.round(r * 10)})`
                        : `rgb(${46 + Math.round(r * 10)},${96 + Math.round(r * 14)},${146 + Math.round(r * 14)})`);
      ctx.strokeStyle = vado ? 'rgba(92,150,164,1)' : 'rgba(50,102,150,1)'; ctx.lineWidth = 1; ctx.stroke(); // tapa las juntas
      // bordes con la orilla: franja de arena en los lados que tocan tierra
      const lados = [[0, -1, 0, 1], [1, 0, 1, 2], [0, 1, 2, 3], [-1, 0, 3, 0]];
      for (const [dx, dy, a, b] of lados) {
        const v = ter(i + dx, j + dy);
        if (v === 1 || v === 2 || v < 0) continue;
        const A = p[a], B = p[b], k = 0.28, m = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2], c = [cx, cy];
        const A2 = [A[0] + (c[0] - m[0]) * k, A[1] + (c[1] - m[1]) * k], B2 = [B[0] + (c[0] - m[0]) * k, B[1] + (c[1] - m[1]) * k];
        poli(ctx, [A, B, B2, A2], vado ? 'rgba(196,178,122,0.9)' : 'rgba(186,168,112,0.95)');
      }
      if (vado) {
        ctx.fillStyle = 'rgba(120,110,90,0.8)';
        for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.ellipse(cx + (ruido(i, j, k + 2) - 0.5) * 30, cy + (ruido(i, j, k + 5) - 0.5) * 14, 3, 1.6, 0, 0, Math.PI * 2); ctx.fill(); }
      } else if (r > 0.45) { // ondas
        ctx.strokeStyle = 'rgba(200,225,240,0.45)'; ctx.lineWidth = 1;
        const ox = (ruido(i, j, 3) - 0.5) * 20, oy = (ruido(i, j, 4) - 0.5) * 8;
        ctx.beginPath(); ctx.moveTo(cx + ox - 7, cy + oy); ctx.quadraticCurveTo(cx + ox - 3, cy + oy - 2, cx + ox, cy + oy); ctx.quadraticCurveTo(cx + ox + 3, cy + oy + 2, cx + ox + 7, cy + oy); ctx.stroke();
      }
      return;
    }
    if (tipo === 3) { // pie de la montaña: suelo de roca
      poli(ctx, p, `rgb(${104 + Math.round(r * 16)},${98 + Math.round(r * 14)},${84 + Math.round(r * 10)})`);
      ctx.strokeStyle = 'rgba(0,0,0,0.06)'; ctx.stroke();
      return;
    }
    const g = 120 + Math.round(r * 22), rr = 92 + Math.round(r * 18);
    poli(ctx, p, `rgb(${rr},${g},58)`);
    ctx.strokeStyle = 'rgba(0,0,0,0.04)'; ctx.stroke();
    if (r > 0.82) { // matas de hierba
      ctx.strokeStyle = 'rgba(40,80,30,0.55)'; ctx.lineWidth = 1;
      for (let k = -1; k <= 1; k++) { ctx.beginPath(); ctx.moveTo(cx + k * 3, cy + 2); ctx.lineTo(cx + k * 4, cy - 3); ctx.stroke(); }
    } else if (r < 0.03) { // flores
      ctx.fillStyle = ruido(i, j, 1) > 0.5 ? '#f3e37a' : '#f0f0f0';
      ctx.fillRect(cx - 1, cy - 1, 2, 2); ctx.fillRect(cx + 5, cy + 2, 2, 2);
    }
  }
  const hayTexturaSuelo = () => !!imagenes.suelo;

  // Pico de montaña sobre una casilla (se dibuja con las entidades, ordenado por profundidad,
  // para que tape lo que hay detrás). Con imagen "montana" (o montana_0..3) usa la imagen.
  function dibujarMontana(ctx, i, j) {
    const v = Math.floor(ruido(i, j, 7) * 4);
    const it = imagenes['montana_' + v] || imagenes.montana_0 || imagenes.montana;
    if (it) {
      // La imagen (ya recortada) tiene la base en rombo: su ancho completo es el del rombo y
      // su centro está a 1/4 del ancho por encima del borde de abajo. Ese centro va al de la casilla.
      const ancho = TW * (1.35 + ruido(i, j, 8) * 0.4), alto = ancho * it.img.height / it.img.width;
      const [cx, cy] = iso(i + 0.5, j + 0.5), abajo = cy + ancho / 4;
      const suave = ctx.imageSmoothingEnabled; // la imagen tiene más detalle del que se ve: suavizar
      ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(it.img, cx - ancho / 2, abajo - alto, ancho, alto);
      ctx.imageSmoothingEnabled = suave;
      return;
    }
    const r = ruido(i, j, 9), h = 34 + r * 34;
    const L = iso(i - 0.08, j + 1.08), B = iso(i + 1.08, j + 1.08), Rr = iso(i + 1.08, j - 0.08);
    const [cx, cy] = iso(i + 0.5, j + 0.5);
    const A = [cx + (ruido(i, j, 10) - 0.5) * 16, cy - h];
    const P = [B[0] + (A[0] - B[0]) * 0.45 + (ruido(i, j, 11) - 0.5) * 6, B[1] + (A[1] - B[1]) * 0.45]; // arista delantera
    // hombros en las laderas para que la silueta no sea una pirámide perfecta
    const hombro = (Q, k, lado) => [Q[0] + (A[0] - Q[0]) * k + lado * (3 + ruido(i, j, 12 + lado) * 6), Q[1] + (A[1] - Q[1]) * k - 2 - ruido(i, j, 14 + lado) * 5];
    const S1 = hombro(L, 0.5, -1), S2 = hombro(Rr, 0.55, 1);
    const tono = ruido(i, j, 13), c = (r, g, b, f) => `rgb(${Math.round(r * f)},${Math.round(g * f)},${Math.round(b * f)})`;
    const luz = tono < 0.5 ? c(140, 132, 117, 0.95 + tono * 0.2) : c(146, 128, 104, 0.9 + (tono - 0.5) * 0.2); // gris o pardo
    poli(ctx, [L, B, P, A, S1], luz);                                       // cara iluminada
    poli(ctx, [B, Rr, S2, A, P], tono < 0.5 ? '#5c564c' : '#5e5244');       // cara en sombra
    poli(ctx, [L, S1, [S1[0] + 6, S1[1] + 8], [P[0] - 4, P[1] + 6], B], 'rgba(255,255,255,0.07)');
    poli(ctx, [B, P, [P[0] + 5, P[1] + 5], [Rr[0] - 10, Rr[1] - 2], Rr], 'rgba(0,0,0,0.12)');
    if (h > 50) { // nieve en la cima
      const k = 0.3, n = (Q) => [A[0] + (Q[0] - A[0]) * k, A[1] + (Q[1] - A[1]) * k];
      const nl = n(S1), nr = n(S2), np = n(P);
      poli(ctx, [A, nl, [(nl[0] + np[0]) / 2 + 1, (nl[1] + np[1]) / 2 + 4], np, [(np[0] + nr[0]) / 2, (np[1] + nr[1]) / 2 + 5], nr], '#eef1f4');
      poli(ctx, [A, np, [(np[0] + nr[0]) / 2, (np[1] + nr[1]) / 2 + 5], nr], 'rgba(150,165,185,0.45)');
    }
    ctx.strokeStyle = 'rgba(30,25,20,0.45)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(L[0], L[1]); ctx.lineTo(S1[0], S1[1]); ctx.lineTo(A[0], A[1]); ctx.lineTo(S2[0], S2[1]); ctx.lineTo(Rr[0], Rr[1]);
    ctx.moveTo(A[0], A[1]); ctx.lineTo(P[0], P[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
  }

  // ---------------------------------------------------------- recursos
  function dibujarRecurso(ctx, e, x, y) {
    const v = e.variante || 0;
    const claves = [e.tipo + '_' + v, e.tipo];
    if (claves.some(c => imagenes[c])) { // con imagen: sombra debajo y tamaño algo variado
      sombra(ctx, x, y - 2, e.tipo === 'arbol' ? 13 : 15, e.tipo === 'arbol' ? 5.5 : 6.5);
      sprite(ctx, claves, x, y, e.tipo === 'arbol' ? 56 : 48, e.tipo === 'arbol' ? 0.9 + v * 0.06 : 1);
      return;
    }
    if (e.tipo === 'arbol') {
      sombra(ctx, x, y, 14, 6);
      const alto = 34 + v * 4;
      ctx.fillStyle = '#5a3a1e'; ctx.fillRect(x - 2.5, y - 12, 5, 13);
      if (v % 2 === 0) { // pino
        const verdes = ['#24502a', '#2d6232', '#367339'];
        for (let k = 0; k < 3; k++) {
          const yy = y - 10 - k * (alto / 4), ancho = 16 - k * 4;
          poli(ctx, [[x - ancho, yy], [x + ancho, yy], [x, yy - alto / 2.2]], verdes[k], 'rgba(0,0,0,0.2)');
        }
      } else { // frondoso
        const cs = [[0, -alto + 6, 13, '#2f6a2c'], [-8, -alto + 14, 10, '#285d27'], [8, -alto + 14, 10, '#3a7a35'], [0, -alto + 18, 11, '#346f31']];
        for (const [dx, dy, r, c] of cs) { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
      }
    } else if (e.tipo === 'arbusto') {
      sombra(ctx, x, y, 13, 6);
      for (const [dx, dy, r] of [[-6, -6, 7], [6, -6, 7], [0, -10, 8]]) { ctx.fillStyle = '#3f7a33'; ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = '#d42f3a';
      for (let k = 0; k < 7; k++) { const a = k * 2.4 + v, rr = 3 + (k % 3) * 2.5; ctx.beginPath(); ctx.arc(x + Math.cos(a) * rr * 1.3, y - 9 + Math.sin(a) * rr * 0.8, 1.8, 0, Math.PI * 2); ctx.fill(); }
    } else { // piedra u oro
      sombra(ctx, x, y, 15, 7);
      const oro = e.tipo === 'oro';
      const rocas = [[-7, 0, 9], [6, 1, 8], [0, -5, 10]];
      for (const [dx, dy, r] of rocas) {
        const cx = x + dx, cy = y + dy;
        poli(ctx, [[cx - r, cy], [cx - r * 0.5, cy - r * 0.9], [cx + r * 0.6, cy - r * 0.8], [cx + r, cy - r * 0.1], [cx + r * 0.4, cy + r * 0.3], [cx - r * 0.6, cy + r * 0.3]], oro ? '#8c8270' : '#9a9a98', 'rgba(0,0,0,0.4)');
        poli(ctx, [[cx - r * 0.5, cy - r * 0.9], [cx + r * 0.6, cy - r * 0.8], [cx + r * 0.1, cy - r * 0.3]], oro ? '#a99d86' : '#bdbdbb');
      }
      if (oro) {
        ctx.fillStyle = '#f5d33a';
        for (const [dx, dy] of [[-6, -3], [4, -8], [7, -1], [-1, -10], [1, -2]]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, 1.8, 0, Math.PI * 2); ctx.fill(); }
      }
    }
  }

  // ---------------------------------------------------------- edificios
  // (ox,oy) = origen del mapa en pantalla. epoca = época del dueño.
  function dibujarEdificio(ctx, e, ox, oy, color, epoca, opciones) {
    const est = ESTILO_EPOCA[Math.min(epoca, 2)];
    const c0 = esquinas(e.tx, e.ty, e.tam, e.tam === 1 ? 0.12 : 0.08);
    const c = {};
    for (const k in c0) c[k] = [c0[k][0] + ox, c0[k][1] + oy];
    const base = [(c.abajo[0] + c.arriba[0]) / 2, c.abajo[1]];
    const fantasma = opciones && opciones.fantasma;
    const progreso = e.construido ? 1 : (e.progreso || 0) / (e.total || 1);

    if (OBRAS[e.tipo]) { dibujarObra(ctx, e, ox, oy, color, epoca, opciones || {}, fantasma, progreso); return; }
    if (!fantasma && !e.construido) { // cimientos
      poli(ctx, [c.arriba, c.der, c.abajo, c.izq], 'rgba(150,120,80,0.55)', 'rgba(60,40,20,0.8)');
      if (progreso < 0.15) return;
    }
    if (e.construido && sprite(ctx, [e.tipo + '_' + epoca, e.tipo], base[0], base[1] + 2, e.tam * TW - 6)) {
      if (color && !fantasma) bandera(ctx, c.der[0] - 4, c.der[1], 24, color); // color del dueño
      return;
    }

    ctx.save();
    if (!e.construido && !fantasma) ctx.globalAlpha = 0.55 + progreso * 0.4;
    const f = fantasma ? 1 : progreso;
    switch (e.tipo) {
      case 'centro': {
        const h = caja(ctx, c, 30 * f, est, f < 1 ? 'plano' : 'tejado', 26);
        puerta(ctx, c, 12, 16 * f);
        if (f >= 1) bandera(ctx, (c.arriba[0] + c.abajo[0]) / 2, (c.arriba[1] + c.abajo[1]) / 2 - h + 2, 22, color);
        break;
      }
      case 'casa':
        caja(ctx, c, 16 * f, est, f < 1 ? 'plano' : 'tejado', 16);
        puerta(ctx, c, 8, 10 * f);
        if (f >= 1) { ctx.fillStyle = color; ctx.fillRect(c.izq[0] + 6, c.izq[1] - 12, 6, 4); }
        break;
      case 'almacen': {
        caja(ctx, c, 14 * f, est, 'plano');
        if (f >= 1) { // cajas y sacos delante
          const [x, y] = c.abajo;
          ctx.fillStyle = '#8b5a2b'; ctx.fillRect(x - 14, y - 10, 9, 8); ctx.fillRect(x + 4, y - 8, 9, 8);
          ctx.strokeStyle = '#4a2f15'; ctx.strokeRect(x - 14, y - 10, 9, 8); ctx.strokeRect(x + 4, y - 8, 9, 8);
          ctx.fillStyle = color; ctx.fillRect(x - 4, y - 22, 8, 5);
        }
        break;
      }
      case 'cuartel': {
        caja(ctx, c, 24 * f, est, 'plano');
        if (f >= 1) {
          const A = sube(c.abajo, 24), B = sube(c.der, 24), Dd = sube(c.izq, 24);
          ctx.fillStyle = est.paredOsc;
          for (let k = 0; k < 5; k++) { // almenas
            const t = (k + 0.5) / 5;
            ctx.fillRect(Dd[0] + (A[0] - Dd[0]) * t - 2, Dd[1] + (A[1] - Dd[1]) * t - 5, 4, 5);
            ctx.fillRect(A[0] + (B[0] - A[0]) * t - 2, A[1] + (B[1] - A[1]) * t - 5, 4, 5);
          }
          puerta(ctx, c, 14, 14);
          bandera(ctx, c.abajo[0], c.abajo[1] - 24, 20, color);
          // escudo con el color del jugador
          ctx.fillStyle = color; ctx.beginPath(); ctx.arc(c.izq[0] + 22, c.izq[1] - 6, 5, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = '#d8c070'; ctx.lineWidth = 1.5; ctx.stroke();
        }
        break;
      }
      case 'torre': {
        const h = caja(ctx, c, 58 * f, est, 'plano');
        if (f >= 1) {
          ctx.fillStyle = est.paredOsc;
          for (const p of [c.arriba, c.der, c.abajo, c.izq]) ctx.fillRect(p[0] - 3, p[1] - h - 6, 6, 6);
          bandera(ctx, (c.arriba[0] + c.abajo[0]) / 2, (c.arriba[1] + c.abajo[1]) / 2 - h, 16, color);
          ctx.fillStyle = '#222'; ctx.fillRect(c.abajo[0] + 4, c.abajo[1] - 40, 3, 7);
        }
        break;
      }
      case 'templo': { // templo con columnas y frontón (en la Edad Media, con campanario)
        const alto = 20 * f;
        poli(ctx, [c.izq, c.abajo, sube(c.abajo, 4), sube(c.izq, 4)], '#bdb6a4'); // escalinata
        poli(ctx, [c.abajo, c.der, sube(c.der, 4), sube(c.abajo, 4)], '#d6cfbc');
        const c2 = {}; for (const k in c) c2[k] = sube(c[k], 4);
        const h = caja(ctx, c2, alto, { pared: '#efe8d6', paredOsc: '#cfc6af', tejado: epoca >= 2 ? '#4e5a6c' : '#b5523b', tejadoOsc: epoca >= 2 ? '#3a4453' : '#8f3d2b' }, f < 1 ? 'plano' : 'tejado', 14);
        if (f >= 1) {
          ctx.fillStyle = '#fbf7ec'; // columnas en la fachada derecha
          for (let k = 1; k <= 4; k++) {
            const t = k / 5, x = c2.abajo[0] + (c2.der[0] - c2.abajo[0]) * t, y = c2.abajo[1] + (c2.der[1] - c2.abajo[1]) * t;
            ctx.fillRect(x - 1.5, y - alto, 3, alto);
          }
          if (epoca >= 2) { // campanario
            const cx = (c2.arriba[0] + c2.abajo[0]) / 2, cy = (c2.arriba[1] + c2.abajo[1]) / 2 - h;
            ctx.fillStyle = '#cfc6af'; ctx.fillRect(cx - 5, cy - 16, 10, 16);
            ctx.fillStyle = '#3a4453'; ctx.beginPath(); ctx.moveTo(cx - 7, cy - 16); ctx.lineTo(cx, cy - 28); ctx.lineTo(cx + 7, cy - 16); ctx.fill();
          }
          bandera(ctx, c2.der[0] - 4, c2.der[1] - alto, 14, color);
        }
        break;
      }
      case 'taller': { // taller de asedio: cobertizo abierto con una grúa de madera
        caja(ctx, c, 18 * f, { pared: '#8a6a44', paredOsc: '#6b5033', tejado: '#a67f33', tejadoOsc: '#7d5f26' }, 'plano');
        if (f >= 1) {
          const [x, y] = c.abajo;
          ctx.fillStyle = '#3a2614'; ctx.fillRect(x + 6, y - 22, 26, 14); // portón abierto
          ctx.strokeStyle = '#5e3c1c'; ctx.lineWidth = 3; // grúa
          const [gx, gy] = sube(c.izq, 18);
          ctx.beginPath(); ctx.moveTo(gx + 20, gy + 8); ctx.lineTo(gx + 26, gy - 30); ctx.lineTo(gx + 52, gy - 22); ctx.stroke();
          ctx.lineWidth = 1; ctx.strokeStyle = '#ccc'; ctx.beginPath(); ctx.moveTo(gx + 52, gy - 22); ctx.lineTo(gx + 52, gy - 6); ctx.stroke();
          ctx.fillStyle = '#7a5532'; ctx.beginPath(); ctx.arc(x - 20, y - 6, 6, 0, Math.PI * 2); ctx.fill(); // rueda apoyada
          ctx.strokeStyle = '#3a2614'; ctx.stroke();
          bandera(ctx, c.der[0] - 4, c.der[1] - 18, 16, color);
        }
        break;
      }
      case 'granja': {
        const g0 = esquinas(e.tx, e.ty, e.tam, 0.05), g = {};
        for (const k in g0) g[k] = [g0[k][0] + ox, g0[k][1] + oy];
        poli(ctx, [g.arriba, g.der, g.abajo, g.izq], '#7a5532', '#4f3520');
        if (f >= 1) {
          ctx.strokeStyle = '#a8b84a'; ctx.lineWidth = 2;
          for (let k = 1; k < 6; k++) { // surcos con cultivo
            const t = k / 6;
            const a = [g.arriba[0] + (g.izq[0] - g.arriba[0]) * t, g.arriba[1] + (g.izq[1] - g.arriba[1]) * t];
            const b = [g.der[0] + (g.abajo[0] - g.der[0]) * t, g.der[1] + (g.abajo[1] - g.der[1]) * t];
            ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
          }
          ctx.fillStyle = color; ctx.fillRect(g.der[0] - 6, g.der[1] - 10, 2, 10); ctx.fillRect(g.der[0] - 6, g.der[1] - 10, 7, 4);
        }
        break;
      }
    }
    ctx.restore();
    if (!e.construido && !fantasma) { // andamio
      ctx.strokeStyle = 'rgba(90,60,30,0.9)'; ctx.lineWidth = 1.5;
      for (const p of [c.izq, c.abajo, c.der]) { ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0], p[1] - 22); ctx.stroke(); }
    }
  }

  // ---------------------------------------------------------- murallas, puertas y puentes
  const OBRAS = { muralla: 1, puerta: 1, puente: 1 };
  const PIEDRA = [ // color de la piedra según la época del dueño
    { x: '#a09684', y: '#7d7464', top: '#bdb4a2' },
    { x: '#c9c0aa', y: '#a39a84', top: '#ddd5c1' },
    { x: '#a8a59d', y: '#84817a', top: '#c3c0b8' },
  ];
  // Prisma de base cualquiera (puntos del suelo en casillas, convexo) y altura h, con
  // origen (ox,oy). Solo dibuja las caras que miran al espectador y la de arriba.
  function prisma(ctx, base, h, col, ox, oy, h0) {
    const b0 = h0 || 0;
    const P = base.map(([x, y]) => { const [px, py] = iso(x, y); return [px + ox, py + oy - b0]; });
    let mx = 0, my = 0; for (const [x, y] of base) { mx += x; my += y; } mx /= base.length; my /= base.length;
    for (let k = 0; k < base.length; k++) {
      const a = base[k], b = base[(k + 1) % base.length];
      let nx = b[1] - a[1], ny = a[0] - b[0];
      if (nx * ((a[0] + b[0]) / 2 - mx) + ny * ((a[1] + b[1]) / 2 - my) < 0) { nx = -nx; ny = -ny; }
      if (nx + ny <= 0.001) continue; // cara de espaldas
      const A = P[k], B = P[(k + 1) % base.length];
      poli(ctx, [A, B, sube(B, h), sube(A, h)], Math.abs(nx) >= Math.abs(ny) ? col.x : col.y, 'rgba(0,0,0,0.3)');
    }
    poli(ctx, P.map(p => sube(p, h)), col.top, 'rgba(0,0,0,0.3)');
  }
  // Rectángulo del suelo de (x0,y0) a (x1,y1)
  const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  // Brazo de muro desde el centro de la casilla hacia (dx,dy), de grosor g
  function brazo(cx, cy, dx, dy, g) {
    const l = Math.hypot(dx, dy), px = -dy / l * g / 2, py = dx / l * g / 2;
    const ex = cx + dx * 0.5, ey = cy + dy * 0.5;
    return [[cx + px, cy + py], [ex + px, ey + py], [ex - px, ey - py], [cx - px, cy - py]];
  }
  function dibujarObra(ctx, e, ox, oy, color, epoca, op, fantasma, progreso) {
    const f = fantasma ? 1 : progreso, i = e.tx, j = e.ty, cx = i + 0.5, cy = j + 0.5;
    const muroEn = op.muroEn || (() => false);
    if (!fantasma && !e.construido && e.tipo !== 'puente') {
      const c = esquinas(i, j, 1, 0.1);
      poli(ctx, [c.arriba, c.der, c.abajo, c.izq].map(p => [p[0] + ox, p[1] + oy]), 'rgba(150,120,80,0.55)', 'rgba(60,40,20,0.8)');
      if (progreso < 0.1) return;
    }
    if (e.construido || fantasma) { // con imagen; se le da la vuelta si va en la otra dirección
      const enX = muroEn(i - 1, j) || muroEn(i + 1, j), enY = muroEn(i, j - 1) || muroEn(i, j + 1);
      let claves, eje;
      if (e.tipo === 'muralla') {
        const diag = muroEn(i - 1, j - 1) || muroEn(i + 1, j - 1) || muroEn(i - 1, j + 1) || muroEn(i + 1, j + 1);
        const recta = (enX !== enY) && !diag; // sigue una línea recta: tramo; si no, torre
        claves = recta ? ['muralla_recta_' + epoca, 'muralla_recta'] : ['muralla_torre_' + epoca, 'muralla_torre'];
        eje = enX ? 'x' : 'y';
      } else {
        claves = [e.tipo + '_' + epoca, e.tipo];
        eje = e.tipo === 'puente' ? (e.eje === 'y' ? 'y' : 'x') : (!enX && enY ? 'y' : 'x');
      }
      const it = claves.map(k => imagenes[k]).find(Boolean);
      if (it) {
        const [bx, by] = iso(i + 1, j + 1);
        ctx.save();
        if (fantasma) ctx.globalAlpha *= 0.9;
        ctx.translate(bx + ox, 0); if (it.s.eje && it.s.eje !== eje) ctx.scale(-1, 1);
        sprite(ctx, claves, 0, by + oy + 1, TW);
        ctx.restore();
        // color del dueño: en las puertas y en una de cada tres torres más o menos
        if (color && !fantasma && (e.tipo === 'puerta' || (claves[1] === 'muralla_torre' && ruido(i, j, 21) < 0.35))) {
          const [px, py] = iso(i + 0.5, j + 0.5);
          bandera(ctx, px + ox, py + oy - (e.tipo === 'puerta' ? 34 : 30), 12, color);
        }
        return;
      }
    }
    ctx.save();
    if (!e.construido && !fantasma) ctx.globalAlpha = 0.6 + progreso * 0.35;
    const col = PIEDRA[Math.min(epoca, 2)];
    if (e.tipo === 'muralla') {
      const h = 22 * f;
      // brazos hacia las casillas vecinas con muro: primero los de atrás, luego los de delante
      const dirs = [[-1, -1], [0, -1], [-1, 0], [1, -1], [-1, 1], [1, 0], [0, 1], [1, 1]];
      const unidos = dirs.filter(([dx, dy]) => muroEn(i + dx, j + dy));
      for (const [dx, dy] of unidos) if (dx + dy < 0) prisma(ctx, brazo(cx, cy, dx, dy, 0.42), h, col, ox, oy);
      prisma(ctx, rect(i + 0.24, j + 0.24, i + 0.76, j + 0.76), h + 5 * f, col, ox, oy); // pilar
      for (const [dx, dy] of unidos) if (dx + dy >= 0) prisma(ctx, brazo(cx, cy, dx, dy, 0.42), h, col, ox, oy);
      if (f >= 1) { // almenas sobre el pilar
        for (const [ax, ay] of [[0.26, 0.26], [0.6, 0.26], [0.26, 0.6], [0.6, 0.6]]) prisma(ctx, rect(i + ax, j + ay, i + ax + 0.14, j + ay + 0.14), 4, col, ox, oy, h + 5);
        if (color && !unidos.length) { ctx.fillStyle = color; const [px, py] = iso(cx, cy); ctx.fillRect(px + ox - 3, py + oy - h - 9, 6, 3); }
      }
      // franja con el color del dueño en la cara delantera del pilar
      if (color && f >= 1) { const [px, py] = iso(i + 0.76, j + 0.76); ctx.fillStyle = color; ctx.globalAlpha *= 0.85; ctx.fillRect(px + ox - 2, py + oy - h + 2, 4, 6); }
    } else if (e.tipo === 'puerta') {
      // el paso va a lo largo del muro: si hay muro a los lados en x, la puerta corta el paso en y
      const ejeX = muroEn(i - 1, j) || muroEn(i + 1, j) || !(muroEn(i, j - 1) || muroEn(i, j + 1));
      const h = 30 * f, abierta = !!op.abierta && !fantasma;
      const pil = ejeX ? [rect(i, j + 0.26, i + 0.26, j + 0.74), rect(i + 0.74, j + 0.26, i + 1, j + 0.74)]
                       : [rect(i + 0.26, j, i + 0.74, j + 0.26), rect(i + 0.26, j + 0.74, i + 0.74, j + 1)];
      const hoja = ejeX ? rect(i + 0.26, j + 0.44, i + 0.74, j + 0.56) : rect(i + 0.44, j + 0.26, i + 0.56, j + 0.74);
      const madera = { x: '#7a5532', y: '#5e3f22', top: '#8f6a40' };
      prisma(ctx, pil[0], h, col, ox, oy);
      if (f >= 1 && !abierta) prisma(ctx, hoja, h - 8, madera, ox, oy); // portón cerrado
      prisma(ctx, pil[1], h, col, ox, oy);
      if (f >= 1) {
        prisma(ctx, ejeX ? rect(i, j + 0.3, i + 1, j + 0.7) : rect(i + 0.3, j, i + 0.7, j + 1), 6, col, ox, oy, h - 6); // dintel
        if (color) { const [px, py] = iso(cx, cy); ctx.fillStyle = color; ctx.fillRect(px + ox - 5, py + oy - h - 2, 10, 4); }
      }
    } else { // puente: tablero de madera con barandillas
      const ejeX = e.eje !== 'y';
      const madera = { x: '#8a6238', y: '#6e4c2a', top: '#a47a4a' };
      const oscuro = { x: '#5e3f22', y: '#4a3119', top: '#6e4c2a' };
      const largo = (a, b, k0, k1) => ejeX ? rect(i + a, j + k0, i + b, j + k1) : rect(i + k0, j + a, i + k1, j + b);
      for (const a of [0.12, 0.88]) for (const k of [0.18, 0.82]) // pilotes en el agua
        prisma(ctx, largo(a - 0.05, a + 0.05, k - 0.05, k + 0.05), 6, oscuro, ox, oy, -3);
      if (f > 0.2 || fantasma) {
        const fin = fantasma ? 1.02 : -0.02 + 1.04 * Math.min(1, f); // las tablas se van poniendo
        prisma(ctx, largo(-0.02, fin, 0.12, 0.88), 3, madera, ox, oy, 2);
        ctx.strokeStyle = 'rgba(60,40,20,0.45)'; ctx.lineWidth = 1;
        for (let k = 0.1; k < fin; k += 0.16) { // juntas de las tablas
          const p = ejeX ? [iso(i + k, j + 0.12), iso(i + k, j + 0.88)] : [iso(i + 0.12, j + k), iso(i + 0.88, j + k)];
          ctx.beginPath(); ctx.moveTo(p[0][0] + ox, p[0][1] + oy - 5); ctx.lineTo(p[1][0] + ox, p[1][1] + oy - 5); ctx.stroke();
        }
        if (f >= 1 || fantasma) for (const k of [0.12, 0.84]) prisma(ctx, largo(-0.02, 1.02, k, k + 0.04), 5, oscuro, ox, oy, 5); // barandillas
      }
    }
    ctx.restore();
  }

  // ---------------------------------------------------------- unidades
  function dibujarUnidad(ctx, u, x, y, color, tick, moviendo) {
    if (spriteUnidad(ctx, u, x, y, color, tick, moviendo)) return;
    const paso = moviendo ? Math.sin(tick * 0.9 + u.id) * 3 : 0;
    const golpe = tick - u.golpeTick < 4 ? 1 : 0;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(u.dir || 1, 1);
    if (u.tipo === 'ariete') { // cobertizo con ruedas y un tronco con punta de hierro
      sombra(ctx, 0, 0, 16, 6);
      const empuje = golpe ? 5 : 0;
      ctx.fillStyle = '#5e3c1c'; ctx.fillRect(-8 + empuje, -11, 26, 4); // tronco
      ctx.fillStyle = '#777'; ctx.fillRect(17 + empuje, -12, 4, 6);
      poli(ctx, [[-15, -6], [13, -6], [9, -20], [-11, -20]], '#7a5532', '#3a2614'); // cobertizo
      poli(ctx, [[-13, -20], [11, -20], [0, -27]], '#a67f33', '#3a2614');            // tejadillo
      ctx.fillStyle = color; ctx.fillRect(-5, -17, 8, 5);
      ctx.fillStyle = '#3a2614';
      for (const rx of [-10, 8]) { ctx.beginPath(); ctx.arc(rx, -3, 3.5, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
      return;
    }
    if (u.tipo === 'catapulta') { // armazón con brazo y cazo
      sombra(ctx, 0, 0, 16, 6);
      ctx.fillStyle = '#6b4a2a'; ctx.fillRect(-14, -8, 28, 4);
      ctx.strokeStyle = '#5e3c1c'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(-4, -8); ctx.lineTo(-1, -20); ctx.lineTo(3, -8); ctx.stroke();
      const giro = golpe ? -1.9 : -0.5; // el brazo se dispara hacia arriba al lanzar
      ctx.save(); ctx.translate(-1, -18); ctx.rotate(giro);
      ctx.fillStyle = '#7a5532'; ctx.fillRect(-2, -1.5, 20, 3);
      ctx.fillStyle = '#4a3523'; ctx.beginPath(); ctx.arc(19, 0, 3.5, 0, Math.PI * 2); ctx.fill();
      if (!golpe) { ctx.fillStyle = '#666'; ctx.beginPath(); ctx.arc(19, -2, 2.5, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
      ctx.fillStyle = color; ctx.fillRect(-12, -14, 6, 5);
      ctx.fillStyle = '#3a2614';
      for (const rx of [-10, 10]) { ctx.beginPath(); ctx.arc(rx, -3, 3.5, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
      return;
    }
    if (u.tipo === 'caballero') {
      sombra(ctx, 0, 0, 14, 5);
      // caballo
      ctx.strokeStyle = '#4a2e18'; ctx.lineWidth = 2.5;
      for (const [lx, d] of [[-8, 1], [-4, -1], [5, 1], [9, -1]]) { ctx.beginPath(); ctx.moveTo(lx, -9); ctx.lineTo(lx + paso * d * 0.7, 0); ctx.stroke(); }
      ctx.fillStyle = '#7b4a26'; ctx.beginPath(); ctx.ellipse(0, -12, 12, 6, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(8, -15); ctx.lineTo(15, -24); ctx.lineTo(18, -21); ctx.lineTo(12, -11); ctx.closePath(); ctx.fill();
      ctx.fillStyle = color; ctx.fillRect(-7, -15, 12, 5); // gualdrapa
      // jinete
      ctx.fillStyle = '#9ea4ab'; ctx.fillRect(-3, -28, 7, 12);
      ctx.fillStyle = color; ctx.fillRect(-6, -27, 3, 10);
      ctx.fillStyle = '#c0c6cc'; ctx.beginPath(); ctx.arc(0.5, -31, 3.6, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#6b4a2a'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(2, -22); ctx.lineTo(22 + golpe * 4, -30 + golpe * 6); ctx.stroke();
      ctx.restore();
      return;
    }
    sombra(ctx, 0, 0, 8, 3.5);
    // piernas
    ctx.strokeStyle = '#4a3523'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(-2, -8); ctx.lineTo(-2 + paso, 0); ctx.moveTo(2, -8); ctx.lineTo(2 - paso, 0); ctx.stroke();
    let cuerpo = '#8a6a45', cabeza = '#e0b088';
    if (u.tipo === 'garrotero' || u.tipo === 'hondero') cuerpo = '#6e5034';
    if (u.tipo === 'hoplita' || u.tipo === 'arquero') cuerpo = color;
    if (u.tipo === 'ballestero') cuerpo = '#7d8288';
    if (u.tipo === 'sacerdote') cuerpo = '#eeeae0';
    ctx.fillStyle = cuerpo; ctx.fillRect(-4, -18, 8, 11);
    ctx.fillStyle = color;
    if (u.tipo !== 'hoplita') ctx.fillRect(-4, -12, 8, 2.5); // cinturón del color del jugador
    else { ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(-4, -9, 8, 2); }
    ctx.fillStyle = cabeza; ctx.beginPath(); ctx.arc(0, -21.5, 3.6, 0, Math.PI * 2); ctx.fill();
    const giro = golpe ? -0.9 : 0.3;
    if (u.tipo === 'aldeano') {
      ctx.fillStyle = '#5a3a1e'; ctx.fillRect(-3.5, -25.5, 7, 2.5); // pelo
      if (u.estado === 'recolectar' || u.estado === 'construir') { // herramienta
        ctx.save(); ctx.translate(4, -15); ctx.rotate(giro);
        ctx.strokeStyle = '#6b4a2a'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(9, -3); ctx.stroke();
        ctx.fillStyle = '#9a9a9a'; ctx.fillRect(7, -6, 3, 6); ctx.restore();
      }
      if (u.carga && u.carga.cantidad > 0) { ctx.fillStyle = COLOR_CARGA[u.carga.tipo]; ctx.fillRect(-8, -20, 5, 7); }
    } else if (u.tipo === 'garrotero') {
      ctx.fillStyle = '#3d2a17'; ctx.fillRect(-3.5, -25.5, 7, 3);
      ctx.save(); ctx.translate(4, -15); ctx.rotate(giro - 0.4);
      ctx.strokeStyle = '#5e3c1c'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(11, -4); ctx.stroke();
      ctx.fillStyle = '#5e3c1c'; ctx.beginPath(); ctx.arc(11, -4, 2.6, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    } else if (u.tipo === 'hoplita') {
      ctx.fillStyle = '#b5893a'; ctx.beginPath(); ctx.arc(0, -22.5, 4, Math.PI, 0); ctx.fill(); // casco
      ctx.fillStyle = '#c23b2b'; ctx.fillRect(-0.8, -29, 1.6, 4);
      ctx.strokeStyle = '#6b4a2a'; ctx.lineWidth = 1.5; // lanza
      ctx.beginPath(); ctx.moveTo(3 + golpe * 4, -6); ctx.lineTo(9 + golpe * 4, -30); ctx.stroke();
      ctx.fillStyle = '#b5893a'; ctx.beginPath(); ctx.arc(-4, -13, 5.5, 0, Math.PI * 2); ctx.fill(); // escudo
      ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
    } else if (u.tipo === 'hondero') {
      ctx.fillStyle = '#3d2a17'; ctx.fillRect(-3.5, -25.5, 7, 3);
      ctx.strokeStyle = '#8a6a45'; ctx.lineWidth = 1; // honda girando
      const a = golpe ? tick * 2 : 0.5;
      ctx.beginPath(); ctx.moveTo(3, -17); ctx.lineTo(3 + Math.cos(a) * 7, -22 + Math.sin(a) * 5); ctx.stroke();
      ctx.fillStyle = '#999'; ctx.beginPath(); ctx.arc(3 + Math.cos(a) * 7, -22 + Math.sin(a) * 5, 1.5, 0, Math.PI * 2); ctx.fill();
    } else if (u.tipo === 'arquero') {
      ctx.fillStyle = '#4a3523'; ctx.fillRect(-3.5, -25.5, 7, 2.5);
      ctx.strokeStyle = '#6b4a2a'; ctx.lineWidth = 1.5; // arco
      ctx.beginPath(); ctx.arc(4, -16, 7, -1.2, 1.2); ctx.stroke();
      ctx.strokeStyle = '#ddd'; ctx.lineWidth = 0.6;
      ctx.beginPath(); ctx.moveTo(4 + Math.cos(-1.2) * 7, -16 + Math.sin(-1.2) * 7); ctx.lineTo(golpe ? 4.5 : 2, -16); ctx.lineTo(4 + Math.cos(1.2) * 7, -16 + Math.sin(1.2) * 7); ctx.stroke();
      ctx.fillStyle = '#7a4d22'; ctx.fillRect(-6.5, -21, 2.5, 8); // carcaj
    } else if (u.tipo === 'sacerdote') {
      ctx.fillStyle = '#eeeae0'; ctx.fillRect(-4.5, -9, 9, 8); // túnica larga hasta los pies
      ctx.fillStyle = color; ctx.fillRect(-1.2, -18, 2.4, 16);   // estola del color del jugador
      ctx.fillStyle = '#bbb'; ctx.fillRect(-3.5, -25.5, 7, 2);   // pelo canoso
      ctx.strokeStyle = '#6b4a2a'; ctx.lineWidth = 1.5;          // báculo
      const alza = golpe ? -4 : 0;
      ctx.beginPath(); ctx.moveTo(6, -2 + alza); ctx.lineTo(6, -28 + alza); ctx.stroke();
      ctx.fillStyle = '#e8c45a'; ctx.beginPath(); ctx.arc(6, -29 + alza, 2.2, 0, Math.PI * 2); ctx.fill();
    } else if (u.tipo === 'ballestero') {
      ctx.fillStyle = '#8f969e'; ctx.beginPath(); ctx.arc(0, -22.5, 4, Math.PI, 0); ctx.fill(); // capacete
      ctx.fillStyle = color; ctx.fillRect(-4, -18, 8, 4); // sobreveste
      ctx.strokeStyle = '#5e3c1c'; ctx.lineWidth = 2; // ballesta
      ctx.beginPath(); ctx.moveTo(0, -15); ctx.lineTo(10, -16); ctx.stroke();
      ctx.strokeStyle = '#555'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(9, -20); ctx.quadraticCurveTo(11, -16, 9, -12); ctx.stroke();
    }
    ctx.restore();
  }

  EI.Graficos = {
    TW, TH, iso, poli, cargarSprites, dibujarSuelo, dibujarCasilla, hayTexturaSuelo, dibujarMontana, dibujarRecurso, dibujarEdificio, dibujarUnidad, esquinas,
    ALTURA: { centro: 70, casa: 40, almacen: 30, cuartel: 40, torre: 80, granja: 10, templo: 50, taller: 50, muralla: 30, puerta: 36, puente: 10, unidad: 32 },
  };
})();
