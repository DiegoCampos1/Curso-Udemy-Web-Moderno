const pilotos = ['Vettel', "Alonso", "Raikonen", 'Massa'] // o conteudo é passivel de modar o conteudo
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na ultima posição
console.log(pilotos)

pilotos.shift() // Remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

// Splice pode adicionar e remover

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir da posição 2
console.log(pilotos)

//remover
pilotos.splice(3, 1) // A partir do indice 3 exclua 1
console.log(pilotos)

//Slice retorna um novo array

const algunsPilotos = pilotos.slice(2) // novo array gerado a partir do indice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) //Primeiro elemento indica do indice, ate o indice 4 (O 4 n entra)
console.log(algunsPilotos2)