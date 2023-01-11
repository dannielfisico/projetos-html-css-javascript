const listaAdd = [] //um array vazio para armazenar os  números
let viuResultado = false
const botoesOcultos = document.getElementsByClassName('oculto')
function add(){
    
    
    const numForm = document.querySelector('input#num') /*Captura e armazena nessa variável o input com id num*/
    if (numForm.value == ""){
        alert(`Digite valores antes de adicionar!`)
    } else {
        botoesOcultos[0].setAttribute('style','display: inline-block')
        listaAdd.push(numForm.value)
        const listaAddCrescente = listaAdd.sort((a,b) => a - b)
        numForm.value = ""
        numForm.setAttribute('placeholder',"Digite outro número")
        numForm.focus()
    }
 
}

function verResultado(){
    viuResultado = true
    if (viuResultado){
        botoesOcultos[1].setAttribute('style','display: inline-block')
    }
    if (listaAdd.length == 0) {
        alert('Adicione valores')
    } else {
    const respHTML = document.querySelector('ul.resposta')
    respHTML.innerHTML = ""

    const valoresCrescente = document.createElement('li')
    respHTML.appendChild(valoresCrescente)
    valoresCrescente.textContent = `Os valores digitados são: [${listaAdd}]`

    const MenorValor = document.createElement('li')
    respHTML.appendChild(MenorValor)
    MenorValor.textContent = `O menor valor é ${listaAdd[0]}.`

    const MaiorValor = document.createElement('li')
    respHTML.appendChild(MaiorValor)
    MaiorValor.textContent = `O maior valor é ${listaAdd[listaAdd.length -1]}.`

    const MediaValores = document.createElement('li')
    respHTML.appendChild(MediaValores)
    MediaValores.textContent = `A média entre eles é:   a calcular...`
    }
    
    
}

function limpar(){
    const respHTML = document.querySelector('ul.resposta')
    respHTML.innerHTML = ""
}