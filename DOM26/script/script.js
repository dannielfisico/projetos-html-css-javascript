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

    const getLocalStorage = () => JSON.parse(localStorage.getItem('dbBanco') )?? []
    const setLocalStorage = (banco) => localStorage.setItem('dbBanco', JSON.stringify(banco))
 

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

        const banco = getLocalStorage()
        banco.push(pessoa)

        // localStorage.setItem('dbBanco', JSON.stringify(banco))
        setLocalStorage(banco)

        console.log(pessoa)

        limparCampos()

    }
    
})