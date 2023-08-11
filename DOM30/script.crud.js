const cliente = new Object();

const pegarDados = () => {
    
    cliente.nome = document.getElementById('nome').value
    cliente.profissão = document.getElementById('profissao').value
    cliente.anoNascimento = document.getElementById('anoNascimento').value
    cliente.idade = new Date().getFullYear() - cliente.anoNascimento
}


console.log(cliente);


// CRUD

//Ler
const lerClientes = () => JSON.parse(localStorage.getItem('MeusClientes')) ?? []
//Enviar Cliente
const enviarCliente = (MeusClientes) => localStorage.setItem('MeusClientes', JSON.stringify(MeusClientes))

const salvarCliente = (novoCliente) => {
    const MeusClientes = lerClientes()
    MeusClientes.push(novoCliente)
    localStorage.setItem('MeusClientes', JSON.stringify(MeusClientes))
}

// salvarCliente(cliente)


const deleteCliente = (index) => {
    const MeusClientes = lerClientes()
    MeusClientes.splice(index,1)
    enviarCliente(MeusClientes)

}


// deleteCliente(0)

const notas = [10, 6, 9, 8]

console.log(`Notas (original): ${notas}`)


