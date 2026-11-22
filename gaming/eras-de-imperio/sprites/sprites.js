// =====================================================================
//  SPRITES (imágenes)
//  Si el archivo existe, el juego lo usa; si no, dibuja la forma simple.
//  Así que basta con guardar la imagen en la carpeta con el nombre exacto
//  y recargar con F5 (arrancando el juego con iniciar.bat).
//
//  El juego quita solo el fondo de color liso (por ejemplo magenta) y
//  recorta los márgenes vacíos. Si una imagen ya tiene fondo transparente,
//  también vale.
//
//  src         = archivo de la imagen
//  ancho       = ancho en pantalla en píxeles (el alto se calcula solo)
//  ancla       = punto de la imagen que se apoya en el suelo:
//                [0.5, 1] = centro de abajo del todo (la esquina delantera del edificio)
//  tolerancia  = cuánto se parece un color al fondo para borrarlo (120 por defecto;
//                súbelo si queda un borde de color, bájalo si se borra parte del edificio)
//  quitarFondo = false para no tocar el fondo
//
//  Claves de edificios: tipo_época (0 = Piedra, 1 = Antigüedad, 2 = Media).
//  Si solo existe una de las épocas, pon la misma imagen en las otras.
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

EI.SPRITES = {
  // ---- Edificios (3 casillas = 186 px de ancho, 2 casillas = 122 px, 1 casilla = 58 px)
  centro_0:  { src: 'sprites/edificios/centro_piedra.png',      ancho: 186, ancla: [0.5, 1] },
  centro_1:  { src: 'sprites/edificios/centro_antiguedad.png',  ancho: 186, ancla: [0.5, 1] },
  centro_2:  { src: 'sprites/edificios/centro_media.png',       ancho: 186, ancla: [0.5, 1] },
  cuartel_0: { src: 'sprites/edificios/cuartel_piedra.png',     ancho: 186, ancla: [0.5, 1] },
  cuartel_1: { src: 'sprites/edificios/cuartel_antiguedad.png', ancho: 186, ancla: [0.5, 1] },
  cuartel_2: { src: 'sprites/edificios/cuartel_media.png',      ancho: 186, ancla: [0.5, 1] },
  casa_0:    { src: 'sprites/edificios/casa_piedra.png',        ancho: 122, ancla: [0.5, 1] },
  casa_1:    { src: 'sprites/edificios/casa_antiguedad.png',    ancho: 122, ancla: [0.5, 1] },
  casa_2:    { src: 'sprites/edificios/casa_media.png',         ancho: 122, ancla: [0.5, 1] },
  almacen_0: { src: 'sprites/edificios/almacen_piedra.png',     ancho: 122, ancla: [0.5, 1] },
  almacen_1: { src: 'sprites/edificios/almacen_antiguedad.png', ancho: 122, ancla: [0.5, 1] },
  almacen_2: { src: 'sprites/edificios/almacen_media.png',      ancho: 122, ancla: [0.5, 1] },
  granja_0:  { src: 'sprites/edificios/granja_piedra.png',      ancho: 122, ancla: [0.5, 1] },
  granja_1:  { src: 'sprites/edificios/granja_antiguedad.png',  ancho: 122, ancla: [0.5, 1] },
  granja_2:  { src: 'sprites/edificios/granja_media.png',       ancho: 122, ancla: [0.5, 1] },
  torre_1:   { src: 'sprites/edificios/torre_antiguedad.png',   ancho: 58,  ancla: [0.5, 1] },
  torre_2:   { src: 'sprites/edificios/torre_media.png',        ancho: 58,  ancla: [0.5, 1] },
  templo_1:  { src: 'sprites/edificios/templo_antiguedad.png',  ancho: 122, ancla: [0.5, 1] },
  templo_2:  { src: 'sprites/edificios/templo_media.png',       ancho: 122, ancla: [0.5, 1] },
  taller_2:  { src: 'sprites/edificios/taller_media.png',       ancho: 186, ancla: [0.5, 1] },
  // ---- Murallas, puertas y puentes (1 casilla). Si falta alguna, el juego la dibuja él.
  //      eje = hacia dónde va el muro o el tablero en TU imagen:
  //        'x' = de arriba a la izquierda hacia abajo a la derecha
  //        'y' = de abajo a la izquierda hacia arriba a la derecha
  //      (el juego le da la vuelta cuando hace falta la otra dirección)
  //      La muralla usa el tramo recto en las líneas rectas y la torre en esquinas, finales y diagonales.
  muralla_recta: { src: 'sprites/edificios/muralla_recta.png', ancho: 64, ancla: [0.5, 1], eje: 'y' },
  muralla_torre: { src: 'sprites/edificios/muralla_torre.png', ancho: 62, ancla: [0.5, 1] },
  puerta_1:  { src: 'sprites/edificios/puerta_antiguedad.png',  ancho: 66,  ancla: [0.5, 1], eje: 'x' },
  puerta_2:  { src: 'sprites/edificios/puerta_media.png',       ancho: 66,  ancla: [0.5, 1], eje: 'x' },
  puente:    { src: 'sprites/edificios/puente.png',             ancho: 66,  ancla: [0.5, 0.8], eje: 'y' },

  // ---- Unidades: de pie, mirando a la DERECHA (el juego las da la vuelta al ir a la izquierda).
  //      Lo que sea AZUL (túnica, escudo, estandarte) se pinta con el color de cada jugador.
  //      mira: 'izquierda' si tu imagen mira al otro lado; tenir: false para no cambiar colores.
  //      alto = altura en pantalla en píxeles (la anchura se calcula sola).
  aldeano:   { src: 'sprites/unidades/aldeano.png',   alto: 30, ancla: [0.5, 0.97] },
  garrotero: { src: 'sprites/unidades/garrotero.png', alto: 32, ancla: [0.5, 0.97] },
  hoplita:   { src: 'sprites/unidades/hoplita.png',   alto: 34, ancla: [0.5, 0.97] },
  caballero: { src: 'sprites/unidades/caballero.png', alto: 42, ancla: [0.5, 0.97] },
  hondero:   { src: 'sprites/unidades/hondero.png',   alto: 30, ancla: [0.5, 0.97] },
  arquero:   { src: 'sprites/unidades/arquero.png',   alto: 31, ancla: [0.5, 0.97] },
  ballestero:{ src: 'sprites/unidades/ballestero.png',alto: 32, ancla: [0.5, 0.97] },
  sacerdote: { src: 'sprites/unidades/sacerdote.png', alto: 31, ancla: [0.5, 0.97] },
  ariete:    { src: 'sprites/unidades/ariete.png',    alto: 36, ancla: [0.5, 0.95] },
  catapulta: { src: 'sprites/unidades/catapulta.png', alto: 38, ancla: [0.5, 0.95] },

  // ---- Recursos: cada uno ocupa 1 casilla. Hay dos árboles distintos para que el
  //      bosque no se vea repetido (el juego alterna entre ellos y varía su altura).
  arbol_0:   { src: 'sprites/recursos/pino.png',     alto: 64, ancla: [0.5, 1] },
  arbol_2:   { src: 'sprites/recursos/pino.png',     alto: 64, ancla: [0.5, 1] },
  arbol_1:   { src: 'sprites/recursos/roble.png',    alto: 58, ancla: [0.5, 1] },
  arbol_3:   { src: 'sprites/recursos/roble.png',    alto: 58, ancla: [0.5, 1] },
  arbusto:   { src: 'sprites/recursos/arbusto.png',  ancho: 46, ancla: [0.5, 1] },
  piedra:    { src: 'sprites/recursos/piedra.png',   ancho: 54, ancla: [0.5, 1] },
  oro:       { src: 'sprites/recursos/oro.png',      ancho: 54, ancla: [0.5, 1] },

  // ---- Montañas: una por casilla de montaña; la base en rombo encaja en la casilla
  //      (el juego las alterna y varía un poco su tamaño para que la cordillera no se repita).
  //      (ancho = el máximo que llegan a medir; se guardan con el doble de detalle para el zoom)
  montana_0: { src: 'sprites/recursos/montana1.png', ancho: 150 },
  montana_1: { src: 'sprites/recursos/montana2.png', ancho: 150 },
  montana_2: { src: 'sprites/recursos/montana3.png', ancho: 150 },
  montana_3: { src: 'sprites/recursos/montana4.png', ancho: 150 },
};
