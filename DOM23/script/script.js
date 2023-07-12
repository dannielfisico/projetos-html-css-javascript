document.addEventListener('DOMContentLoaded',()=>{
    let posicao = localStorage.length
    const maximo = 5
    const nomeAlunos = []
    const lista = document.querySelector('.lista')

        for(i = 0; i < localStorage.length; i++){
            nomeAlunos[i] = localStorage.getItem(`Aluno${i+1}`)
            lista.innerHTML += `<li>${i+1}.${nomeAlunos[i]}</li> `
            
        }
    const btnSalvar = document.querySelector('#btnSalvar')
    
    const totalAlunos = document.querySelector('#total')
    totalAlunos.innerHTML = localStorage.length
    console.log(localStorage.length)
    let texto = document.querySelector('#aluno')
        if(localStorage.length < 30){
            texto.removeAttribute('disabled')
        }
    // texto.addEventListener('input', () => {
    //     let situation = true
    //     if(texto.value.length >=3 && texto.value.trim() != ""){
    //         situation = false
    //         btnSalvar.disabled = situation
    //         situation = true
    //     } else {
    //         btnSalvar.disabled = situation
    //     }
        
    // })
    texto.onkeyup = () =>{
        texto.value = texto.value.toUpperCase()
        let situcao = true
        if(texto.value.length >=3){
            situcao = false
            btnSalvar.disabled = situcao
            situcao = true
        } else {
            btnSalvar.disabled = situcao
        }
    }
   
    
   
    

    function salvarAluno(e){
        const aluno = document.querySelector('#aluno')
        if(aluno.value.length >=3){
            
            if(localStorage.length >=`${maximo}`){
                alert(`O máximo de alunos nessa turma é ${maximo}`)
                aluno.value = ""
                texto.toggleAttribute('disabled')
                btnSalvar.toggleAttribute('disabled')
                return
            }
            // console.log(aluno.value)
            if(nomeAlunos.indexOf(aluno.value) == -1){
                nomeAlunos[posicao] = aluno.value
                console.log(nomeAlunos)
                posicao++
                localStorage.setItem(`Aluno${posicao}`, aluno.value)
                lista.innerHTML += `<li>${posicao}.${nomeAlunos[posicao-1]}</li> `                
            } else {
                alert('Já cadastrado')
            }
            
            e.preventDefault()
            totalAlunos.innerHTML = localStorage.length
            aluno.value = ""
            aluno.focus()
        }
        
        
    }
    btnSalvar.addEventListener('click', salvarAluno)
    texto.addEventListener('keypress', function(evento){
        if(evento.key === 'Enter'){
            evento.preventDefault()
            btnSalvar.click()
            
        }
    })

    
})