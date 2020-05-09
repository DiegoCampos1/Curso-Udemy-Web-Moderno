console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

// O this dentro da funçao não aponta para export
function logThis() {
  console.log("Dentro de uma função...");
  console.log(this === exports);
  console.log(this === global)

  // this.perigo = '...'
}

logThis();
