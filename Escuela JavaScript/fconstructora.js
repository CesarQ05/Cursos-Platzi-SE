function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

const persona1 = new Persona("Mario", "Perez", 25);

console.log(persona1);

const persona2 = new Persona("Diego", "Lopez", 35);

console.log(persona2);

Persona.prototype.telefono = "222-555-2322";

persona1.nacionalidad = "Canadiense";

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  };
  
  persona1.saludar();
  persona2.saludar();