//function declaration
function soma(x, y) { // permite chamar a função antes de declarar, o interpretador carrega primeiro as funçoes
  return x + y
}

// function expression
const sub = function(x,y) {
  return x - y
}

// named function expressin
const mult = function mult(x, y) { // pouco usado, mais para debug
  return x * y
}

