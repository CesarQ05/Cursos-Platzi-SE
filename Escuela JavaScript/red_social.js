/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
  ];
  
  const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encanta Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta más el café que el té",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];
  
  const username = "andres"; // Cambiado para probar   
  const password = "123";    // Cambiado para probar
  
  function usuarioExistente(username, password) {
    for (let i = 0; i < usersDatabase.length; i++) {
      if (
        usersDatabase[i].username === username &&
        usersDatabase[i].password === password
      ) {
        return true;
      }
    }
    return false;
  }
  
  function signIn(username, password) {
    if (usuarioExistente(username, password)) {
      console.log(`Bienvenido a tu cuenta, ${username}`);
      console.log(usersTimeline);
    } else {
      console.log("Uuups, usuario o contraseña incorrectos!");
    }
  }
  
  signIn(username, password);
