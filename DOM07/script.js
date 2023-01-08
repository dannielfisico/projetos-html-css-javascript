function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var hora = 19 //new Date().getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >=0 && hora <= 4){
        //madrugada
        img.src = './assets/boa_madrugada.jpg'
        document.body.style.backgroundColor = '#020321'
    } else if (hora >=5 && hora <=11 ){
        //bom dia
        img.src = './assets/bom_dia.jpg'
    } else if (hora >=12 && hora <=17 ){
        //boa tarde
        img.src = './assets/boa_tarde.jpg'
        document.body.style.backgroundColor = '#F9A528'
    } else {
        // boa noite
        img.src = './assets/boa_noite.jpg'
        document.body.style.backgroundColor = '#0F464B'
    }
    
}
