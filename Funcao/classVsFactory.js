class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar () {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => { // Usar dessa forma pois funciona no DOM, sempre aponta para a variavel certa.
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = criarPessoa('João')
p2.falar()