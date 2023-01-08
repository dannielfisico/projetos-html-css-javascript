function verificar() {
    const altura = Number(document.querySelector('input#altura').value)
    const peso = Number(document.querySelector('input#peso').value)
    const imc = peso/Math.pow(altura,2)
/* inicio da implementação criando elementos dinamicamente com JS*/
    const conteudo = document.querySelector('.conteudo') //capturar a div com class 'conteudo'
    conteudo.innerHTML = ""
    const resultado2 = document.createElement('p') //cria uma variável de parágrado e atribui a resultado2
    resultado2.setAttribute('class', 'resultado2') //seta o atributo class para resultado2
    const foto2 = document.createElement('img')
    foto2.setAttribute('id', 'foto2')
    conteudo.appendChild(foto2)
    conteudo.appendChild(resultado2)
    
/* fim da implementação elementos dinamicamente com JS*/
   
    if (imc < 10) {
        foto2.src = "../assets/morreu.png"
        resultado2.innerHTML = `O <abbr title="Índice de Massa Corporal">IMC</abbr> dessa criatura é: ${imc.toFixed(2)} kg/m². Meus sinceros pêssames.`
    } else if (imc < 18.5){
        foto2.src = "../assets/abaixo-do-peso.png"
        resultado2.innerHTML = `Seu <abbr title="Índice de Massa Corporal">IMC</abbr> é: ${imc.toFixed(2)} kg/m².`

    } else if (imc < 24.9){
        foto2.src = "../assets/peso-normal.png"
        resultado2.innerHTML = `<strong>Atenção:</strong>Seu IMC é ${imc.toFixed(2)}. Você está com peso normal.`
    } else if (imc < 29.9){
        foto2.src = "../assets/sobrepeso.png"
        resultado2.innerHTML = `<strong>Atenção:</strong>Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`
    } else if (imc < 34.9){
        foto2.src = "../assets/obesidade-grau1.png"
        resultado2.innerHTML = `<strong>Atenção:</strong>Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 1.`
    } else if (imc < 39.9){
        foto2.src = "../assets/obesidade-grau2.png"
        resultado2.innerHTML = `<strong>Atenção:</strong>Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 2.`
    } else{
        foto2.src = "../assets/obesidade-grau3.png"
        resultado2.innerHTML = `<strong>Atenção:</strong>Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 3 ou mórbida.`
    }
}