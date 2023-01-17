/*
O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
*/
const frutas = ['laranja', 'maçã', 'abacaxi','pêra']
const k = frutas.unshift('abacate', 'manga')
console.log(k) //mostra no novo tamanho do array
console.log(frutas)