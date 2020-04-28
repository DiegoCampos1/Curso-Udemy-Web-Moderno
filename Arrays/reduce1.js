const alunos = [
  {nome:'João', nota: 7.3, boslsista: false},
  {nome:'Maria', nota: 9.2, boslsista: true},
  {nome:'Pedro', nota: 9.8, boslsista: false},
  {nome:'Ana', nota: 8.7, boslsista: true}
]

const resultado = alunos.map(a =>a.nota).reduce(function(acumulador, atual){ // O map tranforma um novo array apenas com a nota, o reduce vai somar todas as notas
  console.log(acumulador, atual)
  return acumulador + atual
},0) // CASO QUEIRA PASSAR UM VALOR INICIAL, NESSE CASO 0

console.log(resultado)