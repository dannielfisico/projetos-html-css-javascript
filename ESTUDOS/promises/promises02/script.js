const nome = document.getElementById('usuario').value

//Criando uma Promise



function logarse(){
    const myPromise = new Promise(
        (login, falha) => {
            
            if (nome === 'Daniel'){
                login ('aprovado')
            } else {
                falha ('reprovado')
            }
        }
    )

    myPromise.then((dados) => {
        console.log(dados)
        situacao = dados
        if(situacao != 'aprovado'){
            console.log("Falha")
        } else {
            console.log('sucesso')
            window.location.href = "./logou.html"

        }
    })
}




function acessar(){
    var user = document.getElementById('usuario')
    if (user.value != "Daniel"){
        alert("Rejeitado seu acesso");
    } else {
        window.location.href = "./logou.html";
        
    }
}

