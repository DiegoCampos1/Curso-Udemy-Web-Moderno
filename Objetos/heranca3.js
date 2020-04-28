function Aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123) // Usando o operador New, mas o prototipo aponta pra Aula.prototype
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)