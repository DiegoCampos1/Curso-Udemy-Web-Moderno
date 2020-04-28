Array.prototype.map2 = function (callback) { // fazendo a funçao map implementada, apenas pra entender o funcionamento interno do map
  const newArray = []
  for (let i = 0; i< this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'  
]
// queremos um novo array apenas com o preço de cada item pelo metodo map
// precisaremos usar dois maps o JSON.parse para transformar em objeto, e no segundo map para retornar os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
