// this na funcao arrow é fixo.
function pessoa () {
  this.idade = 0
  setInterval (() => { // com o arrow o this fica fixo onde foi declarado
    this.idade++
    console.log(this.idade)
  }, 1000) // representa a cada 1 segundo essa funcao vai ser disparada -- Mo set intervalo sao dois parametros, um é a função o outro é o tempo de intervalo em mili segundo
}

new pessoa