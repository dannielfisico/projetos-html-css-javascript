//atribuir o username digitado pelo usuário a uma variável


document.getElementById('btnBuscar').onclick = () => {
    const usernameTxt = document.getElementById('nomeUsuario').value;
    
    fetch (`https://api.github.com/users/${usernameTxt}`, 
    {
        method: "GET",
        headers: 
            {
                Accept: "appication/vnd.github.v3+json"
            }
    }).then((dadosDaResposta) => {
        console.log(typeof dadosDaResposta) //a resposta será um objeto
        console.log(dadosDaResposta) //o objeto será impresso no console
        return dadosDaResposta.json() //converte a resposta em json para que possamos pegar os dados
    }).then( (dadosDaRespostaJSON) => {
        console.log(dadosDaRespostaJSON) //imprime o objeto json
        let localização //variável definida para receber a localização do usuário
            if(dadosDaRespostaJSON.location === null || dadosDaRespostaJSON.location === "undefined" || dadosDaRespostaJSON.location === "null"){
                local = 'algum lugar não definido.'
            } else {
                localização = dadosDaRespostaJSON.location
            }
        document.getElementById('legenda').innerHTML = `${dadosDaRespostaJSON.name} de ${localização}`
        document.getElementById('perfil').src = dadosDaRespostaJSON.avatar_url
        document.getElementById('nomeUsuario').value = ""
    })
} 