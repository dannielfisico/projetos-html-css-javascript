const barra = document.querySelector('div#interna')
const txtnome = document.querySelector('input#name')
const txtemail = document.querySelector('input#email')
const txtsenha = document.querySelector('input#password')

function progresso1(){
    if (txtnome.value.length >=2){
        barra.setAttribute('style', 'width: 20%')
    } 
    
}

function progresso2() {
    
    if (txtemail.value.length >=7){
        barra.setAttribute('style', 'width: 40%')
    } else {
        barra.setAttribute('style', 'width: 0%')
    }
}

function progresso3() {
    
    if (txtsenha.value.length >=8){
        barra.setAttribute('style', 'width: 60%')
    } 
}