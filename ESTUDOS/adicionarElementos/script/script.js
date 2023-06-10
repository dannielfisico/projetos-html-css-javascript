

document.getElementById('btn').onclick = () => {
    const nome = document.getElementById('nome').value

    const lista = document.getElementById('lista')

    const item = document.createElement('li')
    item.textContent = nome

    lista.appendChild(item)
}