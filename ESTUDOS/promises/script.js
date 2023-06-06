/**
 PROMISES
 
 São como promessas da vida real, ela está esperando algum retorno;
 Para criar uma promessa instanciamos a classe Promise;
 Que leva dois argumentos: resolve (solução) e reject (erro);
 Para encadear mais processos usamos o método then;
 Alguns recursos de JavaScript (Fetch API) e bibliotecas retornam Promises;

 */

 //Criação de promessa

 const myPromise = new Promise((resolve, reject)=> {
    const nome = 'Daniel1'

    if(nome === 'Daniel'){
        resolve(`Usuário ${nome} encontrado.`)
    }else {
        reject(`Usuário ${nome} não foi encontrado.`)
    }
 }).catch(erro => {
    console.log(erro)
 })

 myPromise.then( (dados) => {
    console.log(dados)
 })