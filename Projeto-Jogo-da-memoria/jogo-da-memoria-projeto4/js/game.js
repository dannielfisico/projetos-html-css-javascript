const tabuleiro = ["", "", "", "", "", "", "", "", ""];
const simbolos = ["X", "O"];
let jogador = 0;

const celulas = document.querySelectorAll(".square");

celulas.forEach((celula) => {
  celula.addEventListener("click", (e) => {
    tabuleiro[e.target.dataset.i] = simbolos[jogador]
    e.target = celula.innerHTML = simbolos[jogador];
    jogador = jogador == 0 ? 1:  0;
  },{once: true}) ;
});
