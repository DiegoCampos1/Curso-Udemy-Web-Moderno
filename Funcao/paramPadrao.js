// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) //Nao funciona pois 0 retorna falsa, o que faz a variavel assumir o valor de 1 conforme linhas 3,4 e 5

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a,b,c) {
  a = a !== undefined ? a:1 // a = a se o valor for diferente de undefined. Se a = undefined, a = 1
  b = 1 in arguments ? b:1 //Dentro de arguments existe o valor de indice 1? se existe assuma esse valor, se não assuma 1
  c = isNaN(c) ? 1 : c // C é um number? se for assuma o valor, se não assuma 1 - Metodo mais seguro
  return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do es2015
function soma3( a = 1, b = 1, c =1) {
  return a + b + c
  }

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))