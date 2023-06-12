
document.addEventListener("DOMContentLoaded", () => {
    //Selecionar todas as celulas do tabuleiro
    const celulas = document.querySelectorAll(".celula")
    
    //Adicionar um ouvidor para evento de click e descobrir onde foi clicado
    document.addEventListener('click', (celulaClicada) => {
       celulas.forEach(element => {
            celulaClicada.id
       });
    } )
            
})