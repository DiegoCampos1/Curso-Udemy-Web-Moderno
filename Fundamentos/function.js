let d = 0;

function soma (a,b,c){
  d = a+b+c;
  }

soma(2, 3, 5);
console.log(d)


//Funcao com retorno
function soma2 (x, z=0) { //Usa valor padrão definido aqui se não for passado nenhum.
  return x+z
}

console.log (soma2(1,2))
console.log (soma2(1))