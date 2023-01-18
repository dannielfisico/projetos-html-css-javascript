/**
 *O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

 Transforma um array em  um único valor que pode ser uma string, um objeto, ou outro array.
 */

const notas = [3,7,8,6]
//somar os termos deste array sem o uso de reduce()
let acumulador = 0
for(let index = 0; index < notas.length;index++){
    acumulador += notas[index]
}
const total = acumulador

console.log(total)

//somar os termos com o uso de reduce()
const total2 = notas.reduce(function(a,b){
    return a + b
})

console.log(total2)

const participantes = [
    {pais: 'Brasil', alunos: 12},
    {pais: 'Argentina', alunos: 5},
    {pais: 'Uruguai', alunos: 2},
    {pais: 'Bolivia', alunos: 9},
    {pais: 'Paraguai', alunos: 3}
]

const totalAlunos = participantes.reduce(function(soma,atual){
    return soma + atual.alunos
},0)

const totalDeAlunos = participantes.reduce(function(soma, atual){
    return soma + atual.alunos
},0)

console.log(totalAlunos)
console.log(totalDeAlunos)
