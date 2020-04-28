// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f
// No ou exclusivo o V e F devem ser difierente, se for dois V ou dois F é false
// !v -> f
// !f -> v
function compras (trabalho1, trabalho2) {
  const comprarSorvete = trabalho1  || trabalho2;
  const comprarTV32 = trabalho1 != trabalho2 //simulando um ou exclusivo
  const comprarTV50 = trabalho1  && trabalho2;
  const manterSaudavel = !comprarSorvete; 

  return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} //pode omitir a chave para criar objeto, cria uma constante com a key com o nome da constante e o valor com o valor da constante
}
console.log(compras(true, true))