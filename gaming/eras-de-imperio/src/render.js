// =====================================================================
//  ERAS DE IMPERIO — DIBUJADO
//  Lee el estado de la simulación y lo pinta. Nunca lo modifica.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

(function () {
  const G = () => EI.Graficos;

  class Render {
    constructor(canvas, sim) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.sim = sim;
      this.zoom = 1;
      this.camX = 0; this.camY = 0;
      this.marcas = []; // clics de órdenes para dar respuesta visual
      this.niebla = new EI.Niebla(sim, 0);
      this.prepararSuelo();
    }
    // El suelo se pinta una vez, en trozos de 1024 px (en los mapas grandes una sola imagen
    // sería enorme). Cada trozo se solapa 1 px con el siguiente para que no se vean costuras.
    prepararSuelo() {
      const { W, H } = this.sim, g = G(), T = 1024, ox = H * g.TW / 2;
      const trozos = new Map();
      const trozo = (cx, cy) => {
        const k = cy * 1000 + cx;
        let t = trozos.get(k);
        if (!t) {
          const c = document.createElement('canvas'); c.width = T + 1; c.height = T + 1;
          const ctx = c.getContext('2d'); ctx.translate(ox - cx * T, -cy * T);
          t = { c, ctx, x: cx * T - ox, y: cy * T }; trozos.set(k, t);
        }
        return t;
      };
      const sim = this.sim, ter = (i, j) => sim.dentro(i, j) ? sim.terreno[j * W + i] : -1;
      // picos de montaña: se dibujan luego con las entidades (ids negativos para ordenarlos)
      this.montanas = [];
      for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) if (sim.terreno[j * W + i] === 3)
        this.montanas.push({ id: -1 - this.montanas.length, clase: 'montana', tx: i, ty: j, tam: 1, x: i + 0.5, y: j + 0.5 });
      // relieve para el minimapa: una imagen de W x H píxeles que se estira como la niebla
      const m = document.createElement('canvas'); m.width = W; m.height = H;
      const mc = m.getContext('2d'), colores = { 1: '#3a6a9a', 2: '#6fa0b0', 3: '#8a8272' };
      for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) { const t = sim.terreno[j * W + i]; if (t) { mc.fillStyle = colores[t]; mc.fillRect(i, j, 1, 1); } }
      this.relieveMini = m;
      const pintar = (textura) => {
        for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
          const [px, py] = g.iso(i, j), x0 = px + ox - g.TW / 2, x1 = px + ox + g.TW / 2;
          const y0 = py - (textura ? g.TW : 2), y1 = py + g.TH + 2;
          for (let cy = Math.max(0, Math.floor(y0 / T)); cy <= Math.floor(y1 / T); cy++)
            for (let cx = Math.max(0, Math.floor(x0 / T)); cx <= Math.floor(x1 / T); cx++) g.dibujarCasilla(trozo(cx, cy).ctx, i, j, textura, ter);
        }
      };
      pintar(false);
      if (g.hayTexturaSuelo()) pintar(true);
      this.suelo = [...trozos.values()].map(t => ({ c: t.c, x: t.x, y: t.y }));
    }
    tamano() {
      const r = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      if (this.canvas.width !== Math.round(r.width * dpr) || this.canvas.height !== Math.round(r.height * dpr)) {
        this.canvas.width = Math.round(r.width * dpr); this.canvas.height = Math.round(r.height * dpr);
      }
      this.dpr = dpr; this.ancho = r.width; this.alto = r.height;
    }
    // Coordenadas: mundo (casillas) <-> pantalla (píxeles CSS del canvas)
    aPantalla(x, y) { const [px, py] = G().iso(x, y); return [px * this.zoom + this.camX, py * this.zoom + this.camY]; }
    aMundo(sx, sy) {
      const px = (sx - this.camX) / this.zoom, py = (sy - this.camY) / this.zoom;
      const a = px / (G().TW / 2), b = py / (G().TH / 2);
      return [(a + b) / 2, (b - a) / 2];
    }
    centrarEn(x, y) { const [px, py] = G().iso(x, y); this.camX = this.ancho / 2 - px * this.zoom; this.camY = this.alto / 2 - py * this.zoom; this.limitarCamara(); }
    limitarCamara() {
      const { W, H } = this.sim, g = G();
      const minX = -H * g.TW / 2 * this.zoom, maxX = W * g.TW / 2 * this.zoom, maxY = (W + H) * g.TH / 2 * this.zoom;
      this.camX = Math.min(Math.max(this.camX, this.ancho / 2 - maxX), this.ancho / 2 - minX);
      this.camY = Math.min(Math.max(this.camY, this.alto / 2 - maxY), this.alto / 2);
    }
    // La puerta se abre cuando hay una unidad de su dueño cerca.
    puertaAbierta(p) {
      if (p.recuerdo || !p.construido) return false;
      for (const u of this.sim.entidades)
        if (u.clase === 'unidad' && !u.dentro && u.jugador === p.jugador && Math.abs(u.x - p.x) < 1.4 && Math.abs(u.y - p.y) < 1.4) return true;
      return false;
    }
    posUnidad(u, alfa) { return [u.px + (u.x - u.px) * alfa, u.py + (u.y - u.py) * alfa]; }

    // Caja en pantalla de una entidad (para elegir con el ratón)
    caja(e, alfa) {
      const g = G(), z = this.zoom;
      if (e.clase === 'unidad') {
        const [x, y] = this.posUnidad(e, alfa), [sx, sy] = this.aPantalla(x, y);
        const grande = e.tipo === 'caballero' || this.sim.D.unidades[e.tipo].asedio;
        const a = (grande ? 36 : 28) * z, m = (grande ? 15 : 9) * z;
        return [sx - m, sy - a, sx + m, sy + 4 * z];
      }
      const [lx] = this.aPantalla(e.tx, e.ty + e.tam), [rx] = this.aPantalla(e.tx + e.tam, e.ty);
      const [, ty] = this.aPantalla(e.tx, e.ty), [, by] = this.aPantalla(e.tx + e.tam, e.ty + e.tam);
      const alto = (e.clase === 'recurso' ? (e.tipo === 'arbol' ? 58 : 22) : g.ALTURA[e.tipo]) * z;
      return [lx, Math.min(ty, by - alto), rx, by];
    }
    entidadEn(sx, sy, alfa) {
      let mejor = null, prof = -1e9, esUnidad = false;
      for (const e of this.sim.entidades) {
        if (e.dentro || !this.niebla.seVe(e)) continue; // refugiado o tapado por la niebla: no se puede elegir
        const [x0, y0, x1, y1] = this.caja(e, alfa);
        if (sx < x0 || sx > x1 || sy < y0 || sy > y1) continue;
        const u = e.clase === 'unidad';
        if (e.clase !== 'unidad') { // dentro del rombo o por encima de él
          const [wx, wy] = this.aMundo(sx, sy);
          const dentro = wx >= e.tx - 0.1 && wx <= e.tx + e.tam + 0.1 && wy >= e.ty - 0.1 && wy <= e.ty + e.tam + 0.1;
          const encima = (wx - e.tx) + (wy - e.ty) < e.tam * 2 && Math.abs((wx - e.tx) - (wy - e.ty)) < e.tam + 0.3;
          if (!dentro && !encima) continue;
        }
        const p = e.x + e.y + (u ? 100 : 0);
        if (p > prof) { prof = p; mejor = e; esUnidad = u; }
      }
      return mejor;
    }

    dibujar(alfa, ui) {
      this.tamano();
      const ctx = this.ctx, sim = this.sim, g = G(), z = this.zoom;
      const D = sim.D, niebla = this.niebla;
      niebla.actualizar();
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.fillStyle = '#1d2a1a'; ctx.fillRect(0, 0, this.ancho, this.alto);
      ctx.setTransform(this.dpr * z, 0, 0, this.dpr * z, this.dpr * this.camX, this.dpr * this.camY);
      ctx.imageSmoothingEnabled = z < 1;
      { // solo los trozos de suelo que caen en pantalla
        const x0 = -this.camX / z, y0 = -this.camY / z, x1 = x0 + this.ancho / z, y1 = y0 + this.alto / z;
        for (const t of this.suelo) if (t.x < x1 && t.x + 1025 > x0 && t.y < y1 && t.y + 1025 > y0) ctx.drawImage(t.c, t.x, t.y);
      }

      const sel = ui.seleccion;
      // marcas de selección en el suelo
      for (const id of sel) {
        const e = sim.obtener(id); if (!e || e.dentro) continue;
        const color = e.jugador === 0 ? 'rgba(120,255,120,0.9)' : e.jugador > 0 ? 'rgba(255,110,90,0.9)' : 'rgba(255,240,150,0.9)';
        if (e.clase === 'unidad') {
          const [x, y] = this.posUnidad(e, alfa), [px, py] = g.iso(x, y);
          const grande = e.tipo === 'caballero' || D.unidades[e.tipo].asedio;
          ctx.strokeStyle = color; ctx.lineWidth = 1.5 / z;
          ctx.beginPath(); ctx.ellipse(px, py, grande ? 15 : 10, grande ? 7.5 : 5, 0, 0, Math.PI * 2); ctx.stroke();
        } else {
          const c = g.esquinas(e.tx, e.ty, e.tam, -0.05);
          g.poli(ctx, [c.arriba, c.der, c.abajo, c.izq], null, color);
        }
      }
      // fantasma de construcción
      // casillas con muro (para que cada tramo se una a sus vecinos); el fantasma también cuenta
      const fantasmaMuro = new Set();
      if (ui.fantasma && ui.fantasma.casillas && D.edificios[ui.fantasma.tipo].muro)
        for (const c of ui.fantasma.casillas) if (c.ok) fantasmaMuro.add(c.y * sim.W + c.x);
      const muroDe = (j) => (x, y) => {
        if (!sim.dentro(x, y)) return false;
        const i = y * sim.W + x;
        if (j === 0 && fantasmaMuro.has(i)) return true;
        const e = sim.obtener(sim.bloqueo[i] > 0 ? sim.bloqueo[i] : sim.encima[i]);
        return !!(e && e.clase === 'edificio' && e.jugador === j && D.edificios[e.tipo].muro && niebla.exploradaCasilla(x, y));
      };
      if (ui.fantasma && D.edificios[ui.fantasma.tipo].linea) { // muralla / puente: una casilla por tramo
        const f = ui.fantasma;
        for (const c of f.casillas) {
          const k = g.esquinas(c.x, c.y, 1, 0);
          g.poli(ctx, [k.arriba, k.der, k.abajo, k.izq], c.ok ? 'rgba(80,220,80,0.3)' : c.caro ? 'rgba(240,170,40,0.4)' : 'rgba(230,60,60,0.3)', c.ok ? '#6f6' : c.caro ? '#fb4' : '#f55');
        }
        ctx.save(); ctx.globalAlpha = 0.55;
        const muroEn = muroDe(0);
        for (const c of f.casillas) if (c.ok)
          g.dibujarEdificio(ctx, { tipo: f.tipo, tx: c.x, ty: c.y, tam: 1, construido: true, eje: f.eje }, 0, 0, D.jugadores[0].color, sim.jugadores[0].epoca, { fantasma: true, muroEn });
        ctx.restore();
        if (f.casillas.length > 1 || f.inicio) { // cuánto cuesta lo que se va a poner
          const n = f.casillas.filter(c => c.ok).length, ult = f.casillas[f.casillas.length - 1];
          const [sx, sy] = g.iso(ult.x + 1, ult.y + 0.5);
          const txt = n + ' × ' + D.edificios[f.tipo].nombre.toLowerCase() + ' · ' + Object.keys(f.gasto || {}).map(k => f.gasto[k] + ' ' + D.recursos[k].nombre.toLowerCase()).join(', ');
          ctx.font = `${12 / z}px sans-serif`; ctx.lineWidth = 3 / z; ctx.strokeStyle = 'rgba(0,0,0,0.75)'; ctx.fillStyle = '#fff';
          ctx.strokeText(txt, sx + 8 / z, sy); ctx.fillText(txt, sx + 8 / z, sy);
        }
      } else if (ui.fantasma) {
        const f = ui.fantasma, d = D.edificios[f.tipo];
        const c = g.esquinas(f.tx, f.ty, d.tam, 0);
        g.poli(ctx, [c.arriba, c.der, c.abajo, c.izq], f.valido ? 'rgba(80,220,80,0.35)' : 'rgba(230,60,60,0.45)', f.valido ? '#6f6' : '#f55');
        ctx.save(); ctx.globalAlpha = 0.55;
        g.dibujarEdificio(ctx, { tipo: f.tipo, tx: f.tx, ty: f.ty, tam: d.tam, construido: true }, 0, 0, D.jugadores[0].color, sim.jugadores[0].epoca, { fantasma: true, muroEn: muroDe(0) });
        ctx.restore();
      }

      // entidades ordenadas por profundidad
      const vis = [];
      const [vx0, vy0, vx1, vy1] = [-80, -120, this.ancho + 80, this.alto + 120];
      const enPantalla = (e, x, y) => { const [sx, sy] = this.aPantalla(x, y); return !(sx < vx0 || sx > vx1 || sy < vy0 || sy > vy1 + e.tam * 40); };
      for (const e of sim.entidades) {
        if (e.dentro || !niebla.seVe(e)) continue; // refugiados y lo tapado por la niebla no se ven
        let x = e.x, y = e.y;
        if (e.clase === 'unidad') [x, y] = this.posUnidad(e, alfa);
        if (!enPantalla(e, x, y)) continue;
        vis.push({ e, x, y, prof: e.clase === 'edificio' && (e.tipo === 'granja' || e.tipo === 'puente') ? x + y - e.tam : x + y }); // lo plano, debajo
      }
      // montañas (solo las ya exploradas, para que no asomen por encima de la niebla negra)
      for (const mo of this.montanas) if (niebla.exploradaCasilla(mo.tx, mo.ty) && enPantalla(mo, mo.x, mo.y)) vis.push({ e: mo, x: mo.x, y: mo.y, prof: mo.x + mo.y });
      // edificios enemigos que viste y ahora están bajo la niebla: se dibujan como los recuerdas
      const recordados = niebla.recuerdosOcultos().filter(r => enPantalla(r, r.x, r.y))
        .map(r => ({ e: r, x: r.x, y: r.y, prof: r.tipo === 'granja' ? r.x + r.y - r.tam : r.x + r.y }));
      const dibujo = vis.concat(recordados).sort((a, b) => a.prof - b.prof || a.e.id - b.e.id);
      const tick = sim.tick + alfa;
      for (const { e, x, y } of dibujo) {
        const [px, py] = g.iso(x, y);
        const color = e.jugador >= 0 ? D.jugadores[e.jugador].color : null;
        if (e.clase === 'montana') g.dibujarMontana(ctx, e.tx, e.ty);
        else if (e.clase === 'recurso') g.dibujarRecurso(ctx, e, px, py + 6);
        else if (e.clase === 'edificio') {
          const de = D.edificios[e.tipo];
          const op = de.muro ? { muroEn: muroDe(e.jugador), abierta: de.puerta && this.puertaAbierta(e) } : null;
          g.dibujarEdificio(ctx, e, 0, 0, color, e.recuerdo ? e.epoca : sim.jugadores[e.jugador].epoca, op);
        }
        else g.dibujarUnidad(ctx, e, px, py, color, tick, e.x !== e.px || e.y !== e.py);
      }

      // proyectiles en vuelo (torres, centros con refugiados y tiradores): parábola de 4 ticks
      for (const e of sim.entidades) {
        if (!e.disparo || e.dentro) continue;
        if (!niebla.seVe(e) && !niebla.verCasilla(e.disparo.x, e.disparo.y)) continue; // disparo escondido en la niebla
        const edad = sim.tick - e.disparo.tick;
        const tipo = e.clase === 'edificio' ? 'flecha' : (D.unidades[e.tipo] && D.unidades[e.tipo].proyectil) || 'flecha';
        const [bx, by0] = g.iso(e.disparo.x, e.disparo.y), by = by0 - 12;
        if (tipo === 'bola' && edad >= 4 && edad < 10) { // polvareda del impacto de la catapulta
          const k = (edad - 4 + alfa) / 6;
          ctx.fillStyle = `rgba(120,100,70,${0.5 * (1 - k)})`;
          ctx.beginPath(); ctx.ellipse(bx, by0, 10 + 30 * k, 5 + 15 * k, 0, 0, Math.PI * 2); ctx.fill();
          continue;
        }
        if (edad > 4) continue;
        const [ax, ay0] = e.clase === 'edificio' ? g.iso(e.x, e.y) : g.iso(...this.posUnidad(e, alfa));
        const ay = ay0 - (e.clase === 'edificio' ? (e.tipo === 'torre' ? 60 : 40) : 18);
        const t = Math.min(1, (edad + alfa) / 4);
        const curva = Math.min(tipo === 'bola' ? 90 : 40, Math.hypot(bx - ax, by - ay) * (tipo === 'bola' ? 0.5 : 0.25));
        const pos = (k) => [ax + (bx - ax) * k, ay + (by - ay) * k - curva * 4 * k * (1 - k)];
        const [x1, y1] = pos(t), [x0, y0] = pos(Math.max(0, t - 0.08));
        if (tipo === 'piedra' || tipo === 'bola') {
          ctx.fillStyle = tipo === 'bola' ? '#5a534a' : '#777';
          ctx.beginPath(); ctx.arc(x1, y1, tipo === 'bola' ? 4.5 : 2, 0, Math.PI * 2); ctx.fill();
          continue;
        }
        const dx = x1 - x0, dy = y1 - y0, l = Math.hypot(dx, dy) || 1, largo = tipo === 'virote' ? 7 : 10;
        ctx.strokeStyle = '#2a1d10'; ctx.lineWidth = (tipo === 'virote' ? 2.2 : 1.4) / z;
        ctx.beginPath(); ctx.moveTo(x1 - dx / l * largo, y1 - dy / l * largo); ctx.lineTo(x1, y1); ctx.stroke();
      }

      // niebla de guerra encima de todo lo del mapa (los rótulos y barras van por encima)
      niebla.dibujar(ctx);

      // sacerdotes: destellos verdes al curar y rayo dorado al convertir
      for (const { e, x, y } of vis) {
        if (e.clase !== 'unidad' || !D.unidades[e.tipo].sacerdote) continue;
        const t = sim.obtener(e.objetivo);
        if (!t || t.dentro) continue;
        const [px, py] = g.iso(x, y), [tx, ty] = g.iso(...this.posUnidad(t, alfa));
        if (e.estado === 'curar' && sim.tick - e.golpeTick < 12) {
          ctx.fillStyle = 'rgba(120,255,140,0.9)';
          for (let k = 0; k < 3; k++) {
            const f = ((tick * 0.08 + k / 3) % 1);
            const cx = tx + (k - 1) * 6, cy = ty - 10 - f * 22;
            ctx.globalAlpha = 1 - f; ctx.fillRect(cx - 1, cy - 4, 2, 8); ctx.fillRect(cx - 4, cy - 1, 8, 2);
          }
          ctx.globalAlpha = 1;
        } else if (e.estado === 'convertir' && e.canal > 0) {
          const pulso = 0.5 + 0.5 * Math.sin(tick * 0.8);
          ctx.strokeStyle = `rgba(255,220,90,${0.4 + 0.4 * pulso})`; ctx.lineWidth = (2 + pulso * 2) / z;
          ctx.beginPath(); ctx.moveTo(px, py - 22); ctx.quadraticCurveTo((px + tx) / 2, Math.min(py, ty) - 40, tx, ty - 16); ctx.stroke();
          const progreso = e.canal / (D.unidades[e.tipo].conversion * sim.TPS);
          ctx.strokeStyle = 'rgba(255,220,90,0.9)'; ctx.lineWidth = 2 / z;
          ctx.beginPath(); ctx.arc(tx, ty - 16, 10, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progreso); ctx.stroke();
        }
      }

      // aldeanos refugiados: contador sobre el centro urbano
      for (const { e } of vis) {
        if (e.clase !== 'edificio' || !e.ocupantes || !e.ocupantes.length) continue;
        const [px, py] = g.iso(e.x, e.y), yb = py - g.ALTURA[e.tipo] - e.tam * 8 - 12; // encima de la barra de vida
        const texto = '🏠 ' + e.ocupantes.length;
        ctx.font = `bold ${12}px "Segoe UI", sans-serif`; ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(0,0,0,0.65)'; ctx.fillRect(px - 20, yb - 12, 40, 16);
        ctx.fillStyle = '#fff'; ctx.fillText(texto, px, yb + 1);
      }

      // barras de vida
      for (const { e, x, y } of vis) {
        if (e.clase === 'recurso') continue;
        const elegido = sel.has(e.id), herido = sim.tick - e.golpeado < 40;
        if (!elegido && !herido && (e.clase !== 'edificio' || e.construido)) continue;
        const [px, py] = g.iso(x, y);
        const alto = e.clase === 'unidad' ? (e.tipo === 'caballero' || D.unidades[e.tipo].asedio ? 40 : 32) : g.ALTURA[e.tipo] + e.tam * 8;
        const ancho = e.clase === 'unidad' ? 20 : 30 + e.tam * 8;
        const yb = py - alto;
        ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(px - ancho / 2 - 1, yb - 1, ancho + 2, 5);
        const f = Math.max(0, e.vida / e.vidaMax);
        ctx.fillStyle = f > 0.5 ? '#4fd14f' : f > 0.25 ? '#e3c440' : '#e04a3a';
        ctx.fillRect(px - ancho / 2, yb, ancho * f, 3);
        if (e.clase === 'edificio' && !e.construido) {
          ctx.fillStyle = '#5aa9ff'; ctx.fillRect(px - ancho / 2, yb + 4, ancho * e.progreso / e.total, 2);
        }
      }

      // punto de reunión del edificio elegido
      for (const id of sel) {
        const e = sim.obtener(id);
        if (!e || e.clase !== 'edificio' || e.jugador !== 0 || !e.reunion) continue;
        const [px, py] = g.iso(e.reunion.x, e.reunion.y);
        ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.setLineDash([4, 4]); ctx.lineWidth = 1 / z;
        const [cx, cy] = g.iso(e.x, e.y);
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke(); ctx.setLineDash([]);
        ctx.strokeStyle = '#eee'; ctx.lineWidth = 1.5 / z; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py - 18); ctx.stroke();
        ctx.fillStyle = D.jugadores[0].color; ctx.fillRect(px, py - 18, 10, 6);
      }

      // marcas de clic
      const ahora = performance.now();
      this.marcas = this.marcas.filter(m => ahora - m.t < 600);
      for (const m of this.marcas) {
        const k = (ahora - m.t) / 600, [px, py] = g.iso(m.x, m.y);
        ctx.strokeStyle = m.color; ctx.globalAlpha = 1 - k; ctx.lineWidth = 2 / z;
        ctx.beginPath(); ctx.ellipse(px, py, 12 * (1 - k * 0.6), 6 * (1 - k * 0.6), 0, 0, Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // recuadro de selección (en coordenadas de pantalla)
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      if (ui.recuadro) {
        const r = ui.recuadro;
        ctx.strokeStyle = '#9f9'; ctx.lineWidth = 1; ctx.fillStyle = 'rgba(150,255,150,0.12)';
        ctx.fillRect(r.x0, r.y0, r.x1 - r.x0, r.y1 - r.y0); ctx.strokeRect(r.x0, r.y0, r.x1 - r.x0, r.y1 - r.y0);
      }
    }

    // Minimapa en otro canvas
    dibujarMinimapa(canvas) {
      const ctx = canvas.getContext('2d'), sim = this.sim, W = sim.W, H = sim.H;
      const w = canvas.width, h = canvas.height;
      const s = w / (W + H); // píxeles por casilla en diagonal
      const p = (x, y) => [(x - y + H) * s, (x + y) * s * (h / w)];
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#4c7a3a';
      ctx.beginPath(); ctx.moveTo(...p(0, 0)); ctx.lineTo(...p(W, 0)); ctx.lineTo(...p(W, H)); ctx.lineTo(...p(0, H)); ctx.closePath(); ctx.fill();
      ctx.save(); // ríos y montañas
      ctx.imageSmoothingEnabled = false;
      ctx.setTransform(s, s * h / w, -s, s * h / w, H * s, 0);
      ctx.drawImage(this.relieveMini, 0, 0);
      ctx.restore();
      const colores = { arbol: '#1f4a1f', arbusto: '#c0393b', piedra: '#aaa', oro: '#f0c93a' };
      const niebla = this.niebla;
      for (const e of sim.entidades.concat(niebla.recuerdosOcultos())) {
        if (e.dentro || (!e.recuerdo && !niebla.seVe(e))) continue;
        const [x, y] = p(e.x, e.y);
        if (e.clase === 'recurso') { ctx.fillStyle = colores[e.tipo]; ctx.fillRect(x - 1, y - 1, 2, 2); }
        else { ctx.fillStyle = sim.D.jugadores[e.jugador].color; const t = e.clase === 'edificio' ? 2 + e.tam : 2.5; ctx.fillRect(x - t / 2, y - t / 2, t, t); }
      }
      // niebla en el minimapa (misma imagen, estirada al rombo del minimapa)
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      ctx.setTransform(s, s * h / w, -s, s * h / w, H * s, 0);
      ctx.drawImage(niebla.canvas, 0, 0);
      ctx.restore();
      // vista de la cámara
      const esq = [[0, 0], [this.ancho, 0], [this.ancho, this.alto], [0, this.alto]].map(([a, b]) => p(...this.aMundo(a, b)));
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(...esq[0]); for (const q of esq.slice(1)) ctx.lineTo(...q); ctx.closePath(); ctx.stroke();
      this._mini = { s, w, h, H };
    }
    minimapaAMundo(mx, my) {
      const { s, w, h, H } = this._mini;
      const a = mx / s - H, b = my / (s * (h / w));
      return [(a + b) / 2, (b - a) / 2];
    }
  }

  EI.Render = Render;
})();
