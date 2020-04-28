// usando a forma literal 
const obj1 = {};

// Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

//Funçao construtura
function Produto(nome, preco, desconto){
  this.nome = nome; // pode alterar fora da função, o this o torna público
  this.getPreco = () => {
    return preco * (1 - desconto)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.88, 0.25)
console.log(p1.getPreco(), p2.getPreco())

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
