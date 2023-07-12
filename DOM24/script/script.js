document.addEventListener('DOMContentLoaded',() => {
    const inputNome = document.querySelector('#inputNome')
    const btnSalvar = document.querySelector('#btnSalvar')
    let contador = 1
    btnSalvar.setAttribute('disabled', true)
    inputNome.addEventListener('input',() =>{
        inputNome.value = inputNome.value.toUpperCase()
        let tamanho = inputNome.value.length
        if(tamanho >=3){
            btnSalvar.removeAttribute('disabled')
        } else {
            btnSalvar.setAttribute('disabled', false)
        }
    })

    btnSalvar.addEventListener('click', (e) => {
            localStorage.setItem(`Nome${contador}`, inputNome.value)
            contador++
            inputNome.value = ""
    } )

    
})