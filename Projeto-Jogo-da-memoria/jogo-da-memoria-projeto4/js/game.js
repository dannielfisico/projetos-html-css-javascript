const celulas = document.querySelectorAll('.square')



celulas.forEach((celula) => {
    celula.addEventListener('click', (e) => {
        e.target = celula.innerHTML = 'x'
    })
})