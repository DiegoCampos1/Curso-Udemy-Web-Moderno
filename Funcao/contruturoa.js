function carro (VelocidadeMaxima = 200, delta = 5){
  //atributo privado
  let velocidadeAtual = 0

  // metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= VelocidadeMaxima){
      velocidadeAtual += delta
    } else {
      velocidadeAtual = VelocidadeMaxima
    }

  }

  // metodo público
  this.getVelocidadeAtual = function (){
    return velocidadeAtual
  }
}

const uno = new carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())