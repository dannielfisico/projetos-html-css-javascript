const quadrado = document.querySelector('.quadrado')
let cor1 = 0 //Canal R
let cor2 = 0 //Canal G
let cor3 = 0 //Canal B
let alfa = 1000 //canal A (alfa transparência em rgba)

function mudarCor1(){
    const cor2atual = cor2
    const cor3atual = cor3
    const alfaAtual = alfa
    const cor1Resp = document.querySelector('span#cor1')
    const cor1Seletor = document.querySelector('input#vermelho').value
    cor1Resp.innerHTML = `(${cor1Seletor})`
    quadrado.setAttribute('style', 'background-color: rgba('+cor1Seletor+','+cor2atual+','+cor3atual+','+ alfaAtual +')')
    cor1 = cor1Seletor
}

function mudarCor2(){
    const cor1atual = cor1
    const cor3atual = cor3
    const alfaAtual = alfa
    const cor2Resp = document.querySelector('span#cor2')
    const cor2Seletor = document.querySelector('input#verde').value
    cor2Resp.innerHTML = `(${cor2Seletor})`
    quadrado.setAttribute('style', 'background-color: rgba('+cor1atual+','+cor2Seletor+','+cor3atual+','+ alfaAtual +')')
    cor2 = cor2Seletor
}

function mudarCor3(){
    const cor1atual = cor1
    const cor2atual = cor2
    const alfaAtual = alfa
    const cor3Resp = document.querySelector('span#cor3')
    const cor3Seletor = document.querySelector('input#azul').value
    cor3Resp.innerHTML = `(${cor3Seletor})`
    quadrado.setAttribute('style', 'background-color: rgba('+cor1atual+', '+cor2atual+','+cor3Seletor+','+ alfaAtual +')')
    cor3 = cor3Seletor
}

function mudarAlfa(){
    const cor1atual = cor1
    const cor2atual = cor2
    const cor3atual = cor3
    const alfaResp = document.querySelector('span#alfa')
    const alfaSeletorValor = document.querySelector('input#alfa').value
    const alfaSeletor = alfaSeletorValor/1000 
    const alfaSeletorPorcento = (alfaSeletorValor/10).toFixed(2)
    alfaResp.innerHTML = `(${(alfaSeletorPorcento)}%)`
    quadrado.setAttribute('style', 'background-color: rgba('+cor1atual+', '+cor2atual+','+cor3atual+','+ alfaSeletor +')')
    alfa = alfaSeletor
}




