/**
 * O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.
 */

 const idade = [18, 30, 39, 29, 25, 18];
 
 /**
  * Função que testa cada elemento, recebe três parametros:
  * @param {*} elemento obrigatório. O elemento atual sendo processado na array.
  * @param {*} index opcional. O índice do elemento atual sendo processado na array.
  * @param {*} lista opcional. O array de origem.
  * @returns 
  */
 function eMaior18(elemento, index, lista){
     return elemento >= 18
 }
 
 console.log(idade.every(eMaior18))

const frutas = ['abacate', 'banana', 'abacaxi', 'amora', 'ameixa', 'acerola', 'açaí', 'carambola']

console.log(frutas.every(comecaComA)) 
console.log(frutas.every(comecaComAouB))


function comecaComA(nome){
    if(nome[0] == 'a' || nome[0] == 'b'){
        return true
    } else {
        return false
    }
}
function comecaComAouB(nome){
    if(nome[0] == 'a' || nome[0] == 'b'){
        return true
    } else {
        return false
    }
}