/**
 * O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.
 */

 const idade = [18, 30, 39, 29, 25, 18];
 function eMaior18(elemento, index, lista){
     return elemento >= 18
 }
 
 console.log(idade.every(eMaior18))

