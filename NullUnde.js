let valor // Não Inicializado
console.log(valor)

valor = null // Ausência de valor
console.log(valor)

const produto = {}
const preco = 55
console.log(produto + preco)

produto.preco = 100
console.log(produto)

produto.preco = null // valor nulo
console.log(!!produto.preco) // boolean = false
console.log(produto)