console.log("página carregada com sucesso...");

//Funções de exibição dos Modais

const exibirOcultarModal = () => {
  modalOverlay.classList.toggle("oculto");
};

const exibirOcultarModalExcluir = () => {
  modalExcluir.classList.toggle("oculto");
};

//Botões
const btnCadastrar = document.querySelector(".btnCadastrar");
const btnFechar = document.querySelector("#btnFechar");
const btnCancelar = document.querySelector('#btnCancelar')
const btnFecharModalExluir = document.querySelector('#btnFecharModalExluir')

//Modal Overlay
const modalOverlay = document.querySelector(".overlay");
//Modal Excluir
const modalExcluir = document.querySelector('.modal-excluir')

//Evento exibir Modal Overlay

btnCadastrar.addEventListener("click", exibirOcultarModal);
btnFechar.addEventListener("click", exibirOcultarModal);
btnCancelar.addEventListener('click', exibirOcultarModalExcluir)
btnFecharModalExluir.addEventListener('click', exibirOcultarModalExcluir)

// TempCliente
const tempCliente = {
  nome: "Paulo Rangel",
  email: "paulorangel@gmail.com",
  profissoao: "Ciclista Profissional",
};
// CRUD
//C - CREATE Criar registros no LocalStorage
const setLocalStorage = (dataBase) =>
  localStorage.setItem("dataBase", JSON.stringify(dataBase));
//R - READ - Ler registros do LocalStorage
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dataBase")) ?? [];
//U - UPDATE  - Atualizar registro no LocalStorage
const updateClient = (index, client) => {
  const dataBase = getLocalStorage();
  dataBase[index] = client;
  setLocalStorage(dataBase);
};
//D - DELETE - Apaga registro específico no LocalStorage
const deleteClient = (index, qtd) => {
  const dataBase = getLocalStorage();
  dataBase.splice(index, qtd);
  setLocalStorage(dataBase)
};

const createClient = (client) => {
  const dataBase = getLocalStorage();
  dataBase.push(client);
  setLocalStorage(dataBase);
};

// createClient(tempCliente)
// updateClient(5,tempCliente)
// deleteClient(4, 1);
