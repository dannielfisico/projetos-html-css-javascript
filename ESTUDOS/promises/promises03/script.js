//#region Criação de Promessa - Exemplo 01

const myPromise = new Promise((resolve, reject) => {
    const usuario = 'Daniel'

    if (usuario === "Daniel"){
        resolve ('Usuário Daniel encontrado Exemplo 01')
    } else {
        reject ("Usuário Daniel não foi encontrado Exemplo 01")
    }
})

myPromise.then((dadosDaPromessa) => {
    console.log(dadosDaPromessa)
})
//#endregion

//#region Encadeamento de then's - Exemplo 02

const myPromise2 = new Promise((resolve, reject) => {
    const usuario = 'Daniel'

    if (usuario === "Daniel"){
        resolve ('Usuário Daniel encontrado Exemplo 02')
    } else {
        reject ("Usuário Daniel não foi encontrado Exemplo 02")
    }
})

myPromise2.then((dadosDaPromessa2) => {
   return dadosDaPromessa2.toUpperCase()
}).then((retornoEmMaiuscula) => {
    console.log(retornoEmMaiuscula)
})
//#endregion

//#region Retorno do catch - Exemplo 03

const myPromise3 = new Promise((resolve, reject) => {
    const usuario = 'Daniela'

    if (usuario === "Daniel"){
        resolve ('Usuário Daniel encontrado Exemplo 03')
    } else {
        reject ("Usuário Daniel não foi encontrado Exemplo 03")
    }
})

myPromise3.then((dadosDaPromessa3) => {
    console.log(dadosDaPromessa3)
}).catch((err) => {
    console.log(`Ocorreu um erro: ${err}`)
})

//#endregion

//#region Resolver várias promessas com all- Exemplo 04

const promessa4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promessa04 - ok!')
    }, 5000)
})
const promessa5 = new Promise((resolve, reject) => {
    resolve('Promessa05 - ok!')
})
const promessa6 = new Promise((resolve, reject) => {
    resolve('Promessa06 - ok!')
})

const resolverTodas = Promise.all([promessa4, promessa5, promessa6]).then((dados)=>{
    console.log(dados)
})

//#endregion

//#region Resolver várias promessas com race- Exemplo 05

const promessa7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promessa07 race - ok!')
    }, 5000)
})
const promessa8 = new Promise((resolve, reject) => {
    resolve('Promessa08 race - ok!')
})
const promessa9 = new Promise((resolve, reject) => {
    resolve('Promessa09 race - ok!')
})

const resolverTodasRace = Promise.race([promessa7, promessa8, promessa9]).then((dados)=>{
    console.log(dados)
})

//#endregion

//#region Fetch request na API do GitHub
// Fetch API

document.getElementById('btnVerificar').onclick = () => {

const userName = document.getElementById('nomeDoUsuario')

fetch(`https://api.github.com/users/${userName.value}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
}).then((resposta) => {
    console.log(typeof resposta)
    console.log(resposta)
    return resposta.json()
}).then((dadosDaResposta) => {
    console.log(dadosDaResposta)
    console.log(`O nome do usuário é ${dadosDaResposta.name}`)
    document.getElementById('avatar').src = dadosDaResposta.avatar_url
})
}
//#endregion