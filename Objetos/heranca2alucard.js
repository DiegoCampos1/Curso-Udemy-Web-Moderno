String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}
console.log('DRACULA'.reverse())

Array.prototype.first = function (){
  return this[0]
}

console.log([1,2,3,4,5].first())