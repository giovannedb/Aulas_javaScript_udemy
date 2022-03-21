
// par de [ ], sempre representara um array 
const valores = [2,3 , 2.1, 9.3, 5.1, 10 ]

console.log(valores[0], valores[3])
console.log(valores)

// me mostra quantidade de valores
console.log(valores.length)

// variavel.push (acrescenta valores dentro da variavel)
valores.push({id: 3}, false,  null, 'teste')
console.log(valores)

// imprime ultimo valor da array
console.log(valores.pop())

// deleta um valor, nesse exemplo o primeiro "0"
delete valores[0]
console.log(valores)

// tipo da variavel criada
console.log(typeof valores)


