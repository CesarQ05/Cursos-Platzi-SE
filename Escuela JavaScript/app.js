/*
promise()

estados:
pending
fullfiled
rejected

callbacks;
resolve
reject

then()
catch()

*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operatinsas = true
        if(operatinsas){
            resolve("La operacion fue exitosa")
        }else {
            reject("Operacion fallida")
        }
    }, 2000)
})

promise
.then((succesMesage) => {
    console.log(succesMesage)
})
.catch((errorMesaje) => {
    console.log(errorMesaje)
})