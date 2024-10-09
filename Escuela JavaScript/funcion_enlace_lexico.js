const greeting = function (name) {
    return `hi, ${name}`
}

const newgreeting = (name) => {
    return `hi, ${name}`
}

const newgreetingImplicit = name => `hi, ${name}`
const newgreetingImplicittwo = (name, lastname) => `hi, Isoy ${name} ${lastname}`

//lexical bedind

const fictionalcaracter = {
    name: "uncle ben",
    messageWithTraditional: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageTraditional: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalcaracter.messageWithTraditional("Un gran poder, consede una gran resonsabilidad")
fictionalcaracter.messageTraditional("Cuidado con el c¿doctor optupues")