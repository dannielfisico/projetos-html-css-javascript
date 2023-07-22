document.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector('#modal')
    const btnExibir = document.querySelector('.btnExibir')
    const btnSalvar = document.querySelector('.btnSalvar')

    let pessoa = {
        nome,
        email,
        profissao
    }

 

    btnSalvar.addEventListener('click', () => {
        salvarDados()
        console.log("fechar Modal")
        modal.setAttribute('class','modal oculto')
    })
    
    btnExibir.addEventListener('click', () => {
        console.log("exibir Modal")
        modal.setAttribute('class','modal' )
    })

    const salvarDados = () => {
        const nome = document.querySelector("#nome")
        const email = document.querySelector("#email")
        const profissao = document.querySelector("#profissao")

        pessoa.nome = nome.value 
        pessoa.email = email.value 
        pessoa.profissao = profissao.value 
        console.log(pessoa)

        nome.value = ""
        email.value = ""
        profissao.value = ""

       
    }
    



})