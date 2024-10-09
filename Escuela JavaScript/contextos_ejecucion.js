const productname = "Smarthphone"
const price = 499
const brand = "Techno"

function getProduct () {
    const productname = "laptop"
    const price = 899

    return `The ${productname} costs $${price} and is from the brnad ${brand}`
}

console.log(getProduct())
console.log(`The ${productname} costs $${price} and is from the brnad ${brand}`)

const userPoints = 150
function checkk () {
    if (userPoints < 100) {
        const message = "Acceso denegado: puntos insuficientes"
        return message
    } else {
        const message = "Acceso consedido: cuentas con puntos ficientes"
        return message
    }
}
console.log(checkk())

const varglobal = ":)"

function localOne() {
    console.log("Global 1: ", varglobal)
    //console.log("Local 1: ", localvariable)

    function localtwo() {
        const carrot = ";)"
        console.log("Local 2: ", carrot)
    }

    function localthree() {
        console.log("Local 3: ", carrot)
    }

    //localtwo ()
    //localthree ()
}
console.log(localOne())