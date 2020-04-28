let valor // não inicializada
console.log(valor) //undefined

valor = null //não aponta pra nenhum endereço de memoria.
console.log(valor) //null
//console.log(valor.toString()) //ERRO!!


const produto = {}
console.log(produto.preco) // undefined
//console.log(produto.preco.a) //ERRO

produto.preco = 3.50
console.log(produto)
