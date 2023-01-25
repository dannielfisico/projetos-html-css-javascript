const env = require('./a.js')
const letrasMin = env.letrasMin
const letrasMai = env.letrasMai
const numeros = env.numeros
const caracteres = env.caracteres
const aleatoriaMai = Math.floor(Math.random()*(letrasMai.length-1))
let aleatoriaMin = Math.floor(Math.random()*(letrasMin.length-1))
const aleatoriaNum = Math.floor(Math.random()*(numeros.length-1))
const aleatoriaCaracteres = Math.floor(Math.random()*(caracteres.length-1))
const todosOsCaracteres = aleatoriaMai + aleatoriaMin + caracteres + numeros
const qtdDigitos = 10
const password = []

function letraMinuscula(){
    let tamanho = qtdDigitos
    while(password.length < tamanho){
        // console.log(`Senha: ${password.length}`)
        // console.log(`Tamaho a ser gerada ${tamanho}`)
        let ale = Math.floor(Math.random()*(todosOsCaracteres.length-1))
        password.push(todosOsCaracteres[ale])
    }
    return password
}

console.log(letraMinuscula())