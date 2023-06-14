const jogadasFeitas = ["","","","","","","","",""]
let jogadorAtual = 0
const simbolos = ["X", "O"]
let idJogada = ""
let jogadasRealizadas = 0

document.addEventListener("DOMContentLoaded", ()=> {
    const celulas = document.querySelectorAll(".celula")
    celulas.forEach(celula => {
        celula.addEventListener("click", ondeClicou => {
            console.log(ondeClicou.target.id)
            idJogada = ondeClicou.target.id
            if(jogadasFeitas[idJogada] == ""){
                jogadasRealizadas++
                const txtUltima = document.querySelector(".ultima-jogada")
                txtUltima.innerHTML = `Última Jogada foi de: ${simbolos[jogadorAtual]}`
                const txtRealizadas = document.querySelector(".jogadas-realizadas")
                txtRealizadas.innerHTML = `Jogadas Realizadas: ${jogadasRealizadas}`
                jogadasFeitas[idJogada] = simbolos[jogadorAtual]
                console.log(jogadasFeitas)
                celula.innerHTML = `${simbolos[jogadorAtual]}`

                trocarDeJogador()
                    // if(jogadorAtual == 0){
                    //     jogadorAtual = 1 //Trocar de Jogador
                    
                    // } else {
                    //     jogadorAtual = 0
                    
                    // }
            }

        })
    })
})


function trocarDeJogador(){
    if(jogadorAtual == 0){
        jogadorAtual = 1 //Trocar de Jogador
    
    } else {
        jogadorAtual = 0
    
    }
}