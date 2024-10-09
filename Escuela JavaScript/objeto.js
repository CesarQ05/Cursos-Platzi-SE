/*objeto {
    propiedad: valor, 
    propiedad: valor, 
    propiedad: valor 
    Metodos()
  }
  
  */
  
  const persona = {
    nombre: "Cesar",
    edad: 23,
    direccion: {
      calle: "Panama cocle",
      ciudad: "Cocle",
    },
    saludar() {
      console.log(`Holaaa, mi nombre es ${persona.nombre}`);
    },
  };

  console.log(persona);
  
  persona.saludar();

  
  persona.telefono = "666-555-5555";
  
  console.log(persona.telefono);
  
  persona.despedir = () => {
    console.log("Adios");
  };
  
  persona.despedir();
  
  delete persona.telefono

  delete persona.despedir