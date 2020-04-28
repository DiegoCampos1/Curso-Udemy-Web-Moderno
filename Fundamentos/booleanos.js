let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1; // 1 representa verdadeiro
console.log(!!isAtivo); //Duas negaçoes se anulam

//Os verdadeiro
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//Os falsos
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false));

//Finalizando
console.log(!!('' || null || 0 || ' ')) // true, pois apenas um é verdadeiro


let name ='Diego'
console.log( name || 'Desconhecido') // Se name existir imprimir o name, se não existir imprimir o "Desconhecido"




