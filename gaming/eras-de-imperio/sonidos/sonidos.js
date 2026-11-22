// =====================================================================
//  SONIDOS DESDE ARCHIVO — de momento vacío: el juego fabrica todos los
//  sonidos con el sintetizador del navegador.
//  Si quieres usar grabaciones (MP3, OGG o WAV), guárdalas en esta carpeta
//  y quita las // de la línea. Puedes poner varias para un mismo sonido:
//  el juego elegirá una al azar cada vez, para que no suene repetido.
//  Solo funciona arrancando el juego con iniciar.bat.
//
//  Nombres de sonido:
//   golpe (golpe de maza/puño), metal (golpe de lanza/espada), talar, picar
//   (piedra y oro), cosecha (bayas y granja), martillo (construir), flecha,
//   muerte, destruido (cae un edificio), seleccion, orden, boton, aviso,
//   ataque (cuerno: te atacan), entrenado, construido, epoca (fanfarria),
//   victoria, derrota, honda, ballesta, impacto (flecha que acierta), ariete,
//   catapulta, explosion, cura, rezo (empieza a convertir), convertido,
//   refugio (un aldeano entra en el centro), musica (se repite en bucle)
// =====================================================================
var EI = globalThis.EI = globalThis.EI || {};

EI.SONIDOS = {
  // golpe:   ['sonidos/golpe1.mp3', 'sonidos/golpe2.mp3'],
  // talar:   ['sonidos/talar1.mp3', 'sonidos/talar2.mp3'],
  // epoca:   'sonidos/fanfarria.mp3',
  // musica:  'sonidos/musica.mp3',
};
