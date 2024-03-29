/**
 PROMISES
 
 São como promessas da vida real, ela está esperando algum retorno;
 Para criar uma promessa instanciamos a classe Promise;
 Que leva dois argumentos: resolve (solução) e reject (erro);
 Para encadear mais processos usamos o método then;
 Alguns recursos de JavaScript (Fetch API) e bibliotecas retornam Promises;

 */

//#region Criação de promessa

 const myPromise = new Promise((resolve, reject)=> {
    const nome = 'Daniel'

    if(nome === 'Daniel'){
        resolve(`Usuário ${nome} encontrado.`)
    }else {
        reject(`Usuário ${nome} não foi encontrado.`)
    }
 })

 myPromise.then( (dados) => {
    console.log(dados)
 })

 //#endregion

 //#region Encadeamento de then's

const myPromise2= new Promise((resolve, reject) => {
    const cliente = 'Beto'

    if(cliente === 'Beto'){
        resolve(`O cliente ${cliente} foi encontrado.`)
    } else {
        reject(`O cliente ${cliente} NÃO foi encontrado.`)
    }
})

myPromise2.then((data) => {
    return data.toUpperCase()
}).then(frase => {
    console.log(frase)
})

//#endregion

//#region Usando o método catch()

//#region 
//criação da promessa
const myPromise3 = new Promise((resolve, reject) => {
    const nota = '8.5'
    if(nota >= 7){
        resolve('Aprovado')
    } else {
        reject('Reprovado')
    }
})

myPromise3.then(situacao => {
    return situacao.toUpperCase()
}).then(situacaoNova => { 
    console.log(situacaoNova)
})

 //#endregion

 //#region 


function logar222(){
    const usuario = document.getElementById('usuario')
    const senha = document.getElementById('senha')
    const btnLogin = document.getElementById('btnLogin')

 const myPromise4 = new Promise((resolve, reject) => {
    if (usuario.value == 'daniel' && senha.value == "123" ){
        resolve (window.location.href = "./logou.html")
    } else {
        reject (alert(`Impossível acesso com essas credenciais`))
    }})
}

//outra forma mais correta
function logar(){
    const usuario = document.getElementById('usuario')
    const senha = document.getElementById('senha')
    const btnLogin = document.getElementById('btnLogin')

    myPromise4.then(situacao => {
        if("aprovado"){
            window.location.href = "./logou.html"
        } else {
            console.log("Falha no login!")
            alert("Falha no login!")
        }
    })

}

const myPromise4 = new Promise((resolve, reject) => {
    if (usuario.value == 'daniel' && senha.value == "123" ){
        resolve ('aprovado')
    } else {
        reject ('reprovado')
    }})

 //#endregion