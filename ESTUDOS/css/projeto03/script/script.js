function postar(){
    const nome = document.getElementById("nome").value
    const desc = document.getElementById("desc").value
    const url = document.getElementById("url").value

    const containerProdutos = document.getElementById("products-container")

    const item = document.createElement("div")
    item.setAttribute('class', 'item')
    containerProdutos.appendChild(item)
    const imagem = document.createElement("img")
    imagem.setAttribute("src", url)
    item.appendChild(imagem)
    const titulo = document.createElement('h3')
    titulo.innerHTML(nome)
    item.appendChild(titulo)
        alert("ok")
}