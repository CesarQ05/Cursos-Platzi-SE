class Persona{
    constructor(nombre,edad){
    this.nombre=nombre;this.edad=edad
   }
}
const persona1=new Persona("Cesar", 20)
console.log(persona1)
persona1.nuevoMetodo=function(){
    console.log(`Mi nombre es ${this.nombre}`)
}