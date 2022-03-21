// Função sem retorno
function imprimiSoma (a, b) {
    console.log(a + b)
}

imprimiSoma (2, 3)
imprimiSoma (2, 5, 10, 3)
imprimiSoma (1)

// função com retorno
// nessa parte, declarei a variavel e declarei que vai ter um retorno de a + b sempre que eu chamar a variavel "soma"
function soma (a = 2, b = 2
    ){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(5))
console.log(soma())