//#region Criação de Promessa - Exemplo 01

const myPromise = new Promise((resolve, reject) => {
    const usuario = 'Daniel'

    if (usuario === "Daniel"){
        resolve ('Usuário Daniel encontrado')
    } else {
        reject ("Usuário Daniel não foi encontrado")
    }
})

myPromise.then((dadosDaPromessa) => {
    console.log(dadosDaPromessa)
})
//#endregion

//#region Encadeamento de then's - Exemplo 02

const myPromise2 = new Promise((resolve, reject) => {
    const usuario = 'Daniela'

    if (usuario === "Daniel"){
        resolve ('Usuário Daniel encontrado')
    } else {
        reject ("Usuário Daniel não foi encontrado")
    }
})

myPromise2.then((dadosDaPromessa) => {
   return dadosDaPromessa.toUpperCase()
}).then((retornoEmMaiuscula) => {
    console.log(retornoEmMaiuscula)
})
//#endregion

//#region Retorno do catch - Exemplo 03

const myPromise3 = new Promise((resolve, reject) => {
    const usuario = 'Daniela'

    if (usuario === "Daniel"){
        resolve ('Usuário Daniel encontrado')
    } else {
        reject ("Usuário Daniel não foi encontrado")
    }
})


//#endregion