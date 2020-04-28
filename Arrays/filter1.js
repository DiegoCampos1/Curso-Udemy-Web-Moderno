// percorre o array com algum tipo de filtro. Ex: elementos maiores que x
// Olhar sempre documentação, por exemplo na developer.mozilla.org ou w3
const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad pro', preco: 4199, fragil: true},
  {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true}
]

console.log(produtos.filter(function(p){ // Filter tem uma função callback, que é cada um dos elementos do array
 return p.preco > 2500 // retornado verdadeiro o elemnto entra no resultado, false está fora.
}))
console.log(produtos.filter(function(p){ 
 return p.preco > 15 
}))
// retornando apenas frageis e acima de 500 reais
console.log(produtos.filter(function(p){ // Forma que eu fiz na pausa do professor.
 if(p.preco > 500 && p.fragil === true){
   return true
 } else {
   return false
 }
}))

// Forma que o professor resolveu com o filter encadiados.

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // nao precisa fazer comparação, fragil já é true or false

console.log(produtos.filter(caro).filter(fragil))