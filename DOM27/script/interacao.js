const pessoa = {
    nome: "Edson",
    sobrenome: "Alves de Araújo",
    idade: 39,
    profissao: "Farmaceutico",
  };

  //INTERAÇÃO COM A INTERFACE DO USUÁRIO

const btnCadastrar = document.querySelector('.btnCadastrar')
const btnFechar = document.querySelector('.btnFechar')

const abrirModal = () => {
    const modal = document.querySelector('.modal')
    modal.classList.toggle('oculto')
}


//eventos
btnCadastrar.addEventListener('click', abrirModal)
btnFechar.addEventListener('click', abrirModal)
