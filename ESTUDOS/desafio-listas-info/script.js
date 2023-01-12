let listaAdd = [] //um array vazio para armazenar os  números (Atenção: Defini essa variavel com let para que ela seja sobrescria lá na função limparDados)
let viuResultado = false
const botoesOcultos = document.getElementsByClassName('oculto')
function add(){
    limparConsole()
    botoesOcultos[1].setAttribute('style','display: none')
    botoesOcultos[2].setAttribute('style','display: none')
    const numForm = document.querySelector('input#num') /*Captura e armazena nessa variável o input com id num*/
    if (numForm.value == ""){
        alert(`Digite valores antes de adicionar!`)
    } else {
        botoesOcultos[0].setAttribute('style','display: inline-block')
        listaAdd.push(numForm.value)
        const listaAddCrescente = listaAdd.sort((a,b) => a - b)
        numForm.value = ""
        numForm.setAttribute('placeholder',"Digite outra nota")
        numForm.focus()
    }
}

function verResultado(){
    viuResultado = true
    if (viuResultado){
        botoesOcultos[1].setAttribute('style','display: inline-block')
        botoesOcultos[2].setAttribute('style','display: inline-block')
    }
    if (listaAdd.length == 0) {
        alert('Adicione valores')
    } else {
    const tot = listaAdd.length //total de números na lista
    const tipotot = typeof tot
    let soma = 0
    const tiposoma = typeof soma
    for (let cont = 0; cont < listaAdd.length; cont++){
        soma += Number(listaAdd[cont])
    }


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

    const totalDeNumeros = document.createElement('li')
    respHTML.appendChild(totalDeNumeros)
    totalDeNumeros.textContent = `Você inforou ${tot} número(s).`
    
    const SomaValores = document.createElement('li')
    respHTML.appendChild(SomaValores)
    SomaValores.textContent = `A soma dos valores é: ${soma} `

    const MediaValores = document.createElement('li')
    respHTML.appendChild(MediaValores)
    MediaValores.textContent = `A média entre eles é: ${soma/tot}`
    }
    
    
}

function limparConsole(){
    const respHTML = document.querySelector('ul.resposta')
    respHTML.innerHTML = ""
}

//pega o ano do sistema e compara com a resposta que o usuário fornece
function limparDados(){
    const charada = prompt('Para limpar os dados responda em que ano estamos.')
    const anoAtual = new Date().getFullYear()
    if(charada == anoAtual){
        listaAdd = []
        const respHTML = document.querySelector('ul.resposta')
        respHTML.innerHTML = ""
        botoesOcultos[0].setAttribute('style','display: none')
        botoesOcultos[1].setAttribute('style','display: none')
        botoesOcultos[2].setAttribute('style','display: none')
        alert('Ai sím hein! Apagou foi tudo. ')

    } else {
        alert('Os dados não foram apagados!')
    }
}

//Com essa função o usuário é questionado duas vezes antes de os dados serem apagados
function limparDadosAlternativa(){
    const anoAtual = new Date().getFullYear()
    const pergunta1 = "Para limpar os dados informe em que ano você nasceu."
    const pergunta2 = `Quantos anos você completará agora em ${anoAtual}?`
    const anoNascimento = prompt(pergunta1)
    const idadePrompt = prompt(pergunta2)
    const idadeVerdadeira = anoAtual-anoNascimento 
    if(idadeVerdadeira == idadePrompt){
        listaAdd = []
        const respHTML = document.querySelector('ul.resposta')
        respHTML.innerHTML = ""
        botoesOcultos[0].setAttribute('style','display: none')
        botoesOcultos[1].setAttribute('style','display: none')
        botoesOcultos[2].setAttribute('style','display: none')
        alert('Ai sím hein! Apagou foi tudo.')

    } else {
        alert('Os dados não foram apagados!')
    }
    
}



/*inicio da soma dos valores contidos no array 

function somar() {
    // const example = listaAdd.value
    var somatorio = 0
    for (let cont = 0; cont < listaAdd.length; cont++){
        somatorio += listaAdd[cont]
    }
    return somatorio
}

/*
const mostrarResultado = somar()
console.log(mostrarResultado)
*/

