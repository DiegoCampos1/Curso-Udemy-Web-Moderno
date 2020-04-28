// Array é um objeto
let aprovados = new Array ('Bia', 'Carlos', 'Ana') // Não se recomenda dessa forma
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Array indexados a partir do 0

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados)
console.log(aprovados.length)

aprovados.sort() // Ordena o array
console.log(aprovados)

delete aprovados[1] // exclui e coloca undefined
console.log(aprovados)

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = [ 'Bia', 'Carlos', 'Ana' ]
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // O splice tanto add, como remove, e os dois ao mesmo tempo, o 1 elemento indica a partir de qual indice que voce quer trabalhar, e o segundo qtde de elementos. E depois entre aspas o que voce quer adicionar.
console.log(aprovados)