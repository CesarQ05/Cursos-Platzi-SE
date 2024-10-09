function outerFuction () {
    let outervarable = "I am from other function"

    function innterfuction () {
        console.log(outervarable)
    }

    return innterfuction
}

const clousurexample = outerFuction()
clousurexample ()

function createdcont () {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}
const counterA = createdcont()
counterA()
counterA()

const counterB = createdcont()
counterB()

function outher () {
    let message = "Holaa, "

    function inner (name) {
        console.log(message + name)
    }

    return inner
}

const closA = outher()
const closB = outher()

closA("CESAR")
closB("BOB")