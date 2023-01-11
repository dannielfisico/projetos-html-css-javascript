const array = [] /*Array vazio definido*/
const a = 2
console.log(array)
array.push(a)  /*Variável 'a' adicionada no final do array */ 
console.log(array)
const b = 15
array.push(b) /*Variável 'b' adicionada no final do array */ 
console.log(array)
const c = 3
array.push(c) /*Variável 'c' adicionada no final do array */ 
const d = 9
array.push(d) /*Variável 'd' adicionada no final do array */ 
const e = 0
array.push(e) /*Variável 'e' adicionada no final do array */ 
console.log(array) /*Impressão do array na mesma ordem em que os elementos foram adicionados */ 
const arrayCres  = array.sort((a,b) => a - b) /* O método .sort() faz com que os elementos do array sejam classificados em ordem crescente (ordem alfabética) */
console.log(arrayCres) /* Impressão do arrayCres que é o array normal em ordem crescente, ou seja os elementos são colocados do menor para o maior*/
const menor = arrayCres[0] /*Menor valor contido no arrayCres*/
const maior = arrayCres[arrayCres.length - 1] /*Maior valor contido no arrayCres*/
console.log(`O menor e maior valor são respectivamente: ${menor} e ${maior}`)

let soma = 0 
//O valor da variável 'soma' tem que ser definido para que a váriável receba um tipo numérico, caso contrário ela fica definida no escopo com um tipo 'undefined' o que irá dá um erro na hora de somar, pois o primeiro termo da soma seria o valor contido inicialmente na variável soma.
let total //só pra testar, vou imprimir o typeof dessa variável no console
console.log(typeof soma) /* Impressão no console do tipo dessa variável */
console.log(typeof total) /* Impressão no console do tipo dessa variável */

/* Aqui usei um for para adicionar cada elemento do arrayCres dentro da variável soma que inicialmente vale 0 (zero) */
for (let contador = 0; contador < arrayCres.length; contador++){
    soma += arrayCres[contador]
} /* O contador definido como 0 e enquanto o contador for menor que o tamanho do arrayCres, será incrementado 1 em cada interação e a soma recebe ela mesma + o valor contido em cada um dos elementos contidos no arrayCres em cada uma das interações.*/
console.log(`A soma dos termos é ${soma}.`) 
const mediaArrayCres = soma/arrayCres.length
console.log(`A média ${mediaArrayCres}.`)