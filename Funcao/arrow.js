let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => { // funcao arrow sempre é anonima para usar depois temos que armazenar em uma const ou variavel
  return 2 * a;
}

dobro = a => 2 * a; //Voce pode usar sem parentese se você tem apenas um parametro. Tem retorno implicito, se tiver funcoes de apenas uma linha
console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá';
}

ola = () => {
  return 'Olá';
}

ola = () => 'Olá';

console.log(ola())