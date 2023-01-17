/**
 * O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
 */

 function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, não encontrado
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
  