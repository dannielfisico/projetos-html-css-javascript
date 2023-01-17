/*
function verificar() {
    const frase = document.querySelector('input#frase').value
    const fraseSemEspaco = frase.split(" ").join("")
    const resp = document.querySelector('div#resp')
    // resp.innerHTML = `Compare: <b>${fraseSemEspaco}<b> | `
    const invertida = document.createElement('bdo')
    invertida.setAttribute('dir', 'rtl')
    invertida.setAttribute('id','invertida')
    invertida.innerText = fraseSemEspaco
    const invertidaConteudo = invertida.textContent
    const a = fraseSemEspaco
    const b = invertidaConteudo
    const v = a == b
    alert(v)
    // resp.appendChild(invertida)
    
    
}
*/

function verificar() {
    const frase = document.querySelector('input#frase').value 
    const fraseSemEspaco = frase.split(" ").join("")
    const a1 = document.querySelector('p#a1')
    const a2 = document.querySelector('p#a2')
    a1.innerHTML = fraseSemEspaco
    const invertida = document.createElement('bdo')
    invertida.setAttribute('dir', 'rtl')
    invertida.setAttribute('id','invertida')
    invertida.innerText = fraseSemEspaco 
    a2.innerHTML = invertida.textContent

}


function reverseString(str){
    return str
}

console.log(reverseString('Daniel'))
