function calculatedesc (price, desuentoporcentaje) {
    const discount = (price, desuentoporcentaje) / 100
    const preciodescontado = price -discount

    return preciodescontado
}

const originalprecio = 100
const desuentoporcentaje = 20
const finalPrecio = calculatedesc(originalprecio ,desuentoporcentaje)

console.log('Precio original: $' + originalprecio)
console.log('Descuento: $' + desuentoporcentaje)
console.log('Precio con descuento: $' + finalPrecio)