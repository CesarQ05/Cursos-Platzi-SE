//Capacidades de las funnciones

/*//1. Pasar funciones como argumentos
function a (){}
function b (a){}
b(a)

//retornar funciones
function a () {
    function b () {}
    return b
}

//asignar funciones a variables 
const a = function () {}

//tener propiedades y metodos
function a () {}
const obj = {}
a.call(obj)

//añadir funcviones
function a () {
    function b () {
        function c () {
    }
    c()
 }
 b()
}
a()
*/
//es posible almacenar funciones en objetos
const rocket = {
    name: "falcon 9",
    launchMessage: function launchMessage () {
        console.log("💥")
    }
}
rocket.launchMessage()