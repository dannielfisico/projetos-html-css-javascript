function postar() {
    const concordo = document.querySelector('input#concordo')
    if (concordo.checked){


    const nomePontoTuristico = document.querySelector('input#nome').value
    const descricao = document.querySelector('input#descricao').value
    const url = document.querySelector('input#url').value
    const relacao = document.getElementsByName('rel')
    //criação dos elementos do Álbum dinamicamente
    const album = document.querySelector('div#album')
    album.setAttribute('style', 'border-style: solid')
    const foto = document.createElement('img')
    album.appendChild(foto)
    const txtnome = document.createElement('p')
    const txtdescricao = document.createElement('p')
    album.appendChild(txtnome)
    album.appendChild(txtdescricao)
    const txtRelacao = document.createElement('p')
    album.appendChild(txtRelacao)
    let suaRelacao = "Já fui"
        if (relacao[1].checked) {
            suaRelacao = 'Não conheço.'
        } else if(relacao[2].checked){
            suaRelacao =  'Nunca irei.'
        } 

    foto.setAttribute('src', url)
    txtnome.innerHTML = nomePontoTuristico
    txtdescricao.innerHTML = descricao
    txtRelacao.innerHTML = suaRelacao

    } else {
        alert(`Concorde com os termos antes de postar!`)
    }
    
    



}