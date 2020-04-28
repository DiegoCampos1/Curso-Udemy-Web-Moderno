const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (x in num) {
  if (x == 5) {
    break; // Faz parar no indice 5
  }
  console.log(`${x} = ${num[x]}`);
}

for (let i = 0; i < num.length; i += 1) {
  if (i == 5) {
    continue; // Vai fazer pular o indice 5 
  }
  console.log(`${i} = ${num[i]}`);
}


