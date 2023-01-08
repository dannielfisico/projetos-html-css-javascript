

var p1 = document.getElementsByTagName('p')
// window.document.write(p1.length + '</br>')
// window.document.write("Está escrito assim: " + p1[1].innerText)

/*
for (element in p1) {
    document.write(`Este é o parágrafo ${element + 1}: ${p1[element].innerHTML}. <br>`)
}
*/

var paragrafos = document.getElementsByClassName('paragrafo')

/*
for (i in paragrafos) {
    document.write(`Este é o parágrafo ${i + 1}: ${paragrafos[i].innertext}. <br>`)
}
*/

var d = document.querySelector('div#a123b')
d.innerHTML = 'por id hastag'
var d2 = document.querySelector('div.a123b')
d2.innerHTML = 'por class ponto'
var d3 = document.querySelectorAll('div.a123b')
d3[0].innerText = "WWWWWWWWWWW"