document.addEventListener('DOMContentLoaded', () => {
    //criação das variáveis do jogo
    const tabuleiro = ["","","",","","",","",""]
    const simbolos = ["❌","⭕"]
    let jogadorAtual = 0

    const celulas = document.querySelectorAll('.celula')
    celulas.addEventListener('click', fazerJogada, {once: true})

    function fazerJogada(){
        celulas.target
    }
})