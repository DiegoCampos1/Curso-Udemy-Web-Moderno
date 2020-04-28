const obj = {a: 1, b: 2, c: 3, soma (){ return a + b + c}}
console.log(JSON.stringify(obj))
// Veja que a função foi excluida, é um formato texto.

console.log(JSON.parse('{"a":1, "b": 2, "c": 3}')) //Em JSON sempre aspas duplas para todos atributos
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // Também podemos inserir objetos e strings no JSON, strings também usa aspas duplas

// json validador .. json.lint.com