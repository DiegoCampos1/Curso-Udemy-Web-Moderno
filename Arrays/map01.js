// Associado ao map existe um laço dentro dele para percorrer, map serve para transformar um array em outro. Tem o mesmo tamanho do original

const nums = [1, 2, 3, 4, 5] // queremos o dobro desses numeros em um novo array

//Fazendo pelo metodo tradicional
function dobro (nums) {
  let nums2 = []
  for(let i = 0; i < nums.length ; i++){
    nums2.push(nums[i]*2)
  }
  return console.log(nums2)
}
dobro(nums)

// Fazendo Map - um for com proposito
let resultado = nums.map(function(e) {
  return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // fixed pra casas decimais, replace para substituir

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)