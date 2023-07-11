document.addEventListener('DOMContentLoaded',()=>{
    let posicao = localStorage.length
    let nomeAlunos = []
    for(i = 0; i < localStorage.length; i++){
        nomeAlunos[i] = localStorage.getItem(`Aluno${i+1}`)
    }
    const btnSalvar = document.querySelector('#btnSalvar')
    
    const totalAlunos = document.querySelector('#total')
    totalAlunos.innerHTML = localStorage.length
    console.log(nomeAlunos)
    function salvarAluno(e){
        const aluno = document.querySelector('#aluno')
        if(aluno.value.length >=3){
            // console.log(aluno.value)
            if(nomeAlunos.indexOf(aluno.value) == -1){
                nomeAlunos[posicao] = aluno.value
                console.log(nomeAlunos)
                posicao++
                localStorage.setItem(`Aluno${posicao}`, aluno.value)
                
                
            } else {
                alert('Já cadastrado')
            }
            
            e.preventDefault()
            totalAlunos.innerHTML = localStorage.length
            aluno.value = ""
        }

        
    }
    btnSalvar.addEventListener('click', salvarAluno)
})