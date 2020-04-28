const escola = "Cod3r";

console.log(escola.charAt(4)); // console.log(escola[4]); Pegar o valor correspondente ao índice indice
console.log(escola.charCodeAt(3)); // valor da tabela unicode 
console.log(escola.indexOf('3'));
console.log(escola.substring(1)) //Imprime a partir do indice

console.log(escola.substring(0,3)) //Imprime do 0 ate o indice 3 sem incluir o segundo parametro(indice)
console.log('Escola '.concat(escola).concat('!')) // Uma forma de concatar strings e variaveis
//"Esolca " + escola + "!"

console.log(escola.replace(3, 'e')); //Substituir na variavel escola o indice 3 pela letra e.
console.log(escola.replace(/\w/g, 'e')); // Substitui tudo pela letra e, em cada indice.

//Converter uma string em um array:

console.log('Ana,Maria,Pedro'.split(',')); //Usa a virgula como ponto de separação.
