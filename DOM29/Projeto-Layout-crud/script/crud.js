const cliente = {
  nome: "João",
  idade: "95",
  profissao: "Músico",
  cidade: "São Benedito",
};

// CRUD - READ

const readClient = (key) => JSON.parse(localStorage.getItem(key)) ?? [];

// CRUD - CREATE

const createClient = (newClient, key) => {
  const bancoClientes = readClient(key)
  bancoClientes.push(newClient)
  localStorage.setItem(key, JSON.stringify(bancoClientes));
};
