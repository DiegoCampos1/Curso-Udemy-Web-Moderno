//Navegando entre as pastas e importar
const moduloA = require('../../moduloA') // No linux é camel case, então n funciona moduloa ... CUIDADO!!
console.log(moduloA.ola) //Evitar usar o copy path.

const saudacao = require('saudacao')

console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia!')
  res.end()
}).listen(8080)

// const http = require('http')

// http.createServer((req, res) => {
//   res.write('Bom dia!')
//   res.end()
// }).listen(8080)