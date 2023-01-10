function postar() {
    const concordo = document.querySelector('input#concordo')
    if (concordo.checked){
    const nomePontoTuristico = document.querySelector('input#nome')
    const descricao = document.querySelector('input#descricao')
    const url = document.querySelector('input#url')
    const relacao = document.getElementsByName('rel')
    //criação dos elementos do Álbum dinamicamente
    const publicacao = document.querySelector('div#album')
    // publicacao.setAttribute('style', 'border-style: solid')
    const album = document.createElement('section')
    publicacao.appendChild(album)
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
    txtnome.innerHTML = nomePontoTuristico.value
    txtdescricao.innerHTML = descricao.value
    txtRelacao.innerHTML = suaRelacao
/*
    Apagar os dados dos campos do formuláro
    e desmarcar a caixa concordo*/
    nomePontoTuristico.value = ""
    descricao.value = ""
    url.value = ""
    relacao[0].checked = true
    concordo.checked = false
    nomePontoTuristico.focus()  


/*Caso a caixa Concordo não esteja marcada, irá aparecer esse alerta */
    } else {
        alert(`Concorde com os termos antes de postar!`)
    }
     
    

}