function gerarTabuada() {
    let numero = Number(prompt(`[Digite um número entre 0 e 99]`))
    const tabuada = document.querySelector('ul#tabuada-m')
    const txtBotao = document.querySelector('input#btn')
    txtBotao.value = "Gerar Outra Tabuada"
    tabuada.innerHTML= ""
    const tabuadaS = document.querySelector('ul#tabuada-s')
    tabuadaS.innerHTML= ""
    
    if (numero == "") {
        alert(`Dados inválidos`)
        tabuada.setAttribute("style", "border: none") //remove a borda
    } else {
        
        let contador = 1
        const operacaoM = document.querySelector('p#operacao-m')
                while (contador <=10){
                    
                    tabuada.setAttribute("style", "border: solid") //define uma borda
                    const item1 = document.createElement('li')
                    item1.textContent = `${numero}x${contador}=${numero*contador}`
                    tabuada.appendChild(item1)
                    contador++
                }
        operacaoM.innerHTML = `Multiplicação`
        
        let contador2 = 1
        const operacaoS = document.querySelector('p#operacao-s')
                while (contador2 <=10){
                    
                    tabuadaS.setAttribute("style", "border: solid") //define uma borda
                    const item2 = document.createElement('li')
                    item2.textContent = `${numero}+${contador2}=${numero+contador2}`
                    tabuadaS.appendChild(item2)
                    contador2++
                }
        operacaoS.innerHTML = `Soma`
                
    }

    

    
    

}