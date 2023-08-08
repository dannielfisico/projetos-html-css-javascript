const fabricantes = ["Mercades", "Audi", "BMW", "Fiat"]

function imprimir (nome, indice, array) {
    console.log(`${indice + 1} -  ${nome} de ${array}.`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function (a, b, c) {
    console.log(`${b + 1} - ${a} de ${c}.`)
})

fabricantes.forEach((fabricante, indice, array) => console.log(`${indice +1} - ${fabricante} de ${array}.`))