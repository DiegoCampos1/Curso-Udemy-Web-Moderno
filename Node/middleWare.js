// Padrão midleware pattern (chain of responsability)
// Quebrar a aplicação ou solução em pequenas funções con tarefas bem definidas
// Isso ajuda na leitura e também na reutilização de codigo.
// Padrão mais utilizado atualmente e sempre tentar codar com ele em mente.
const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1';
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2';
  next()
}

const passo3 = ctx => ctx.valor3 = 'mid3';

const exec = (ctx, ...middlewares) => {
  const execPasso = indice =>{
    middlewares && indice < middlewares.length &&
    middlewares[indice](ctx, () => execPasso(indice +1))
  }
  execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) // pode alterar a ordem, e tambem suprimir algum passo. Muito interessante
console.log(ctx)
