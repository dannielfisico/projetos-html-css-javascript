document.addEventListener('DOMContentLoaded',() => {
    const inputNome = document.querySelector('#inputNome')
    const btnSalvar = document.querySelector('#btnSalvar')
    const btnApagar = document.querySelector('.apagar')
    const info = document.querySelector('.info')
    let contador = localStorage.getItem('Contador') ?? 0
    const pessoas = []
    const lixeira = "🗑️"
    const lapis = "📝"
    

    btnSalvar.setAttribute('disabled', true)

    for(let i = 0; i <= contador; i++){
        const divCliente = document.createElement('div')
        divCliente.setAttribute('class', 'cliente')
        info.appendChild(divCliente)
        let pessoa = document.createElement('p')
        pessoa.innerHTML = localStorage.getItem(`Nomed[i]`)
        divCliente.appendChild(pessoa)
    }
    
    // if(contador >0){
        
        
    // }
    


    
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
            localStorage.setItem('Contador', contador)
            localStorage.setItem(`Nome${contador}`, inputNome.value)
            contador++
            inputNome.value = ""
            

    } )

    
})