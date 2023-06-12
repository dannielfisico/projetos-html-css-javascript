//iniciar as variáveis do jogo
let simbolos = ["🛡️","🧙"]
let player = 0
let jogadasTabuleiro = ["","","","","","","","",""]


/*#######################################################*/
document.addEventListener('DOMContentLoaded', ()=> {
    
    let celulas = document.querySelectorAll(".celula")

    celulas.forEach(celula => {
        celula.addEventListener('click', movimento)})

})

function movimento(evento){
    console.log(evento.target.id)
    return evento.target.id
    
    
}



