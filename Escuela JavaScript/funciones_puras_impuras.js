//funciones puras


/* 
SIDE EFFECTS - EFECTOS SECUNDARIOS
1. Modificar variables globales
2. modificar parametros
3. solicitud http
4. imprimir mensajes de pantalla en cosnola
5. manipulacion de DOM
6. Obtener hora actual 
*/
function suma (a, b){
    return a + b
}

//funciones impuras

function suma (a, b){
    console.log("A: ", a)
    return a + b
}

let total = 0
//funciones impuras
function sumWithEffect (a) {
    total += a
    return total
}

//funciones puras
function square(x){
    return x * x
}
//funciones puras
function addTen(y){
    return y + 10
}

const number = 4
const finalresult = addTen(square(number))
console.log(finalresult)