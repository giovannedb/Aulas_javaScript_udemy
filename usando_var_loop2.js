var funcs = []

// nesse laço, ele encrementa mais um "i", a cada contagem até chegar o valor maximo determinado que é 10
for (var i = 0; i <10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// como estou utilizando o "var" e ela não tem um escopo de bloco
// ao executar essa função, o resultado sera tudo 10
// isso é problema do javascript, pois o VAR não tem um escopo de função
funcs[2]()
funcs[8]()
