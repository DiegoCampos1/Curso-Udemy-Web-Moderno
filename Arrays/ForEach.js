 // 
 const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

 aprovados.forEach(function(nome, indice, array){ // For Each vai percorrer todo o array e chamar a call Back para cada elemento do array
   console.log( indice +1, nome) // ou `${indice +1} ${nome}`
   console.log(array) // Primeiro paramento é o nome, o segundo indice e o terceiro array, você pode suprimir.
 })

 aprovados.forEach(nome => console.log(nome))

 const exibirAprovados = aprovado => console.log(aprovado)
 aprovados.forEach(exibirAprovados)