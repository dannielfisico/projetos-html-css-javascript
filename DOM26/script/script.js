document.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector('#modal')
    const btnExibir = document.querySelector('.btnExibir')
    const btnSalvar = document.querySelector('.btnSalvar')

    let pessoa = {
        nome,
        email,
        profissao
    }

    const limparCampos = () => {
        document.querySelectorAll('.campo').forEach((campo) =>{
            campo.value = ""
        })
    }

    const getLocalStorage = () => JSON.parse(localStorage.getItem('banco') )?? []
     
 

    btnSalvar.addEventListener('click', (e) => {
        e.preventDefault()
        salvarDados()

        console.log("fechar Modal")
        modal.setAttribute('class','modal oculto')
    })
    
    btnExibir.addEventListener('click', () => {
        console.log("exibir Modal")
        modal.setAttribute('class','modal' )
    })

    const salvarDados = () => {
        const nome = document.querySelector("#nome").value
        const email = document.querySelector("#email").value
        const profissao = document.querySelector("#profissao").value

        pessoa.nome = nome 
        pessoa.email = email
        pessoa.profissao = profissao


        console.log(pessoa)

        limparCampos()

    }
    
})