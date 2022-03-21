const funcs = []

for (let i = 0; i < 10; i++ ){
    funcs.push(function(){
        console.log(i)
    })
}

// nesse caso ele imprimi os valores corretos que está no bloco 2 e 8
// uma função aqui ela tem uma noção do local que ela foi definida 
funcs[2]()
funcs[5]()
funcs[8]()
