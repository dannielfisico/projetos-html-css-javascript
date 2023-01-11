const listaAdd = [] //um array vazio para armazenar os  números
function add(){
    const numForm = document.querySelector('input#num') /*Captura e armazena nessa variável o input com id num*/
    listaAdd.push(numForm.value)
    const listaAddCrescente = listaAdd.sort((a,b) => a - b)
    numForm.value = ""
    numForm.setAttribute('placeholder',"Digite outro número")
    
    
    




}

function verResultado(){
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

