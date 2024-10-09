//mapp
const numbers= [1, 2, 3, 4, 5, 6]
const nnumber = numbers.map(num => num *num)

console.log(numbers)
console.log(nnumber)

//foreach
const colors= ["rojo", "azul", "verde"]
const icolors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(icolors)


//ejercicio

const tfareheit = [31, 66, 88, 90, 77]
const tcelsius = tfareheit.map(fahrenheit =>(5/9) * (fahrenheit -32))

console.log("Temperatura en fahrenheit: ",tfareheit)
console.log("Temperatura en celsius ",tcelsius)

//ejercicio 2

const newnumbers= [1, 2, 3, 4, 5, 6, 7]

let sumas = 0
newnumbers.forEach(number => {
    sumas += number
})

console.log("todos los arrays: ",newnumbers)
console.log("Suma de arrays:",sumas)