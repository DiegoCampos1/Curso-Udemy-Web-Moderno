// Somar todos os elementos de um array usando reduce
const array = [ 2, 2, 3, 4, 5, 6 ];

const resultado = array.reduce(function (acumulador, atual) {
  return acumulador + atual
})

console.log(resultado)