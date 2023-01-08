function verificar(){
    var velocidade = Number(document.querySelector('input#vel').value)
    var resp = document.querySelector('p#resposta')
    resp.innerHTML = `Sua velocidade é de ${velocidade} km/h.`
    if (velocidade > 80) {
        resp.innerHTML += `<p>Você está sendo <strong>multado</strong>.</p>`
    }
    resp.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}