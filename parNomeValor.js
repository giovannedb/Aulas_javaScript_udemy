
//léxico quer dizer em qual local ele foi definido 
//ao inves de const, eu poderia também estar utilizando var e let
const saudacao = 'opa' // contexto léxico 1


//usando dentro de uma função
//definindo o contexto dentro de uma função
function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}


// objetos sao grupos alinhados de pare / valor
const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Lega',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
