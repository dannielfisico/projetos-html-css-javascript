

function fazer() {
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var resposta = document.querySelector('p#agora')
    var pic = document.querySelector('div#picture')
    switch (hora) {
        case 00: case 01: case 02: case 03: case 04:
            resposta.innerHTML =`Boa madrugada [${hora}:${minuto}]`
            break
            case 05: case 06: case 07: case 08: case 09: case 10: case 11:   
            resposta.innerHTML = `Bom dia [${hora}:${minuto}]`
            break
            case 12: case 13: case 14: case 15: case 16: case 17:   
            resposta.innerHTML = `Boa Tarde [${hora}:${minuto}]`
            break
            case 18: case 19: case 20: case 21: case 22: case 23:   
            resposta.innerHTML = `Boa Noite [${hora}:${minuto}]`
            break
    }  
}
