const tabuleiro = ["", "", "", "", "", "", "", "", ""];
const simbolos = ["X", "O"];
let jogador = 0;

const telaGameOver = document.querySelector('.game-over')
const gameOverH3 = document.querySelector('.game-over h3')
const btnJogarNovamente = document.querySelector('.btnJogarNovamente').addEventListener('click', () =>  document.location.reload())
const celulas = document.querySelectorAll(".square");

const eCampeao = () => {
    const combinações = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]

    for(let i = 0; i < combinações.length; i++){
        let sequencia = combinações[i]

        let posição0 = sequencia[0]
        let posição1 = sequencia[1]
        let posição2 = sequencia[2]

        if(tabuleiro[posição0] == tabuleiro[posição1] && tabuleiro[posição0] == tabuleiro[posição2] && tabuleiro[posição0] != ""){
            return true
        }
    }
    return false
}

const eEmpate = () => {
  if(!eCampeao() && tabuleiro.indexOf("") == -1){
    console.log('empate')
    telaGameOver.classList.toggle('hidden')
    
      gameOverH3.innerHTML = `Empate!`
  }
}
celulas.forEach((celula) => {
  celula.addEventListener("click", (e) => {
    tabuleiro[e.target.dataset.i] = simbolos[jogador]
    e.target = celula.innerHTML = simbolos[jogador];
    if(eCampeao()){
      telaGameOver.classList.toggle('hidden')
      gameOverH3.innerHTML = `${simbolos[jogador]} venceu!`
      console.log('jogo encerrado!')
    }
    eEmpate()
    jogador = jogador == 0 ? 1:  0;
  },{once: true}) ;
  
});

