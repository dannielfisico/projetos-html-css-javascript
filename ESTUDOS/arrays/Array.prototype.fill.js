/*O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.*/
/*
Sintaxe
    arr.fill(valor[, ínicio = 0[, fim = this.length]])
*/

const frutas = ['laranja', 'maçã', 'abacaxi','pêra']
const frutas2 = ['laranja', 'maçã', 'abacaxi','pêra']
const frutas3 = ['laranja', 'maçã', 'abacaxi','pêra']
frutas.fill('y') //todos array frutas foi preenchido com y
console.log(frutas)
const penultimaFruta2 = frutas2.length - 1
frutas2.fill('z',1,penultimaFruta2) //preenche com z a partir do index 1 até o tamanho deste (this) array
console.log(frutas2)