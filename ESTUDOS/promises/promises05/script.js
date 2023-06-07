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
        
    })
} 