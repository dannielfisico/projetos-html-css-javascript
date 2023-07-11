document.addEventListener('DOMContentLoaded',()=>{
    let alunos = 0
    const btnSalvar = document.querySelector('#btnSalvar')

    function salvarAluno(e){
        const aluno = document.querySelector('#aluno')
        console.log(aluno) 
        e.preventDefault()
    }
    btnSalvar.addEventListener('click', salvarAluno,  )
})