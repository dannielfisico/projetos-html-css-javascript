const pessoa = {
  nome: "Rafael",
  sobrenome: "Vasconcelos",
  idade: 32,
  profissao: "Estudante",
};

// CREATE - Criar Novo Registro
const setLocalStorage = (dbClientes) =>
  localStorage.setItem("dbClientes", JSON.stringify(dbClientes));

const createClient = (client) => {
  const dbClientes = getLocalStorage("dbClientes");
  dbClientes.push(client);
  // localStorage.setItem('dbClientes', JSON.stringify(dbClientes))
  setLocalStorage(dbClientes);
};

// READ - Ler todos os registros
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];

// UPDATE - Atualizar Registro
const updateClient = (index, client) => {
  const dbClientes = getLocalStorage("dbClientes");
  dbClientes[index] = client;
  setLocalStorage(dbClientes);
};

// DELETE - Apaga um registro específico

const deleteClient = (index) => {
  const dbClientes = getLocalStorage("dbClientes");
  dbClientes.splice(index, 1);
  setLocalStorage(dbClientes);
};

// createClient(pessoa);
// updateClient(0, pessoa);
// deleteClient(1);
