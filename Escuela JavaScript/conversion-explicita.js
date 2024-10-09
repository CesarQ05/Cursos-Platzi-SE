// Explicita
  const string = "42"
  const integer = parseInt(string)
  console.log(integer)
  console.log(typeof integer)


  const stringDecimal = "3.42"
  const float = parseInt(stringDecimal)
  console.log(float)
  console.log(typeof float)

  const binary = "1010"
  const decimal = parseInt(binary, 2)
  console.log(decimal)
  console.log(typeof decimal)

  //Impicita

  const sum = "5" + 3
  console.log(sum)

  const sumWithBoolean = "3" + true
  console.log(sumWithBoolean)

  const sumWithNumber = 2 + true
  console.log(sumWithNumber)

  console.log("---------------------")

  const stringValue = "10"
  const numberValue = 10
  const booleanValue = true
  console.log(stringValue + stringValue)  //concatena
  console.log(stringValue + numberValue)  //concatena
  console.log(stringValue + booleanValue) //concatena
  console.log(numberValue + stringValue)  //concatena
  console.log(numberValue + numberValue) //suma
  console.log(numberValue + booleanValue) //suma
  console.log(booleanValue + stringValue)  //concatena
  console.log(booleanValue + numberValue)  //suma
  console.log(booleanValue + booleanValue)  //suma


  console.log("---------------------")
  const numero = "596"
  const numeroConvertido = parseInt(numero)

  console.log(typeof numero)
  console.log(typeof numeroConvertido)
