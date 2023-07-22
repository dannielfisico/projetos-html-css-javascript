'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    // clearFields()
    document.getElementById('modal').classList.remove('active')
}
const tempClient = {
    nome: "Marcos",
    email: "marcos@hotmail.com",
    celular: "84455323",
    cidade: "Rio de Janeiro"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient'))  ?? []
const setLocalStorage = (dbClient) => localStorage.setItem('dbClient', JSON.stringify(dbClient))
//CRUD -    CREATE - READ - UPDATE - DELETE
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(tempClient)
    setLocalStorage(dbClient)
}
// READ
const readClient = () => getLocalStorage()
// UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}
//DELETE
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index)
    setLocalStorage(dbClient)
}


// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

// document.getElementById('salvar')
//     .addEventListener('click', saveClient)

// document.querySelector('#tableClient>tbody')
//     .addEventListener('click', editDelete)

// document.getElementById('cancelar')
//     .addEventListener('click', closeModal)