
function carregar(){
    const horaAtual = new Date().getHours()
    const texto = document.createElement('h1')
    const imagem = document.createElement('img')
    const txthora = document.querySelector('div.txthora')
    const foto = document.querySelector('div.foto')
    texto.innerHTML = `São ${horaAtual} horas.`
    txthora.appendChild(texto)
    foto.appendChild(imagem)

    if (horaAtual <12 ){   
        imagem.setAttribute('src','https://media.istockphoto.com/id/1125868527/pt/foto/cup-on-the-window-with-sun-and-defocused-nature-background.jpg?s=612x612&w=0&k=20&c=Mzhl3OyUWWMv2y4Qjs7jyRzoGffWYHTV0-kBoMo9nAg=')
    } else if (horaAtual < 18){
        imagem.setAttribute('src','https://i.pinimg.com/originals/7e/84/5b/7e845bf49b3b5ba3f867b5cdab8ed709.jpg')
    } else if (horaAtual <23) {
        imagem.setAttribute('src','https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    }
    
    
    
}