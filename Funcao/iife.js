// funçao auto invocada. Bom para usar no browser fugindo do escopo global
// IIFE - Immediately invoked Function Expression
(function(){
  console.log('Será executado na hora')
  console.log('Foge do escopo mais abrangente')
})() // colocar a função entre parentese e depois já invocar atraves do '()'. Todas const e etc estara disponivel e manipulada apenas dentro da função
