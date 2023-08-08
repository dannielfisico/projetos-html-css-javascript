const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

// Sem callback

let notasBaixas = []
let notasAltas = []

for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    } else {
        notasAltas.push(notas[i])
    }
}

console.log(notasBaixas)
console.log(notasAltas)


 // Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasAltas2 = notas.filter(notas => notas >= 7 )
console.log(notasAltas2)

// Outro exemplo isolando a função callback numa variável
const notasAprovado = nota => nota >= 7

const notasAltas3 = notas.filter(notasAprovado)
console.log(notasAltas3)


