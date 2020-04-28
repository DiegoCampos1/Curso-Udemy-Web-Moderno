//Object,preventExtensions Não consegue add novos atributos aos objetos
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // Pode excluir, pode alterar, mas não pode adicionar

// Object.seal
const pessoa = { nome: 'Juliana', idade:35}
// Não consegue adicionar, nao consegue excluir atributoa, mas consegue modificar valores
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa) // consegue alterar, não add ou remover


// Object.freeze = selado + valores constantes.