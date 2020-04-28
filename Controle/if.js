// Funçao associado ao numero 

Number.prototype.entre = function (inicio, fim){
  return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota){
  if (nota.entre(9, 10)){
    console.log("Cê é o bixão memo heim Doido!!")
  } else if(nota.entre(7, 8.99)){
    console.log("Aprovado")
  } else if(nota.entre(4, 6.99)){
    console.log("Recuperação")
  } else if(nota.entre(0, 3.99)){
    console.log("Volte uma casa")
  }
    else {
    console.log("Nota invalida")
  }
}

imprimirResultado(10);
imprimirResultado(-1);
imprimirResultado(5);
imprimirResultado(2);

