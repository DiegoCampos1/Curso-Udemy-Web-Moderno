const a = 1
const b = 2
const c = 3

const onj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c} // Quando não se quer mudar o nome do atributo, pode usar dessa forma
console.log(obj1)
console.log(obj2)

const nome = 'nota'
const valor = 7.87

const obj3 = {}
obj3[nome] = valor
console.log(obj3)

const obj4 = {[nome]: valor}
console.log(obj4)


const obj5 = {
  funcao1: function (){
    // ...
  },
  funcao2() { // forma mais curto de declarar função em objeto
    // ...
  }
}