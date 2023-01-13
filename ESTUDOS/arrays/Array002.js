const meuArray = []
const valor1 = 10
const valor2 = 8
const valor3 = 1
const valor4 = 11
const valor5 = 17
const valor6 = 13
const valor7 = 20

meuArray.push(valor1)
meuArray.push(valor2)
meuArray.push(valor3)
meuArray.push(valor4)
meuArray.push(valor5)
meuArray.push(valor6)
meuArray.push(valor7)

console.log(meuArray)
console.log('Tamanho do array')
console.log(meuArray.length)
const tem10 = meuArray.indexOf(10) //sendo resultado -1 o valor não foi encontrado 
console.log(tem10) 
//colocar a lista em ordem crescente
const meuArrayCrescente = meuArray.sort((a,b) => a - b)
console.log('Array em ordem crescente')
console.log(meuArrayCrescente)




