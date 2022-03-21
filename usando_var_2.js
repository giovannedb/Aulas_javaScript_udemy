//exemplo para mostrar até onde uma variavel é visivel, sendo dentro e fora de um escopo 
// sempre buscar fugir do escopo global
var numero = 1
{
    var numero = 2
    console.log('dentro=', numero)
}
console.log('fora =', numero)
