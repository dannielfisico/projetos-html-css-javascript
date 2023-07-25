console.log('página carregada com sucesso...')

    //Funções

    const exibirOcultarModal = () => {
        modalOverlay.classList.toggle('oculto')
    }


    //Botões
    const btnCadastrar = document.querySelector('.btnCadastrar')
    const btnFechar = document.querySelector("#btnFechar")
    

    //Modal Overlay
    const modalOverlay = document.querySelector('.overlay')

    //Evento exibir Modal Overlay

    btnCadastrar.addEventListener('click', exibirOcultarModal)
    btnFechar.addEventListener('click', exibirOcultarModal)

    // TempCliente

    const tempCliente = {
        nome: 'Fernando Nonato',
        email: 'fernandononato@gmail.com',
        profissoao: 'Comerciante'
    }

    //Ler registros do LocalStorage

    

    //Salvar Registro

    

    

    