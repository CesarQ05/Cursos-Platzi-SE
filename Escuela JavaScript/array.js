//new array
const frutas = Array("Naranja", "banana", "papaya")
console.log(frutas)

const just = Array(12)
console.log(just)

const numero = Array(1, 2, 3, 4, 5)
console.log(numero)

//sixtais literal
const ononume = [4]
console.log(ononume)

const nume = []
console.log(nume)

const dep = ["futbol", "tennis", "baseball"]
console.log(dep)

const ingredients = [
    "harina", 
    true,
    2, 
    {
        ingre : "leche", quantity: "1 copa"
    }, 
    false
]
console.log(ingredients)

//acceso a elementos
const primeraf = frutas[0]
console.log(primeraf)

//largo de la varbale
const nfrutras = frutas.length
console.log(nfrutras)

//mutabilidad
frutas.push("melon")
console.log(frutas)

const nuevasf = frutas.concat(["uva", "kiwi"])
console.log(frutas)
console.log(nuevasf)

//verificar array
const isArray = Array.isArray(frutas)
console.log(isArray)

//practica
const numersb = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numersb.length; i++){
    sum += numersb[i]
}
console.log(sum)