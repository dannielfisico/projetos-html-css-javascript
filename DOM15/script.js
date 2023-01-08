function verificar() {
    const anoAtual = new Date().getFullYear()
    const anoFormulario = Number(prompt(`Informe o ano de nascimento.`))
    const idade = anoAtual - anoFormulario
    const generoFormulario = genero()
    const msg = document.querySelector('p#msg')
    const foto = document.querySelector('img#foto')
    
    

    
        if (anoFormulario > anoAtual || anoFormulario == "" || anoFormulario < 1900){
            msg.innerHTML = `Impossivel verificar. <br> O Ano de nascimento tem que está entre <strong>1900</strong> e o ano atual [<strong>${anoAtual}</strong>].`
        } else {
            
                    if (idade <= 1 && generoFormulario == 'homem') {
                        msg.innerHTML = `Detectamos um ${generoFormulario} com ${idade} ano.`
                        foto.src = '../DOM09/assets/foto-bebe-m.png' 
                    } else {
                        msg.innerHTML = `Detectamos um ${generoFormulario} com ${idade} anos.`}
                        foto.src = '../DOM09/assets/foto-bebe-f.png'
                        
                    if (idade <4 && generoFormulario == 'homem'){                       
                       foto.src = '../DOM09/assets/foto-bebe-m.png'                        
                    } else if (idade <4 && generoFormulario == 'mulher'){
                        // foto.setAttribute('src', '../DOM09/assets/foto-bebe-f.png')
                        foto.src = '../DOM09/assets/foto-bebe-f.png'
                    }
                    
                    if (idade <13 && generoFormulario == 'homem'){                       
                        foto.src = '../DOM09/assets/foto-crianca-m.png'                        
                     } else if (idade <13 && generoFormulario == 'mulher'){
                         foto.setAttribute('src', '../DOM09/assets/foto-crianca-f.png')
                         // foto.src = '../DOM09/assets/foto-bebe-f.png
                    }
            
}


//Verificar se é masc ou fem
function genero(){
    if (document.getElementsByName('genero')[0].checked){
        return 'homem'
    } else {
        return 'mulher'
    }
}


