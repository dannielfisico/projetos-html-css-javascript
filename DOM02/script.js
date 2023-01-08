function rodar(){
    var texto = document.querySelector('div#area')
    texto.innerHTML = "Rodando..."
}

function sair() {
    var texto3 = document.querySelector('div#area')
    texto3.innerHTML = 'Interaja...'
}

function mover() {
    var texto2 = document.querySelector('div#area')
    texto2.innerHTML = 'Movendo...'
}

function clicar() {
    var texto4 = document.querySelector('div#area')
    texto4.innerHTML = 'Clicou...'
}

function corAmarelo() {
    var q = document.querySelector('div#area')
    q.style.backgroundColor='yellow'
    q.style.color='black'
    var titulo = document.querySelector('h1')
    titulo.innerHTML = "Fundo Amarelo com texto preto."
}

function corAzul() {
    var q = document.querySelector('div#area')
    q.style.backgroundColor='blue'
    q.style.color='yellow'
    var titulo = document.querySelector('h1')
    titulo.innerHTML = "Fundo Azul com texto amarelo."
}

function corVermelho() {
    var q = document.querySelector('div#area')
    q.style.backgroundColor='red'
    q.style.color='white'
    var titulo = document.querySelector('h1')
    titulo.innerHTML = "Fundo Vermelho texto branco."
}