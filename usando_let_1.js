var numero = 1
{
//a preferencia será sempre de um escopo menor,  vai procurar primeiro nos escopo interno
// se não achar a variavel, ele procura no escopo abrangente.
    let numero = 2
    console.log('dentro:',numero)
}
console.log('fora:', numero)