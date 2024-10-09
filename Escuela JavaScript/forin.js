/*
for in ---->objetos

propiedades = valor
array, string
item

for(variable in objeto) {
    codigo
}
*/

const listCompras = {
    manazana: 5,
    pera: 9,
    naranja: 2,
    uva: 4,
}

for (fruta in listCompras) {
    console.log(fruta)
}

for (fruta in listCompras) {
    console.log(`${fruta} : ${listCompras[fruta]}`)
}