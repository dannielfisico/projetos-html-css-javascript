//#region Async e Await (Introdução ao tema)
/**
    As funções assíncronas funcionam como Promises, porém com uma sintaxe mais simples;
    Precisamos declara a função com a palavra async;
    Enquanto precisamos aguardar por algo da instrução precisa de await;
    Podemos aplicar o recurso em funções anônimas e métodos de classe;
    Tentar usar o awayt sem o async gera um erro;
    Exemplo de uso: inserção de dado no banco;  
 * */    

//#endregion
 
//#region  Sintaxe da função assincrona 

 function primeiraFuncao(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Esperou isso aqui!!`)
            resolve()
        },2000 )
    })

}

document.getElementById('btn').onclick = async () => {
    console.log('Inicio')
   await primeiraFuncao()
    console.log('Terminou')
}





//#endregion

