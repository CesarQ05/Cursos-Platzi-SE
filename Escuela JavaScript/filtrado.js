//filtrer
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evennumers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evennumers)

//reducer

const numers = [1, 2, 3, 4, 5, 6]
const sm = numers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numers)
console.log(sm)

//reduce cas 2
const works = ["manzana", "pera", "naranja", "naranja", "tu", "tu", "naranja"]

const wordf = works.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue]++
    }else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordf)