
const btnCadastrar = document.getElementsByClassName('btnCadastrar')[0]
const btnCancelar = document.getElementsByClassName('btnCancelar')[0]
const modalClose = document.getElementsByClassName('modal-close')[0]
const modal = document.getElementById('modal')

const exibirOcultarModal = () => {
    modal.classList.toggle('oculto')
}

//Eventos

btnCadastrar.addEventListener('click', exibirOcultarModal)
btnCancelar.addEventListener('click', exibirOcultarModal)
modalClose.addEventListener('click', exibirOcultarModal)