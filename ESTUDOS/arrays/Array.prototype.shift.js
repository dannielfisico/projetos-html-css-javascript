/*
O método **shift()**remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. */

const frutas = ['laranja', 'maçã', 'abacaxi','pêra']
const primeiraFruta = frutas.shift()
console.log(frutas)

//Usando o método shift() dentro de um loop de while
const visitantes = ['Daniel', 'João', 'Marcos', 'Jamila', 'Gabriel']
const clientes = []
//transferir os visitantes para clientes
/*
while((i = visitantes.shift()) !== undefined){
    clientes.push(i)
}*/
while((i = visitantes.pop()) !== undefined){
    clientes.push(i)
}


console.log(visitantes)
console.log(clientes)