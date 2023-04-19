// Es el archivo inicial, el que va a larzar el proyecto de NODE
const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado' ))
    .catch(error => console.log(error))





   
  
