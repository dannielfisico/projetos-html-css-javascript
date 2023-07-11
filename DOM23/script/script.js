document.addEventListener('DOMContentLoaded',()=>{
    let alunos = 0
    const btnSalvar = document.querySelector('#btnSalvar')

    function salvarAluno(e){
        const aluno = document.querySelector('#aluno')
        if(aluno.value.length >=3){
            console.log(aluno.value) 
        e.preventDefault()
        aluno.value = ""
        }

        
    }
    btnSalvar.addEventListener('click', salvarAluno)
})