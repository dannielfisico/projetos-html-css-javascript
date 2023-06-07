//#region 
function pegarUsuario(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch(err => console.log(err))
}

// async function mostarUsuario(id){
//     const usuario = await pegarUsuario(id)
//     console.log(`O usuário é: ${usuario.data.first_name}`)
// }

// mostarUsuario(3)

//#endregion