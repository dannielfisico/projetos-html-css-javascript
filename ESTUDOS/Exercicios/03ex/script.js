function verificar() {
    const p1 = document.querySelector('p#p1')
    const p2 = document.querySelector('p#p2')
    const res = document.querySelector('p#res')
    if (p1.textContent == p2.textContent){
        res.innerHTML = `Sim`
    } else {
        res.innerHTML = `Não`
    }
}


function verificar2() {
    const texto = document.querySelector('input#palavra')

}

function trocar(){
    const frase = document.querySelector('h1#a')
    const frasef = document.createElement('h3')
    
    const a = prompt(`Qual palavra da frase deseja trocar?`)
    const b = prompt(`Por qual palavra deseja trocar?`)
    const frase2 = frase.innerHTML.replace(a,b)
    frase.innerHTML = frase2
     
}