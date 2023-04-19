
// Si no lo exportamos esta función derá privada en este archivo
/*
const fs = require('fs');
const crearArchivo = (base = 5) => {
    
console.log('=========================')
console.log(`     TABLA DEL ${base}   `)
console.log('=========================')

    let salida = '';

    for(let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base*i}\n`
    }
    console.log(salida)


fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log(`tabla-${base}.txt creado`)

}

module.exports = {crearArchivo}
*/



//ESTO TRANSFORMADO A UNA PROMESA
/*
const fs = require('fs');
const crearArchivo = (base = 5) => {

    return new Promise((resolve,reject) => {
        
    console.log('=========================')
    console.log(`     TABLA DEL ${base}   `)
    console.log('=========================')

    let salida = '';

    for(let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base*i}\n`
    }
    console.log(salida)


    fs.writeFileSync(`tabla-${base}.txt`, salida);

    resolve(`tabla-${base}.txt`)
    
})
}
module.exports = {crearArchivo}
*/


//OTRA FORMA DE CONVERTIRLO A UNA PROMESA MEJOR TODAVÍA
//el async por defecto devuelve una promesa

const fs = require('fs');
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida  = '';
        let consola = '';
        if (hasta){
            for(let i = 1; i <= hasta; i++) {
             salida += `${base } x ${ i} = ${ base*i}\n`
             consola += `${base } ${ 'x'.yellow} ${ i} ${ '='.red} ${ base*i}\n`
             }
        }
        if(listar) {
            console.log('========================='.red)
            console.log(    'TABLA DEL '.green + `${ base}`.yellow)
            console.log('========================='.red)
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return(`tabla-${base}.txt`)
        
    } catch(error){
        throw error;
    }


}

module.exports = {crearArchivo}