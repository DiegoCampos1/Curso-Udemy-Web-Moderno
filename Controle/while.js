// focado em repatição de quantidade inderteminada de vezes

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

// No while, a expressão retorna True or false, enquanto for True executa o codigo

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}`)
}

console.log("Até mais")