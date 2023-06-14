const jogadasFeitas = ["","","","","","","","",""]
let jogadorAtual = 0
const simbolos = ["X", "O"]
let idJogada = ""
let jogadasRealizadas = 0
let gameOver = false

document.addEventListener("DOMContentLoaded", ()=> {
    const celulas = document.querySelectorAll(".celula")
    celulas.forEach(celula => {
        celula.addEventListener("click", ondeClicou => {
            if(gameOver){
                return
            }

            console.log(ondeClicou.target.id)
            idJogada = ondeClicou.target.id
            if(jogadasFeitas[idJogada] == ""){
                if(gameOver){
                    return
                }

                jogadasRealizadas++
                const txtUltima = document.querySelector(".ultima-jogada")
                txtUltima.innerHTML = `Última Jogada foi de: ${simbolos[jogadorAtual]}`
                const txtRealizadas = document.querySelector(".jogadas-realizadas")
                txtRealizadas.innerHTML = `Jogadas Realizadas: ${jogadasRealizadas}`
                jogadasFeitas[idJogada] = simbolos[jogadorAtual]
                console.log(jogadasFeitas)
                celula.innerHTML = `${simbolos[jogadorAtual]}`
               
                if(jogadasRealizadas >4){
                    gameOver = eCampeao()
                    const txtVencedor = document.querySelector('.resultado')
                    txtVencedor.innerHTML= `Vencedor: ${simbolos[jogadorAtual]}`
                }

                
               
                trocarDeJogador()
               

                
               
                
                    
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

function fimDoJogo(){
    return eCampeao()
}

function eCampeao(){

    const possibilidades = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < possibilidades.length; i++){
        let sequencia = possibilidades[i]

        let pos1 = sequencia[0]
        let pos2 = sequencia[1]
        let pos3 = sequencia[2]

        if( jogadasFeitas[pos1] == jogadasFeitas[pos2]  && jogadasFeitas[pos2] == jogadasFeitas[pos3] && jogadasFeitas[pos1] != ""){
            return true
        }
    }

    return false
}