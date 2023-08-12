
const btnCadastrar = document.getElementsByClassName('btnCadastrar')[0]
const btnCancelar = document.getElementsByClassName('btnCancelar')[0]
const modalClose = document.getElementsByClassName('modal-close')[0]
const modal = document.getElementById('modal')

const exibirOcultarModal = () => {
    modal.classList.toggle('oculto')
}

// Objeto cliente

const cliente = new Object

//CRUD

const cadastrarCliente = (cliente) => {
    cliente.nome = 'Daniel'
    cliente.email = 'dannielfisico@hotmail.com'
    cliente.celular = '(88) 9 8818-3286'
    cliente.cidade = 'Guaraciaba do Norte'

    localStorage.setItem('listaClientes', JSON.stringify(cliente))
}

cadastrarCliente(cliente)
// console.log(cliente)

//Eventos

btnCadastrar.addEventListener('click', exibirOcultarModal)
btnCancelar.addEventListener('click', exibirOcultarModal)
modalClose.addEventListener('click', exibirOcultarModal)