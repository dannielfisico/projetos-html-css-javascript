console.log(soma(50,6))



//Function declaration

function soma(x,y){
    return x + y
}

let somatorio = soma(19, 22)

console.log(somatorio)

//Function expression

const subtracao = function (a, b){
    return a - b
}

let sub = subtracao(12,5)
console.log(sub)

console.log(subtracao(100,3))

//named function expression

const multi = function multiplicar(n1, n2){
    return n1 * n2
}

const multiplicado = multi(3,5)
console.log(multiplicado)