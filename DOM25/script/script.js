'use strict'

const openModal = () => document.getElementById('modal')
    .classList.toggle('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.toggle('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient'))  ?? []
const setLocalStorage = (dbClient) => localStorage.setItem('dbClient', JSON.stringify(dbClient))
//CRUD -    CREATE - READ - UPDATE - DELETE
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
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

const isValidFields = () => {
  return document.getElementById('form').reportValidity()
}

//Interação com o Layout

const clearFields = () => {
//    const inputs = ['nome', 'email','celular','cidade']
//     inputs.forEach((elemento)=> {
//         document.getElementById(elemento).value = ""
//     })
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}
const saveClient = () => {
    if (isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
        closeModal()
       
        console.log('Cadastrando cliente....')
    } else {
        console.log('Preencha todos os campos antes de salvar....')
    }
    updateTable()
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `<td>${client.nome}</td>
                        <td>${client.email}</td>
                        <td>${client.celular}</td>
                        <td>${client.cidade}</td>
                        <td>
                            <button type="button" class="button green" data-action="${index}-edit">Editar</button>
                            <button type="button" class="button red" data-action="${index}-delete">Excluir</button>
                        </td>`
    document.querySelector('#tableClient>tbody').appendChild(newRow)                    
}

const clearTable = () => {
    const table = document.querySelector('#tableClient>tbody').innerHTML = ""
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

updateTable()

const editDelete = (event) => {
    // console.log(event.target)
    if(event.target.type == 'button'){
        const alvo = event.target
        // console.log(alvo)
        const acao = alvo.dataset.action
        console.log(acao)
        const [indice, action] = acao.split('-')
        console.log(indice)
        console.log(action)
        const bancoDeDados = readClient()
        if(action == 'delete'){
            console.log(`${action} o registro ${indice}`)
            bancoDeDados.splice(indice,1)
            setLocalStorage(bancoDeDados)
            updateTable()
        }else {
            console.log(`${action} o registro ${indice}`)
        }
    }
}


// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody').addEventListener('click', editDelete)


document.getElementById('cancelar')
    .addEventListener('click', closeModal)