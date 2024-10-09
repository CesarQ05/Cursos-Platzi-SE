// copiar array
const oarray = [1, 2, 3, 4, 5]
const copyarray = [...oarray]

console.log(oarray)
console.log(copyarray)

// combinar array
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combiarray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combiarray)

//array adicionales
const basearray = [1, 2, 3]
const additioniarray = [...basearray, 4, 5, 6]

console.log(basearray)
console.log(additioniarray)

// pasar elementos a la funcion
function sum (a, b, c) {
    return a + b + c
}
const n = [1, 2, 3, 4]
const r = sum(...n)

console.log(r)
