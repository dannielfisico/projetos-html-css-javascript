/*O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
*/

const frutas = ['laranja', 'maçã', 'abacaxi','pêra']

const temAbacaxi = frutas.includes('abacaxi')
console.log(temAbacaxi)
console.log(frutas.includes('morango'))
console.log(frutas.indexOf('pêra')) //a diferença é que o indexOf retorna o indice