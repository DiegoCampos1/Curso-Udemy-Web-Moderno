// Coleçao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira' // usar dessa forma para depois acessar com ponto 
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco;
delete produto['marca do produto']
console.log(produto)

const carro ={
  modelo: 'Palio',
  valor: 15000,
  proprietario: {
    nome:'diego',
    idade: 31,
    endereco: {
      logradouro: 'Rua Abc',
      numero: 123
    }
  },
  condutores: [{
    nome:'Josi',
    idade: 24
  }, {
    nome:'Fantasma',
    idade:42
  }],
  calcularValorSeguro: function(a) {
    console.log(a)
  }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av 132'

console.log(carro)

carro.calcularValorSeguro(carro.proprietario.endereco.numero)
console.log(carro.condutores.length)