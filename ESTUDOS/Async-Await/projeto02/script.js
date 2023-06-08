//#region 
function pegarUsuario(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch(err => console.log(err))
}

async function mostarUsuario(){
    
    try {
        const identificador = document.getElementById('txtId').value
        const usuario = await pegarUsuario(identificador)
        const info = document.getElementById('info')
        console.log(pegarUsuario(identificador))
        console.log(`O usuário é: ${usuario.data.first_name}`)
        document.getElementById("perfil").src = usuario.data.avatar
        document.getElementById('legenda').innerHTML = `${usuario.data.first_name}`
        const lista = document.createElement('ul')
        lista.setAttribute('id','listaOrdenada')
        info.appendChild(lista)
        const item = document.createElement('li')
        lista.appendChild(item)
        item.innerHTML = `Nome completo: ${usuario.data.first_name} ${usuario.data.last_name}`
        const item2 = document.createElement('li')
        lista.appendChild(item2)
        item2.innerHTML = `E-mail: ${usuario.data.email}`
        
    } catch {
        alert(`Identificador não existente até o momento`)
    }
}



//#endregion