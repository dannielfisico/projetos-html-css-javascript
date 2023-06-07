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
        let local
            if(dadosDaRespostaJSON.location != null){
                local = dadosDaRespostaJSON.location
            } else {
                local = 'algum lugar não definido.'
            }
        document.getElementById('legenda').innerHTML = `${dadosDaRespostaJSON.name} de ${local}`
        document.getElementById('perfil').src = dadosDaRespostaJSON.avatar_url
        document.getElementById('nomeUsuario').value = ""
    })
} 