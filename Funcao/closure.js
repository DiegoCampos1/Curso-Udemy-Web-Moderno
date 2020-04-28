// Ele é o escopo criado quando vc define sua função, onde ela foi declarada
// Esse escopo permite a função acessar e manipular variaveis externas à função

// contexto lexico em ação

const x = 'Global'

function fora() {
  const x = 'local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao()) // a função lembra das suas origens 