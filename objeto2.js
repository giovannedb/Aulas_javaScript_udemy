// conceitos de objetos e funções
// objeto é uma condição de chave e valor
// tipo do objetivo
console.log(typeof Object)
//estanciando uma função com a palavra "NEW"
console.log(typeof new Object)

//criando uma função vazia como exemplo
const cliente = function(){}
console.log(typeof cliente)
console.log(typeof new cliente)

//testando também, criando uma classe 
class produto {} // ES 2015 (ES6)
//por ser uma classe, ele me retorna uma função
console.log (typeof produto)
console.log(typeof new produto())