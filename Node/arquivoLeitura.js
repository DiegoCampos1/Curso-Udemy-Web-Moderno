const fs = require('fs')

//sincrono...
const caminho = __dirname + '/arquivo.json'

//sincrono - EVITAR
const conteudo = fs.readFileSync(caminho, 'utf-8')
// console.log(conteudo)

// Leitura assincrona, mais interessante
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// ler conteudo da pasta
fs.readdir(__dirname, (err, arquivos) => { // __dirname representa o diretoria atual
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})