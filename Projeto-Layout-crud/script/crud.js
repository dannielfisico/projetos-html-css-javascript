
// Objeto cliente

// const cliente = new Object();

//CRUD
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("listaClientes")) ?? [];
const setLocalStorage = (banco) =>
  localStorage.setItem("listaClientes", JSON.stringify(banco));

const cadastrarCliente = (cliente) => {
  pegarDadosForm(cliente);

  const banco = getLocalStorage();
  banco.push(cliente);
  setLocalStorage(banco);
};

const deleteCliente = (index) => {
  const banco = getLocalStorage();
  banco.splice(index, 1);
  setLocalStorage(banco);
};

const atualizarCliente = (index, cliente) => {
  const banco = getLocalStorage();
  pegarDadosForm(cliente);
  banco[index] = cliente;
  setLocalStorage(banco);
};
