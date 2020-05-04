function getSumOfDigits(integer) {
let array = Array.from(String(integer), Number);

let resultado = 0
for (let i = 0 ; i < array.length ; i += 1){
  
 resultado += array[i]
}
return resultado
}

console.log(getSumOfDigits(123))