const btnWhatsapp = document.querySelector(".btnWhatsapp")

function mostarbtnWhatsapp(){
    setInterval(() => {
        btnWhatsapp.style.display = "block" 
    }, 5000);
}
mostarbtnWhatsapp()
/*################### VARIAVEIS #######################*/
const tabuleiro = ["","","", "","","", "","",""]
let jogadorAtual = 0
const simbolos = ["X", "O"]



const celulas = document.querySelectorAll(".celula")

celulas.forEach(celula => {
    celula.addEventListener('click', clicou, {once: true})
})

function clicou(celula){
    celula.target.innerHTML = simbolos[jogadorAtual]
    tabuleiro[celula.target.id] = simbolos[jogadorAtual]
    
    if(!eCampeao()){ //se não é campeao, troca jogador
        trocarJogador()
    } else {
        document.querySelector(".telaResultado").style.display = 'flex'
        document.querySelector(".telaResultado h1").innerHTML = `${simbolos[jogadorAtual]} Venceu!`
    }
    eEmpate()
    console.log(qtdJogadas)
}

function trocarJogador(){
    if(jogadorAtual == 0){
        jogadorAtual = 1
        
    }else {
        jogadorAtual = 0
    }
}

function eCampeao(){
    const combinacoes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ] 

    for(let i = 0; i < combinacoes.length; i++){
        let sequencia = combinacoes[i]

        let posicao0 = sequencia[0]
        let posicao1 = sequencia[1]
        let posicao2 = sequencia[2]

        if (tabuleiro[posicao0] == tabuleiro[posicao1] && tabuleiro[posicao0] == tabuleiro[posicao2] && tabuleiro[posicao0] != ""){
            return true
        }
    }
    return false
}

function eEmpate(){
    if(!eCampeao() && tabuleiro.indexOf('') == -1){
        document.querySelector(".telaResultado").style.display = 'flex'
        document.querySelector(".telaResultado h1").innerHTML = `EMPATE!`
        
    }

    
}

