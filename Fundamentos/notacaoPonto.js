console.log(Math.ceil(6.1)) //Arredonda para cima

const obj1 = {}
obj1.nome = "Bola"
//obj1.['nome'] = "Bola" Outra forma de criar
console.log(obj1.nome)

function Obj (nome) {
  this.nome = nome //torna publica, fica visivel para fora da função
}

const obj2 = new Obj ('bruxão')
console.log(obj2.nome)
console.log(obj2)
