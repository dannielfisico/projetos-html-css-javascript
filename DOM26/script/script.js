document.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector('#modal')
    const btnExibir = document.querySelector('.btnExibir')
    const btnSalvar = document.querySelector('.btnSalvar')
    const btnFechar = document.querySelector('#btnFechar')
    const divInfo = document.querySelector('.info')
    const btnEditar = document.querySelector('.btnEditar')
    const btnExcluir = document.querySelector('.btnExcluir')
    const qtd = document.querySelector('#qtd')

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

    const dadosValidos = () => {
        return document.querySelector('.dados').reportValidity()
    }

    const ativarBtnSalvar = () =>  {
        setInterval(() => {
            if(dadosValidos()){
                btnSalvar.removeAttribute('disabled')
            }
            
        }, 10);


    }

    
       
 
    const preencher = () => {
        let contador = 0
        divInfo.innerHTML = ""
        const dados = getLocalStorage()
        console.log(dados)
        dados.forEach(dado => {
            const divClient = document.createElement('div')
            divClient.setAttribute('class','cliente')
            divClient.innerHTML = `<div>${dado.nome}</div>
                                    <div>${dado.email}</div>
                                    <div>${dado.profissao}</div>
                                    <div><button data-id="${contador}-edit" class="btnEditar">Editar</button><button data-id="${contador}-delete" class="btnExcluir">Excluir</button></div>`
                                    divInfo.appendChild(divClient)
                                    contador++
                                    qtd.innerHTML = contador
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

  
    ativarBtnSalvar()

    const salvarDados = () => {
        if(dadosValidos()){
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

    }
    
})