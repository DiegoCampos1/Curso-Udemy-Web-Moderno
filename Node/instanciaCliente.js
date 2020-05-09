const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova")() // é preciso invoncar a função
const contadorD = require("./instanciaNova")() // é preciso invoncar a função

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // Faz cache e muda o valor

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // Nesse caso nao muda pois usa uma função, 

