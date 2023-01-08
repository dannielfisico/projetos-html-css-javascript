function verificar() {
    const altura = Number(document.querySelector('input#altura').value)
    const peso = Number(document.querySelector('input#peso').value)
    const imc = peso/Math.pow(altura,2)
    const foto = document.querySelector('img#foto')
    const resposta = document.querySelector('.resultado')
    const aviso = document.querySelector('.aviso')
    resposta.innerHTML = `Seu <abbr title="Índice de Massa Corporal">IMC</abbr> é: ${imc.toFixed(2)} kg/m².`
    if(imc < 18.5){
        foto.src = "../assets/abaixo-do-peso.png"
        aviso.innerHTML = `<strong>Atenção:</strong> Você está abaixo do peso.`
        
    } else if (imc < 24.9){
        foto.src = "../assets/peso-normal.png"
        aviso.innerHTML = `<strong>Atenção:</strong> Você está com peso normal.`
    } else if (imc < 29.9){
        foto.src = "../assets/sobrepeso.png"
        aviso.innerHTML = `<strong>Atenção:</strong> Você está com sobrepeso.`
    } else if (imc < 34.9){
        foto.src = "../assets/obesidade-grau1.png"
        aviso.innerHTML = `<strong>Atenção:</strong> Você está com obesidade grau 1.`
    } else if (imc < 39.9){
        foto.src = "../assets/obesidade-grau2.png"
        aviso.innerHTML = `<strong>Atenção:</strong> Você está com obesidade grau 2.`
    } else{
        foto.src = "../assets/obesidade-grau3.png"
        aviso.innerHTML = `<strong>Atenção:</strong> Você está com obesidade grau 3 ou mórbida.`
    }
}