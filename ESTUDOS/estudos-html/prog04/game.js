let simbolo = ["🛡️", "⚔️"]
let jogador = 1
let jogadasFeitas = ["","","","","","","","",""]
let jogadasTabuleiro = ["","","","","","","","",""]
let jogada = 1
let gameOver = false
let evento = 
document.addEventListener("DOMContentLoaded", () => {
    if (!gameOver){
        let celulas = document.querySelectorAll(".celula")
    document.addEventListener('click', (ondeClicou) =>{
        console.log(ondeClicou.target)
        const celulaClicada = ondeClicou.target
        console.log("Celula Clicada: " + celulaClicada.id)
        const celulaClicadaUpdate = document.getElementById(celulaClicada.id)

        const paragrafo =  document.createElement('p')
        paragrafo.innerHTML = simbolo[jogador]
        celulaClicadaUpdate.appendChild(paragrafo)
        
        // Salvar jogadas Feitas
        console.log("Jogada: " + jogada)
        jogadasFeitas[jogada -1] = simbolo[jogador]
        jogada += 1
        console.log(jogadasFeitas)

        //Salvar jogadas Tabuleiro (posição real da jogada)
        jogadasTabuleiro[celulaClicada.id] = simbolo[jogador]
        console.log(jogadasTabuleiro)
        
        //Verificar se há um ganhador
        if (jogadasTabuleiro[0] == jogadasTabuleiro[1] && jogadasTabuleiro[0] == jogadasTabuleiro[2] && jogadasTabuleiro[0] != ""){
            return ganhou()
        } else if (jogadasTabuleiro[3] == jogadasTabuleiro[4] && jogadasTabuleiro[3] == jogadasTabuleiro[5] && jogadasTabuleiro[3] != ""){
            return ganhou()
        } else if (jogadasTabuleiro[6] == jogadasTabuleiro[7] && jogadasTabuleiro[6] == jogadasTabuleiro[8] && jogadasTabuleiro[6] != "") {
            return ganhou()
        } else if (jogadasTabuleiro[0] == jogadasTabuleiro[3] && jogadasTabuleiro[0] == jogadasTabuleiro[6] && jogadasTabuleiro[0] != "") {
            return ganhou()
        } else if (jogadasTabuleiro[1] == jogadasTabuleiro[4] && jogadasTabuleiro[1] == jogadasTabuleiro[7] && jogadasTabuleiro[1] != ""){
            return ganhou()
        } else if (jogadasTabuleiro[2] == jogadasTabuleiro[5] && jogadasTabuleiro[2] == jogadasTabuleiro[8] && jogadasTabuleiro[2] != ""){
            return ganhou()
        } else if (jogadasTabuleiro[0] == jogadasTabuleiro[4] && jogadasTabuleiro[0] == jogadasTabuleiro[8] && jogadasTabuleiro[0] != "") {
            return ganhou()
        } else if (jogadasTabuleiro[6] == jogadasTabuleiro[4] && jogadasTabuleiro[6] == jogadasTabuleiro[2] && jogadasTabuleiro[6] != "") {
            return ganhou()
        }
        
        //mudar jogador
            if (jogador == 1){
                jogador = 0
            } else {
                jogador = 1
            }
})
    } else {
        ganhou()
    }

    
    
})

function ganhou(){
    evento = ""
    gameOver = true
    setTimeout(()=> {
        alert(`Fim de Jogo. O JOGADOR ${simbolo[jogador]} VENCEU!`)
    }),10 //esse setTimeout é para que o alerta aguarde 10 milissegundo para dar tempo de o tabuleiro receber a jogada.
   
}


//Ainda não funciona
function reset() {
    const divis = document.getElementsByClassName('celula')
    let contador = 0
    console.log(divis[0].revove)
    
}