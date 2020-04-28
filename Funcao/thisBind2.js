// function pessoa () {
//   this.idade = 0

//   setInterval (function (){
//     this.idade ++
//     console.log(this.idade)
//   }.bind(this), 1000) // representa a cada 1 segundo essa funcao vai ser disparada -- Mo set intervalo sao dois parametros, um é a função o outro é o tempo de intervalo em mili segundo
// }

// new pessoa

function pessoa () {
  this.idade = 0
  const self = this // Nao importante quem chame o this nao muda
  setInterval (function (){
    self.idade ++
    console.log(self.idade)
  }/*.bind(this)*/, 1000) // representa a cada 1 segundo essa funcao vai ser disparada -- Mo set intervalo sao dois parametros, um é a função o outro é o tempo de intervalo em mili segundo
}

new pessoa