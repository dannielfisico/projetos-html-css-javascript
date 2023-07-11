document.addEventListener('DOMContentLoaded',()=>{
    let posicao = localStorage.length
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
    const texto = document.querySelector('#aluno')
    texto.addEventListener('input', () => {
        let situation = true
        if(texto.value.length >=3 && texto.value.trim() != ""){
            situation = false
            btnSalvar.disabled = situation
            situation = true
        } else {
            btnSalvar.disabled = situation
        }
        
    })
    
    

    function salvarAluno(e){
        const aluno = document.querySelector('#aluno')
        if(aluno.value.length >=3){
            
            if(localStorage.length >=30){
                alert('O máximo de alunos nessa turma é 30')
                aluno.value = ""
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
        }
        aluno.focus()
        
    }
    btnSalvar.addEventListener('click', salvarAluno)

    
})