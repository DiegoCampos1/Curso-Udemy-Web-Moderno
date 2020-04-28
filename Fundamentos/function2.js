//Armazenda uma função em uma variavel

const imprimirSoma = function (a, b) {
  console.log(a+b)
}

imprimirSoma(2, 3)

//Armazendao uma funca arrow em uma variavel
const soma = (a,b) => {
  return a +b 
}
console.log(soma(2,3))

//retorno implicito
const sub = (a, b) => a - b
console.log(sub(5, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal')