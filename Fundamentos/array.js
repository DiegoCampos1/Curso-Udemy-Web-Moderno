//Array sao heterogenos, podem ter string, numero... 
const valores = [7.7, 8.8, 6.3, 9.2]
console.log(valores[0], valores[3]) // acessando pelo indice
valores[4] = 10 //adicionando valores no array
console.log(valores[4])

console.log(valores.length) //Numeros de elementos no array

valores.push({id: 3}, false, null, 'teste') //Pode colocar no array atraves do push, e aceita objeto, booleando, null, numero, string...
console.log(valores);

console.log(valores.pop()) // Retira o ultimo elemento do array
delete valores[0] // Deleta o valor correspondente ao indice
console.log(valores);