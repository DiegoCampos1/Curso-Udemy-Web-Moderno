function soma () {
  let soma = 0
  for(i in arguments){ // argumento interno d euma função que contem todos os argumentos que foram passados
    soma += arguments[i] // te dar a possibilidade de pegar cada uma dos parametro passados
  }
  return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 2.3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a','b','c'))