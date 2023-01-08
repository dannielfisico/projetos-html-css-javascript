function carregar() {
    var mensagem = document.querySelector('div#mensagem')
    var foto = document.querySelector('img#foto')
    var hora = new Date().getHours()
    switch (hora) {
        case 00: case 01:
            mensagem.innerHTML = `São ${hora} hora. Boa Madrugada!`
            foto.src = "./assets/boa_madrugada.jpg"
            document.body.style.backgroundColor = '#040428'
        break
        case 02: case 03: case 04:
            mensagem.innerHTML = `São ${hora} horas. Boa Madrugada!`
            foto.src = "./assets/boa_madrugada.jpg"
            document.body.style.backgroundColor = '#040428'
        break
        case 05: case 06: case 07: case 08: case 09: case 10: case 11:
            mensagem.innerHTML = `São ${hora} horas. Bom Dia!`
            foto.src = "./assets/bom_dia.jpg"
            document.body.style.backgroundColor = '#437BD2'
        break
        case 12: case 12: case 13: case 14: case 15: case 16: case 17:
            mensagem.innerHTML = `São ${hora} horas. Boa Tarde!`
            foto.src = "./assets/boa_tarde.jpg"
            document.body.style.backgroundColor = '#FA9F2A'
        break
        case 18: case 19: case 20: case 21: case 22: case 23:
            mensagem.innerHTML = `São ${hora} horas. Boa Noite!`
            foto.src = "./assets/boa_noite.jpg"
            document.body.style.backgroundColor = '#476E6D'
        break  
    }
}