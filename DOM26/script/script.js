document.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector('#modal')
    const btnExibir = document.querySelector('.btnExibir')
    const btnSalvar = document.querySelector('.btnSalvar')
    const btnFechar = document.querySelector('#btnFechar')
    const divInfo = document.querySelector('.info')

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
 
    const preencher = () => {
        divInfo.innerHTML = ""
        const dados = getLocalStorage()
        console.log(dados)
        dados.forEach(dado => {
            const divClient = document.createElement('div')
            divClient.setAttribute('class','cliente')
            divClient.innerHTML = `<div>${dado.nome}</div>
            <div>${dado.email}</div>
              <div>${dado.profissao}</div>
              <div><button>Editar</button><button>Excluir</button></div>`
        divInfo.appendChild(divClient)
        })
    }
    
preencher()

    btnSalvar.addEventListener('click', (e) => {
        e.preventDefault()
        salvarDados()

        console.log("Salvando e Fechando Modal")
        modal.setAttribute('class','modal oculto')
    })
    
    btnExibir.addEventListener('click', () => {
        console.log("exibir Modal")
        modal.setAttribute('class','modal' )
    })

    btnFechar.addEventListener('click',() => {
        console.log('Fechar Modal sem Salvar')
        modal.classList.toggle('oculto')
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

        preencher()

    }
    
})