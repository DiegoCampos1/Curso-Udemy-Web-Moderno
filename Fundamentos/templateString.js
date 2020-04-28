const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'

const template = `Olá ${nome}!`

console.log(concatenacao)
console.log(template)

// expressões
console.log(`1+1 = ${1+1}`)

// Template pode chamar função dentro dela.
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
