document.addEventListener('DOMContentLoaded', () => {
    console.log('página carregada com sucesso...')

    //Funções

    const exibirModalOverlay = () => {
        modalOverlay.classList.toggle('oculto')
    }

    const fecharModalOverlay = () => {
        modalOverlay.classList.toggle('oculto')
    }

    //Botões
    const btnCadastrar = document.querySelector('.btnCadastrar')
    const btnFechar = document.querySelector("#btnFechar")
    

    //Modal Overlay
    const modalOverlay = document.querySelector('.overlay')

    //Evento exibir Modal Overlay

    btnCadastrar.addEventListener('click', exibirModalOverlay)
    btnFechar.addEventListener('click', fecharModalOverlay)

})

