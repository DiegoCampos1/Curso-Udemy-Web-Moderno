


function sumDifferencesBetweenProductsAndLCMs(pairs){
  let lcm = []
for(let i = 0; i<pairs.length; i ++){
let x = (pairs[i]) 
function {
    var resto, a, b;
    a = x[0];
    b = x[1];
    do {
        resto = a % b;
        a = b;
        b = resto;
    } while (resto != 0);
    let resultado = (x[0] * x[1]) / a;
    return lcm.push(resultado);
    }
}

return lcm
}
sumDifferencesBetweenProductsAndLCMs([[15,18], [4, 5], [12, 60]]);