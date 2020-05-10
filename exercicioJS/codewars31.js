function findShort(s){
  const array = s.split(" ")
  let aux = array[0].length
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < aux)
    aux = array[i].length
  } 
  return aux
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));


