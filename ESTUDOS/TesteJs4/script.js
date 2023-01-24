const resposta = document.querySelector('div.resposta')
const arrayNum = []

function add() {
    const numeroFormulario = document.querySelector('input#num')
    const valor = Number(numeroFormulario.value)

    arrayNum.push(valor)
    numeroFormulario.value = ""
    numeroFormulario.focus()

    if (somar(arrayNum)>= 20){
        const btnVerResulado = document.querySelector('.oculto')
        btnVerResulado.setAttribute('style', 'display: inline-block')
    }
    
}

function somar(arrayNum){
    let soma = 0
    for(i in arrayNum){
        soma += arrayNum[i]
    }
    return soma
}

function verResultado(){
    const somatorio = somar(arrayNum)
    resposta.innerHTML = `A soma dos valores é: ${somatorio}`
}


function verificar(){
    const textoInput = document.querySelector('input#texto').value
    const textoInputMinisculo = textoInput.trim().toLowerCase()
    
    const listatxt = []
    listatxt.push(textoInputMinisculo)
    console.log(listatxt)
    
}