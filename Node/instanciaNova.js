// Uma factory retorna um novo objeto
module.exports = () => {
  return {
    valor: 1,
    inc () {
      return this.valor ++
    }
  }
}