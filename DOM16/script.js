function verificar() {
    
    const anoAtual = new Date().getFullYear() //pegar o ano atual do sistema com 4 digitos (FullYear)
    const anoForm = Number(document.querySelector('input#anoForm').value) //pegar o valor contido no campo anoForm convertido para numero.
    const generoForm = document.getElementsByName('generoForm') //pegar as duas opções radio do genero (array: posição 0 masc posição 1 fem)
    const msg = document.querySelector('div#msg') //pegar a div com id igual a msg
            // testar se o campo ano nascimento (anoForm) está preenchi e com valores entre 1990 e no anoAtual
            if (anoForm == "" || anoForm < 1900 || anoForm > anoAtual){
                //trocar a mensagem e informar o erro ao usuário
                msg.innerHTML = `Preencha <strong>Ano Nascimento</strong> entre 1900 e ${anoAtual}.`
                foto.src = '../DOM09/assets/fecundacao.jpg'
                const p = document.querySelector('p#percent')
                p.innerHTML = `<small>Progresso da vida (0%) [Aguardando nascimento] </small>`
                document.body.style.backgroundColor = '#BBD6F7'
            } else {
                alterarProgresso()
                const linhasHorizontais = document.getElementsByTagName('hr')
                const barrainferior = document.querySelector('div.barra')
                barrainferior.setAttribute('style', 'width: 300px')
                barrainferior.setAttribute('style', 'heigth: 20px')
                let genero //variável genero definida como vazia
                const foto = document.querySelector('img#foto')
                const idade = anoAtual - anoForm //calcular a idade

               /* if(idade < 0 || anoForm > anoAtual){
                    foto.src = '../DOM09/assets/secreto.jpg'
                    document.body.style.backgroundColor = '#BBD6F7'
                } else {

                }

                    */

                    //verificar se o genero é masc ou fem testando o generoForm na posição [0]
                    if (generoForm[0].checked) { //se tiver checado o primeiro radio então é masc, senão é fem
                        genero =  'homem'
                        barrainferior.setAttribute('style', 'background-color: blue')
                        document.body.style.color = 'blue'
                        //trocar foto de acordo com a faixa de idade
                        if(idade < 4){
                            foto.src = '../DOM09/assets/foto-bebe-m.png'
                            document.body.style.backgroundColor = '#BBD6F7'
                        } else if (idade < 13) {
                            foto.src = '../DOM09/assets/foto-crianca-m.png'
                            document.body.style.backgroundColor = '#9F9395'
                        } else if (idade < 29){
                            foto.src = '../DOM09/assets/foto-jovem-m.png'
                            document.body.style.backgroundColor =  '#9CB0CC'
                        } else if (idade < 42) {
                            foto.src = '../DOM09/assets/foto-adulto30-m.png'
                            document.body.style.backgroundColor = '#C2CFFC'
                        } else if (idade < 52) {
                            foto.src = '../DOM09/assets/foto-adulto45-m.png'
                            document.body.style.backgroundColor = '#44444E'
                        } else if (idade < 65) { 'BBD6F7'
                            foto.src = '../DOM09/assets/foto-adulto55-m.png'
                            document.body.style.backgroundColor = '#C0BCB9'
                        } else if (idade <= anoAtual - 1900){
                            foto.src = '../DOM09/assets/foto-idoso-m.png'
                            document.body.style.backgroundColor =  '#DED1B4'
                        }

                    } else {
                        genero =  'mulher'
                        barrainferior.setAttribute('style', 'background-color: rgb(211, 58, 185')
                        document.body.style.color = 'rgb(211, 58, 185)'
                        
                        if(idade < 4){
                            foto.src = '../DOM09/assets/foto-bebe-f.png'
                            document.body.style.backgroundColor = '#E83375'
                        } else if (idade < 13) {
                            foto.src = '../DOM09/assets/foto-crianca-f.png'
                            document.body.style.backgroundColor = 'BBD6F7'
                        } else if (idade < 29){
                            foto.src = '../DOM09/assets/foto-jovem-f.png'
                            document.body.style.backgroundColor = '#333239'
                        } else if (idade < 42) {
                            foto.src = '../DOM09/assets/foto-adulto30-f.png'
                            document.body.style.backgroundColor = '#4E819C'
                        } else if (idade < 52) {
                            foto.src = '../DOM09/assets/foto-adulto45-f.png'
                            document.body.style.backgroundColor = '#84A36E'
                        } else if (idade < 65) {
                            foto.src = '../DOM09/assets/foto-adulto55-f.png'
                            document.body.style.backgroundColor = '#363636'
                        } else if (idade <= anoAtual - 1900){
                            foto.src = '../DOM09/assets/foto-idoso-f.png'
                            document.body.style.backgroundColor = '#DFE0E9'
                        }
                    }
                if(idade <=1){
                    msg.innerHTML = `Detectamos ${genero} com ${idade} ano.`
                }else {
                    msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                }
            }

}

//
function alterarProgresso() {
    const anoAtual = new Date().getFullYear() //pegar o ano atual do sistema com 4 digitos (FullYear)
    const anoForm = Number(document.querySelector('input#anoForm').value) //pegar o valor contido no campo anoForm convertido para numero.
    const idade = anoAtual - anoForm //calcular a idade
    const progresso = document.querySelector('.barra div')
    const p = document.querySelector('p#percent')
    const porcentagemIdade = (idade * 100)/(anoAtual-1900)
    progresso.setAttribute("style", "width: " + porcentagemIdade +"%")
    p.innerHTML = `${porcentagemIdade.toFixed(0)}%`
}
