const pessoa = {
  saudacao: 'Bom dia!',
  falar () {
    console.log(this.saudacao) // acessando saudacao atraves do dono desse objeto 
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO. Mudou o contexto. Oq fazer? BIND

const falarDePessoa = pessoa.falar.bind(pessoa) // Passa o objeto do qual vc quer que seja resolvido para pessoa
falarDePessoa()

