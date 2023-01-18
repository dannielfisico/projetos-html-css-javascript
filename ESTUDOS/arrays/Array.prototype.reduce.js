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

const carrinhoCompras = [
    {produto: 'Mesa', quantidade: 3, preco: 189},
    {produto: 'Cadeira', quantidade: 12, preco: 69},
    {produto: 'Almofada', quantidade: 12, preco: 49},
    {produto: 'Prato', quantidade: 14, preco: 39},
]
//Qual a quantidade de produtos do carrinho?
const qtdProdutos = carrinhoCompras.reduce(function(qtdInicial, qtdAtual){
    return qtdInicial + qtdAtual.quantidade
},0)

console.log(`Exitem ${qtdProdutos} produtos no carrinho.`)

//Qual valor total dos itens que estão no carrinho de compras? 2529
const totalPagar = carrinhoCompras.reduce(function(totalInicial, atual){
    return totalInicial + atual.quantidade * atual.preco
},0)

console.log(`O total a pagar é: R$${totalPagar.toFixed(2)}.`)

