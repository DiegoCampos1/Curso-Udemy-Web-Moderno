// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereço: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade } = pessoa //  Tira do objeto as chaves e cria variaveis com o key
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Tira do objeto as chaves nome e i e guarde nas seguintes variaveis
console.log(n, i)

const { endereço: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)