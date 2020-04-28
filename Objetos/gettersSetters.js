 const sequencia= {
   _valor: 1, //Nao quer dizer que é uma variavel privada. Convenção 
   get valor() { return this._valor++ },  //Pode fazer algum tipo de processamento
   set valor(valor) {
     if(valor > this._valor){
       this._valor = valor
     }
 }
 }

 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 1000
 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 900 // não pode pelo if
 console.log(sequencia.valor, sequencia.valor)