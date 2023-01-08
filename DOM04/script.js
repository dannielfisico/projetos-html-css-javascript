function verificar() {
    var inf = document.querySelector('input#pais')
    var pais = inf.value
    var r = document.querySelector('div#resposta')

    if (pais != 'Brasil'){
        r.innerHTML = "Estrangeiro"
    } else {
        r.innerHTML = 'Brasieleiro'
    }
}