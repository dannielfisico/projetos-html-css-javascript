const btnCadastrar = document.getElementsByClassName("btnCadastrar")[0];
const btnCancelar = document.getElementsByClassName("btnCancelar")[0];
const modalClose = document.getElementsByClassName("modal-close")[0];
const modal = document.getElementById("modal");

const exibirOcultarModal = () => {
    limparCampos()
  modal.classList.toggle("oculto");
};

const cliente = new Object();

const pegarDadosForm = (cliente) => {
    cliente.nome = document.getElementById('nome').value
    cliente.email = document.getElementById('email').value
    cliente.celular =document.getElementById('tel').value
    cliente.cidade = document.getElementById('cidade').value
  };


const osCamposSaoValidos = () => {
   return document.querySelector('.modal-form').reportValidity()
}

const limparCampos = () => {
    const campos = document.querySelectorAll('.modal-field')
    campos.forEach(campo => campo.value = "")
}

// Interação com o Layout
const salvarCliente = () => {
    if(osCamposSaoValidos()) {
        cadastrarCliente(cliente)
        console.log('salvando....')
        exibirOcultarModal()
    }
}

//Eventos

btnCadastrar.addEventListener("click", exibirOcultarModal);
btnCancelar.addEventListener("click", exibirOcultarModal);
modalClose.addEventListener("click", exibirOcultarModal);

document.getElementById('btnSalvar').addEventListener('click', salvarCliente)
