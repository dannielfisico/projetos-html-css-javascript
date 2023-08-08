//Closure: Uma closure ocorre normalmente quando uma função é declarada dentro do corpo de outra, e a função interior referencia variáveis locais da função exterior.

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro (){
        return x
    }

    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())
