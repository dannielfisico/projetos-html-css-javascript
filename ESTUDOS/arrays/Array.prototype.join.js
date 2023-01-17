/*O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.*/
const frutas = ['laranja', 'maçã', 'abacaxi','pêra']
const frutas2 = frutas.join() //sem parâmeros 
console.log(frutas2) // laranja,maçã,abacaxi,pêra
const frutas3 = frutas.join('') //aspas vazia
console.log(frutas3) // laranjamaçãabacaxipêra
const frutas4 = frutas.join('/') //parâmetro barra nas aspas
console.log(frutas4) // laranja/maçã/abacaxi/pêra
