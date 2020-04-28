const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir (nome, indice) {
  console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Pra cada elemente que ele encontrar dentro do array ele vai chamar de volta a função. Pra cada elemento encontrado
fabricantes.forEach(function(fabricante){ // o evento é um loop de encontrar um elemento, chama o call back passando o elemento e o indice
  console.log(fabricante)
})
