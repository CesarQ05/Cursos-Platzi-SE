/* switch(expresion){
    case valor1:
    //codigo a ejecutar
    break;
    case valor2:
    //codigo a ejecutar
    break;
    case valor3:
    //codigo a ejecutar
    break;
    case valor4:
    //codigo a ejecutar
    break;
    default:
    //ejecucion de codigo defeault
}*/

let epre = "Papayas"
switch(epre){
    case "Naranjas":
    console.log("Las naranjas cuestan 10$ el ciento")
    break;
    case "Mangos":
    console.log("Los Mangos cuestan 1$ el ciento")
    break;
    case "Zandias":
    console.log("Las Zandias cuestan 15$ el ciento")
    break;
    case "Peras":
    case "Platanos":
    console.log("Las peras y los platanos valen 100$ el ciento")
    break;
    default:
        console.log(`Lo siento, no contamos con ${epre}`);
    }

    console.log("Hay algo mas que desses??")