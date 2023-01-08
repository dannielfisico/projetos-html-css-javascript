function verificar(){
    
    var anoAtual= new Date().getFullYear() //ano completo com 4 digitos
    var formulario_ano = document.querySelector('input#txtano').value
    var res = document.querySelector('div#res')
    if (formulario_ano == '' || formulario_ano > anoAtual || formulario_ano < 1900){
        alert('erro')
    }  else {
        var formulario_genero = document.getElementsByName('radgenero')
        var idade = anoAtual - Number(formulario_ano)
        var genero
        var foto = document.querySelector('img#foto')
        if (formulario_genero[0].checked){
            genero = 'homem'
            if (idade < 4) {
                foto.src = "./assets/foto-bebe-m.png"
            } else if (idade <= 13){
                foto.src = "./assets/foto-crianca-m.png"
            } else if (idade <= 29){
                foto.src = "./assets/foto-jovem-m.png"
            }else if (idade <= 43){
                foto.src = "./assets/foto-adulto30-m.png"
            } else if (idade <= 58){
                foto.src = "./assets/foto-adulto45-m.png"
            }else if (idade <= 150){
                foto.src = "./assets/foto-idoso-m.png"
            }
        } else {
            genero = 'mulher'
            if (idade < 4) {
                foto.src = "./assets/foto-bebe-f.png"
            } else if (idade <= 13){
                foto.src = "./assets/foto-crianca-f.png"
            } else if (idade <= 29){
                foto.src = "./assets/foto-jovem-f.png"
            }else if (idade <= 43){
                foto.src = "./assets/foto-adulto30-f.png"
            } else if (idade <= 58){
                foto.src = "./assets/foto-adulto45-f.png"
            }else if (idade <= 150){
                foto.src = "./assets/foto-idoso-f.png"
            }
            
        }
        
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    }

    
}