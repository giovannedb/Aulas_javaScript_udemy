// armazenar uma funcao em uma variavel 

const soma = function (a, b){
    console.log(a + b)
}
soma (2, 3)

// armazenando uma funçao arrow em uma variavel 

const soma2 = (a, b) =>{
    return a + b
}

console.log(soma2(2, 3))

// retorno implicito 

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

