function criarProduto (nome, valor) {
  return {
    nome: nome, // poderia ser apenas nome,
    valor: valor, // poderia ser apenas valor,
    desconto: 0.1
  }
}

const prodA = criarProduto('Celular', 600)

console.log(prodA)