 
Array.prototype.forEach2 = function(callback){
   for (let i = 0; i < this.length; i ++){
   callback(this[i], i, this)
 }
 }
 
 
 const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

 aprovados.forEach2(function(nome, indice){ // For Each vai percorrer todo o array e chamar a call Back para cada elemento do array
   console.log( indice +1, nome) // ou `${indice +1} ${nome}`
    // Primeiro paramento é o nome, o segundo indice e o terceiro array, você pode suprimir.
 })