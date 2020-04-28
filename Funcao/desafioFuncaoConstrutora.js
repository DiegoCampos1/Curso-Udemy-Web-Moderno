// class Pessoa {
//   constructor(nome) {
//     this.nome = nome
//   }
//   falar () {
//     console.log(`Meu nome é ${this.nome}`)
//   }
// }
// const p1 = new Pessoa('João')
// p1.falar()

function pessoa (nome) {
  this.nome = nome
  return console.log(`Meu nome é ${this.nome}`)
}

pessoa('Jõao')
