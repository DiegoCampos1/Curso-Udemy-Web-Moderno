const valor = 'Global'

function minhaFuncao () {
  console.log(valor)
}

function exec() {
  const valor = 'Local'
  minhaFuncao ()
}

exec() // Acha o valor global, a funçao quando declarada em JS ela tbm tem consciencia do local que ela foi definida, ela carrega consigo o contexto no qual ela foi declarada. Mesmo chamando ela em outro local, ou sendo passada como parametro, ela sempre carrega consigo o seu contexto.