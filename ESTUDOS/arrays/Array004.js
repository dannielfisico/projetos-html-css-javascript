let lista = prompt("Palavra")
const contador = lista.length/2
console.log(contador)
let i = 0
let f = -1
const respostas = []

while(i < contador){
    if(lista[i] === lista.at(f)){
        respostas.push('sim')
    } else {
        respostas.push('não')
    }
    i++
    f--
}

if(respostas.indexOf('não') == -1){
    console.log(`É Palindromo.`)
    document.write(`É Palindromo.`)
}else {
    console.log(`Não é Palindromo.`)
    document.write(`Não é Palindromo.`)
}

const n = [1,3,5,7,19,23]
n.length = 15
n.push(15)
console.log(n) /*[1,3,5,15,7]*/