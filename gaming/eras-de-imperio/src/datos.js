// =====================================================================
//  ERAS DE IMPERIO — DATOS DEL JUEGO
//  Este es el archivo para cambiar valores: costes, vida, daño, tiempos...
//  Los tiempos van en SEGUNDOS y las velocidades en CASILLAS POR SEGUNDO.
//  Después de guardar, recarga la página del navegador (F5).
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

EI.DATOS = {
  // Ticks de simulación por segundo (no conviene tocarlo).
  ticksPorSegundo: 10,

  mapa: {
    ancho: 48,
    alto: 48,
    semilla: 12345, // mapa "clásico" (siempre el mismo); "aleatorio" usa una semilla al azar
  },

  // Opciones que se eligen en la pantalla de inicio.
  // escala = cuántas veces más ancho y alto que el mapa pequeño (48 x 48 casillas).
  tamanosMapa: {
    pequeno: { nombre: 'Pequeño (48 × 48)',  escala: 1 },
    mediano: { nombre: 'Mediano (96 × 96)',  escala: 2 },
    grande:  { nombre: 'Grande (144 × 144)', escala: 3 },
  },
  // Relieve: ríos (con vados para cruzarlos) y montañas, que no se pueden atravesar.
  relievesPartida: {
    rios:     { nombre: 'Ríos y montañas', rio: true,  montanas: true },
    montanas: { nombre: 'Solo montañas',   rio: false, montanas: true },
    llano:    { nombre: 'Llano',           rio: false, montanas: false },
  },
  relieve: {
    anchoRio: 2.6,          // casillas de ancho del río en el mapa pequeño (algo más en los grandes)
    curvasRio: 3.5,         // cuánto serpentea el río (en el mapa pequeño)
    velocidadVado: 0.6,     // las unidades cruzan los vados al 60 % de su velocidad
    montanas: 3,            // cordilleras por cada lado en el mapa pequeño (más en los grandes)
  },
  recursosPartida: {
    normales: { nombre: 'Normales', recursos: { comida: 200, madera: 200, piedra: 100, oro: 100 } },
    altos:    { nombre: 'Altos',    recursos: { comida: 500, madera: 500, piedra: 300, oro: 300 } },
    muyAltos: { nombre: 'Muy altos', recursos: { comida: 1500, madera: 1500, piedra: 800, oro: 800 } },
  },

  // Niebla de guerra: true = solo ves lo que ven tus unidades y edificios.
  niebla: true,

  // Recursos con los que empieza cada jugador.
  recursosIniciales: { comida: 200, madera: 200, piedra: 100, oro: 100 },
  aldeanosIniciales: 3,
  poblacionMaxima: 50,

  // Nombres de los recursos en pantalla.
  recursos: {
    comida: { nombre: 'Comida', icono: '🍖' },
    madera: { nombre: 'Madera', icono: '🪵' },
    piedra: { nombre: 'Piedra', icono: '🪨' },
    oro:    { nombre: 'Oro',    icono: '🪙' },
  },

  // Fuentes de recursos que hay en el mapa.
  fuentes: {
    arbol:   { nombre: 'Árbol',        recurso: 'madera', cantidad: 120 },
    arbusto: { nombre: 'Arbusto de bayas', recurso: 'comida', cantidad: 350 },
    piedra:  { nombre: 'Cantera',      recurso: 'piedra', cantidad: 300 },
    oro:     { nombre: 'Mina de oro',  recurso: 'oro',    cantidad: 300 },
  },

  // Recolección del aldeano: segundos que tarda en sacar 1 unidad de cada recurso.
  recoleccion: {
    capacidad: 10, // lo que carga antes de volver al almacén o centro urbano
    segundosPorUnidad: { comida: 1.0, madera: 1.2, piedra: 1.6, oro: 1.6 },
  },

  // Épocas en orden. "coste" y "tiempo" son lo que cuesta AVANZAR a esa época.
  epocas: [
    { id: 'piedra',     nombre: 'Edad de Piedra' },
    { id: 'antiguedad', nombre: 'Antigüedad',  coste: { comida: 300, madera: 200 },            tiempo: 40 },
    { id: 'media',      nombre: 'Edad Media',  coste: { comida: 500, oro: 250, piedra: 150 }, tiempo: 50 },
  ],

  // Unidades. "epoca" = número de época desde la que se puede entrenar (0, 1 o 2).
  // vision = casillas a las que ve enemigos; alcance = distancia de ataque en casillas.
  // tecla = atajo de teclado para entrenarla.
  // distancia = dispara desde lejos (proyectil: piedra, flecha o virote).
  // contraEdificios = parte del daño que hace a edificios (0.3 = el 30 %).
  // bonus = daño extra contra unidades a distancia.
  unidades: {
    aldeano: {
      nombre: 'Aldeano', epoca: 0, edificio: 'centro', tecla: 'e',
      coste: { comida: 50 }, tiempo: 10,
      vida: 40, ataque: 3, armadura: 0, alcance: 0.5, cadencia: 1.5,
      velocidad: 1.3, vision: 5, recolecta: true, construye: true,
      defiende: true, // si le atacan, se defiende (y luego vuelve al trabajo)
    },
    garrotero: {
      nombre: 'Guerrero de maza', epoca: 0, edificio: 'cuartel', tecla: 'q',
      coste: { comida: 40, madera: 25 }, tiempo: 12,
      vida: 60, ataque: 6, armadura: 0, alcance: 0.5, cadencia: 1.2,
      velocidad: 1.2, vision: 6,
    },
    hondero: {
      nombre: 'Hondero', epoca: 0, edificio: 'cuartel', tecla: 'j',
      coste: { comida: 30, madera: 20 }, tiempo: 11,
      vida: 35, ataque: 4, armadura: 0, alcance: 4, cadencia: 1.6,
      velocidad: 1.2, vision: 7, distancia: true, proyectil: 'piedra', contraEdificios: 0.3,
    },
    hoplita: {
      nombre: 'Hoplita', epoca: 1, edificio: 'cuartel', tecla: 'r',
      coste: { comida: 50, oro: 30 }, tiempo: 14,
      vida: 100, ataque: 9, armadura: 2, alcance: 0.7, cadencia: 1.2,
      velocidad: 1.1, vision: 6,
    },
    arquero: {
      nombre: 'Arquero', epoca: 1, edificio: 'cuartel', tecla: 'k',
      coste: { comida: 35, madera: 40 }, tiempo: 13,
      vida: 45, ataque: 6, armadura: 0, alcance: 5, cadencia: 1.5,
      velocidad: 1.2, vision: 7, distancia: true, proyectil: 'flecha', contraEdificios: 0.3,
    },
    caballero: {
      nombre: 'Caballero', epoca: 2, edificio: 'cuartel', tecla: 'f',
      coste: { comida: 70, oro: 60 }, tiempo: 16,
      vida: 160, ataque: 14, armadura: 3, alcance: 0.6, cadencia: 1.3,
      velocidad: 1.7, vision: 7, bonus: 8,
    },
    ballestero: {
      nombre: 'Ballestero', epoca: 2, edificio: 'cuartel', tecla: 'n',
      coste: { comida: 40, madera: 30, oro: 35 }, tiempo: 15,
      vida: 60, ataque: 11, armadura: 1, alcance: 5.5, cadencia: 2.0,
      velocidad: 1.1, vision: 7, distancia: true, proyectil: 'virote', contraEdificios: 0.4,
    },
    // Sacerdote: no ataca. Cura a tus unidades heridas y convierte unidades enemigas.
    // curacion = vida que devuelve por segundo; conversion = segundos que tarda en convertir;
    // recargaFe = segundos que necesita para poder volver a convertir.
    sacerdote: {
      nombre: 'Sacerdote', epoca: 1, edificio: 'templo', tecla: 'o',
      coste: { comida: 50, oro: 60 }, tiempo: 15,
      vida: 40, ataque: 0, armadura: 0, alcance: 5, cadencia: 1,
      velocidad: 1.0, vision: 7, sacerdote: true,
      curacion: 3, alcanceCura: 4, conversion: 4, recargaFe: 20,
    },
    // Asedio. soloEdificios = solo puede atacar edificios.
    // armaduraDistancia = armadura extra contra flechas, piedras y virotes.
    // alcanceMin = no puede disparar a lo que esté más cerca; area = radio del impacto (daño a la mitad alrededor).
    ariete: {
      nombre: 'Ariete', epoca: 2, edificio: 'taller', tecla: 'y',
      coste: { madera: 120, oro: 60 }, tiempo: 20,
      vida: 260, ataque: 45, armadura: 2, alcance: 0.6, cadencia: 2.5,
      velocidad: 0.8, vision: 5, asedio: true, soloEdificios: true, armaduraDistancia: 8,
    },
    catapulta: {
      nombre: 'Catapulta', epoca: 2, edificio: 'taller', tecla: 'm',
      coste: { madera: 150, oro: 100 }, tiempo: 25,
      vida: 120, ataque: 30, armadura: 0, alcance: 8, alcanceMin: 2.5, cadencia: 5,
      velocidad: 0.7, vision: 9, asedio: true, distancia: true, proyectil: 'bola', area: 1.3,
    },
  },

  // Edificios. tam = lado en casillas. poblacion = cuánta población da.
  // almacen = true si los aldeanos pueden dejar recursos ahí.
  edificios: {
    centro: {
      nombre: 'Centro urbano', epoca: 0, tam: 3,
      coste: { madera: 300, piedra: 150 }, tiempo: 60,
      vida: 1500, armadura: 2, poblacion: 5, almacen: true, vision: 6,
      entrena: ['aldeano'], avanzaEpoca: true,
      // Refugio: hasta 10 aldeanos se esconden dentro y el centro dispara flechas.
      // Daño de cada flecha = ataqueRefugio + 1 por cada 2 aldeanos dentro.
      refugio: 10, ataqueRefugio: 3, alcanceRefugio: 6, cadenciaRefugio: 2,
    },
    casa: {
      nombre: 'Casa', epoca: 0, tam: 2,
      coste: { madera: 30 }, tiempo: 15,
      vida: 300, armadura: 0, poblacion: 5,
    },
    almacen: {
      nombre: 'Almacén', epoca: 0, tam: 2,
      coste: { madera: 60 }, tiempo: 20,
      vida: 400, armadura: 0, almacen: true,
    },
    // Granja: comida que no se agota. Un aldeano la cultiva como si fuera un arbusto.
    granja: {
      nombre: 'Granja', epoca: 0, tam: 2,
      coste: { madera: 60 }, tiempo: 15,
      vida: 200, armadura: 0, cultivo: true, segundosPorUnidad: 2.0,
    },
    cuartel: {
      nombre: 'Cuartel', epoca: 0, tam: 3,
      coste: { madera: 120 }, tiempo: 30,
      vida: 800, armadura: 1,
      entrena: ['garrotero', 'hondero', 'hoplita', 'arquero', 'caballero', 'ballestero'],
    },
    torre: {
      nombre: 'Torre de vigía', epoca: 1, tam: 1,
      coste: { madera: 50, piedra: 100 }, tiempo: 30,
      vida: 600, armadura: 2,
      ataque: 7, alcance: 6, cadencia: 2, vision: 7,
    },
    templo: {
      nombre: 'Templo', epoca: 1, tam: 2,
      coste: { madera: 120, piedra: 60 }, tiempo: 35,
      vida: 600, armadura: 1,
      entrena: ['sacerdote'],
    },
    taller: {
      nombre: 'Taller de asedio', epoca: 2, tam: 3,
      coste: { madera: 200, oro: 100 }, tiempo: 40,
      vida: 700, armadura: 1,
      entrena: ['ariete', 'catapulta'],
    },
    // ---- Murallas, puertas y puentes. Se colocan por tramos de 1 casilla.
    //  linea = se dibujan con dos clics (inicio y final); 'recta' = solo en línea recta.
    //  muro = cierra el paso; los soldados enemigos solo la atacan si les bloquea el camino.
    //  noCuenta = no hace falta destruirlo para ganar la partida.
    muralla: {
      nombre: 'Muralla', epoca: 1, tam: 1, tecla: 'm', linea: 'libre',
      coste: { piedra: 6 }, tiempo: 5,
      vida: 600, armadura: 4, vision: 1.5, muro: true, noCuenta: true,
    },
    puerta: {
      nombre: 'Puerta', epoca: 1, tam: 1, tecla: 'n',
      coste: { piedra: 20, madera: 10 }, tiempo: 12,
      vida: 800, armadura: 4, vision: 2, muro: true, puerta: true, noCuenta: true,
    },
    // El puente se construye sobre el agua (no en los vados), empezando por una orilla.
    puente: {
      nombre: 'Puente', epoca: 0, tam: 1, tecla: 'y', linea: 'recta',
      coste: { madera: 25 }, tiempo: 8,
      vida: 400, armadura: 2, vision: 2, puente: true, noCuenta: true,
    },
  },

  // Comportamiento de la IA rival.
  //  primerAtaque / entreOleadas = segundos; tamOleada = soldados del primer ataque (y crecimientoOleada más en cada uno)
  //  aldeanosMax = aldeanos que llega a tener; cuarteles = cuántos cuarteles construye desde la Antigüedad
  //  recoleccion = velocidad a la que recogen sus aldeanos (1 = igual que tú; 1.2 = un 20 % más rápido)
  //  puentes = tiende un puente si el río le obliga a dar mucho rodeo para llegar a ti
  //  murallas = amuralla su base (desde la Antigüedad) con una puerta en cada lado;
  //  radioMuralla = a cuántas casillas del centro urbano va el muro; obrerosMuralla = aldeanos que lo hacen
  ia: {
    facil:  { primerAtaque: 420, entreOleadas: 150, tamOleada: 4, crecimientoOleada: 1, aldeanosMax: 12, cuarteles: 1, recoleccion: 0.8,
              puentes: false, murallas: false },
    normal: { primerAtaque: 360, entreOleadas: 120, tamOleada: 6, crecimientoOleada: 2, aldeanosMax: 16, cuarteles: 1, recoleccion: 1,
              puentes: true, murallas: true, radioMuralla: 8, obrerosMuralla: 2 },
    dificil:{ primerAtaque: 400, entreOleadas: 100, tamOleada: 8, crecimientoOleada: 2, aldeanosMax: 24, cuarteles: 2, recoleccion: 1.3,
              puentes: true, murallas: true, radioMuralla: 9, obrerosMuralla: 3 },
  },

  // Colores de cada jugador (0 = tú, 1 = IA).
  jugadores: [
    { nombre: 'Tú',  color: '#2f6fdf' },
    { nombre: 'IA',  color: '#d23a2f' },
  ],
};
