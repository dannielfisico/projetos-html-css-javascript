function verificar(){
    const frase = document.querySelector('input#frase').value.toLowerCase()
    const resposta = document.querySelector('div#resp')
    const fraseSemEspaco = frase.split(" ").join("")
    const y = reverter(fraseSemEspaco)
    const eFrasePalindromo = fraseSemEspaco.localeCompare(y)
        if(eFrasePalindromo == 0) {
            resposta.innerHTML = `É palindromo`
        } else {
            resposta.innerHTML = `Não é`
        }
}

//esta função inverte a ordem das letras da string str
function reverter(str) {
    return str.split('').reverse().join('')
}


//esse script funciona apenas no node
const aFrase = "Acuda cadela da Leda caduca"
let resposta = ""
const aFraseSemEspaco = (aFrase.split(" ").join("")).toLowerCase()
console.log(aFraseSemEspaco)
const x = reverter(aFraseSemEspaco)
console.log(x)

//verificar se é PALINDROMO
const ePalindromo = aFraseSemEspaco.localeCompare(x)
console.log(ePalindromo)
 if (ePalindromo == 0){
     resposta = `É palindromo`
     
 } else {
     resposta = `Não é`

 }

 console.log(resposta)