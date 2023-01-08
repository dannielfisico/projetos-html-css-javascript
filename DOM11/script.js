
        
        function verificar() {
            let anoAtual = new Date().getFullYear()
            let anoFormulario = Number(document.querySelector('input#anoNascimento').value)
            let idade = anoAtual - anoFormulario
            let info = document.querySelector("p#info")
            let foto = document.querySelector('img#foto')
            
                if (anoFormulario == "" || anoFormulario < 1900 || anoFormulario > anoAtual) {
                        info.innerHTML = `<p>O campo Ano de Nacimento deve está preenchido entre 1900 e o ano atual (${anoAtual}).</p>`
                        foto.src = "../DOM09/assets/erro404_1.gif"
                } else {
                    
                    let genero
                    let generoFoomulario = document.getElementsByName('gen')
                        //Verificar se é masc ou fem sendo que o genero masc já foi definido como checked no HTML
                   
                    if (generoFoomulario[0].checked) { //masc
                        genero = "homem"
                        //foto de masc muda de acordo com a idade
                        if (idade <4){
                            foto.src = "../DOM09/assets/foto-bebe-m.png"
                            document.body.style.backgroundColor = '#C4CBDB'
                        } else if (idade < 14) {
                            foto.src = "../DOM09/assets/foto-crianca-m.png"
                            document.body.style.backgroundColor = '#A39799'
                        } else if (idade < 26) {
                            foto.src = "../DOM09/assets/foto-jovem-m.png"
                            document.body.style.backgroundColor = '#94A7C1'
                        } else if (idade < 40) {
                            foto.src = "../DOM09/assets/foto-adulto30-m.png"
                            document.body.style.backgroundColor = '#CFD7FB'
                        } else if (idade < 55) {
                            foto.src = "../DOM09/assets/foto-adulto45-m.png"
                            document.body.style.backgroundColor= '#5F5C73'
                        } else if (idade < 70) {
                            foto.src = "../DOM09/assets/foto-adulto55-m.png"
                            document.body.style.backgroundColor = '#C3C1C2'
                        } else if (idade < anoAtual - 1900) {
                            foto.src = "../DOM09/assets/foto-idoso-m.png"
                            document.body.style.backgroundColor='#AE8D65'
                        }
                        
                    } else { //fem
                        genero = 'mulher'
                        //foto de fem muda de acordo com a idade
                        if (idade <4){
                            foto.src = "../DOM09/assets/foto-bebe-f.png"
                            document.body.style.backgroundColor = '#F5CEE2'
                        } else if (idade < 14) {
                            foto.src = "../DOM09/assets/foto-crianca-f.png"
                            document.body.style.backgroundColor = '#C9C8C6'
                        } else if (idade < 26) {
                            foto.src = "../DOM09/assets/foto-jovem-f.png"
                            document.body.style.backgroundColor = '#393C41'
                        } else if (idade < 40) {
                            foto.src = "../DOM09/assets/foto-adulto30-f.png"
                            document.body.style.backgroundColor = '#3F6F86'
                        } else if (idade < 55) {
                            foto.src = "../DOM09/assets/foto-adulto45-f.png"
                            document.body.style.backgroundColor = '#729E86'
                        } else if (idade < 70) {
                            foto.src = "../DOM09/assets/foto-adulto55-f.png"
                            document.body.style.backgroundColor = '#7D7D7D'
                        } else if (idade < anoAtual - 1900) {
                            foto.src = "../DOM09/assets/foto-idoso-f.png"
                            document.body.style.backgroundColor = '#CBBBAE'

                        }
                     }
                 if (idade>1){
                    info.innerHTML = `Verificamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                 } else{
                    info.innerHTML = `Verificamos <strong>${genero}</strong> com <strong>${idade}</strong> ano.`}

                }
            
        }