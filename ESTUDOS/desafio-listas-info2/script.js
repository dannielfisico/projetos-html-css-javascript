let listaAdd = [] //um array vazio para armazenar os  números (Atenção: Defini essa variavel com let para que ela seja sobrescria lá na função limparDados)
let viuResultado = false
const botoesOcultos = document.getElementsByClassName('oculto')
function add(){
    limparConsole()
    botoesOcultos[1].setAttribute('style','display: none')
    botoesOcultos[2].setAttribute('style','display: none')
    const numForm = document.querySelector('input#num') /*Captura e armazena nessa variável o input com id num*/
    
    //Verificar se o número já foi inserido no array
    if (listaAdd.indexOf(numForm.value) != -1){
        alert('Já adicionado')
    }else {
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
    let valoresInformados = "👉 "
    const tiposoma = typeof soma
    for (let cont = 0; cont < listaAdd.length; cont++){
        soma += Number(listaAdd[cont])
        valoresInformados += `${listaAdd[cont]} ...`
    }

    const respHTML = document.querySelector('ul.resposta')
    respHTML.innerHTML = ""

    const totalDeNumeros = document.createElement('li')
    respHTML.appendChild(totalDeNumeros)
    totalDeNumeros.textContent = `Você informou ${tot} número(s).`
    
    const valoresCrescente = document.createElement('li')
    respHTML.appendChild(valoresCrescente)
    valoresCrescente.textContent = `Os valores digitados são: ${valoresInformados}`
    
    const MenorValor = document.createElement('li')
    respHTML.appendChild(MenorValor)
    MenorValor.textContent = `O menor valor é ${listaAdd[0]}.`

    const MaiorValor = document.createElement('li')
    respHTML.appendChild(MaiorValor)
    MaiorValor.textContent = `O maior valor é ${listaAdd[listaAdd.length -1]}.`

    
    const SomaValores = document.createElement('li')
    respHTML.appendChild(SomaValores)
    SomaValores.textContent = `A soma dos valores é: ${soma} `

    const MediaValores = document.createElement('li')
    respHTML.appendChild(MediaValores)
    MediaValores.textContent = `A média entre eles é: ${(soma/tot).toFixed(2)}`

    const mensagem = document.createElement('li')
    respHTML.appendChild(mensagem)
    mensagem.textContent = "👈 Essa carinnha ai foi colocada no CSS tá! Vê lá."
    }
    
    
}

function limparConsole(){
    const respHTML = document.querySelector('ul.resposta')
    respHTML.innerHTML = ""
    botoesOcultos[1].setAttribute('style','display: none')
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

function definirCor(){
    const corSelecionada = document.querySelector('input#cor').value
    document.body.style.backgroundColor = corSelecionada

}