const quadrado = document.querySelector('.quadrado')
let cor1 = 0
let cor2 = 0
let cor3 = 0
function mudarCor1(){
    const cor1Resp = document.querySelector('span#cor1')
    const cor1Seletor = document.querySelector('input#vermelho').value
    cor1Resp.innerHTML = `(${cor1Seletor})`
    quadrado.setAttribute('style', 'background-color: rgb('+cor1Seletor+','+cor2+','+cor3+')')
    cor1 = cor1Seletor.value
}

function mudarCor2(){
    const cor2Resp = document.querySelector('span#cor2')
    const cor2Seletor = document.querySelector('input#verde').value
    cor2Resp.innerHTML = `(${cor2Seletor})`
    quadrado.setAttribute('style', 'background-color: rgb('+cor1+','+cor2Seletor+','+cor3+')')
    cor2 = cor2Seletor.value
}

function mudarCor3(){
    const cor3Resp = document.querySelector('span#cor3')
    const cor3Seletor = document.querySelector('input#azul').value
    cor3Resp.innerHTML = `(${cor3Seletor})`
    quadrado.setAttribute('style', 'background-color: rgb('+cor1+', '+cor2+','+cor3Seletor+')')
    cor3 = cor3Seletor.value
}



