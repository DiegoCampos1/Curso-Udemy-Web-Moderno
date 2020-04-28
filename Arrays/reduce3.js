const alunos = [
  {nome:'João', nota: 7.3, bolsista: false},
  {nome:'Maria', nota: 9.2, bolsista: true},
  {nome:'Pedro', nota: 9.8, bolsista: false},
  {nome:'Ana', nota: 8.7, bolsista: true}
]


// Desafio1: Todos sao bolsistas?
// Minha resolução
const resultado = alunos.map(a => a.boslsista).reduce(function (acumulador, atual){
  if (acumulador === true && atual === true){
    return true
  } else {
    return false
  }
})
console.log(resultado)

// Resolução do professor


// const todosBolsistas = (resultado, bolsista) => resultado && bolsista
// console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

// Desafio2: Algum aluno é bolsista

// Minha resolução
const resultado2 = alunos.map(a => a.boslsista).reduce(function (acumulador, atual){
  if (acumulador === true || atual === true){
    return true
  } else {
    return false
  }
})
console.log(resultado2)

// resolução do professor

// const algumBolsita = (resultado, bolsista) => resultado || bolsista
// console.log(alunos.map(a=>a.bolsista).reduce(algumBolsistas))