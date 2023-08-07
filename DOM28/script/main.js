const tempClient = {
    nome: "Bia3",
    telefone: "(44) 9 8521-9863",
    email: "bia12@gmail.com",
    cidade: "Barueri"
}


const createCliente = (client) => {
    const dbClient =  JSON.parse(localStorage.getItem('dbClient')) ?? []
    dbClient.push = client
    localStorage.setItem('dbClient', JSON.stringify(dbClient))

}

createCliente(tempClient)
