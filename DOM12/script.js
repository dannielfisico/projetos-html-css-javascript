function contar(){
    let i = Number(document.querySelector("input#inicio").value)
    let f = Number(document.querySelector("input#fim").value)
    let r = Number(document.querySelector("input#razao").value)
    let aguardando = document.querySelector("p#aguardando")
    aguardando.innerHTML = ``
    let contando = document.querySelector('p#contando')
    contando.innerHTML = ``
    if (i == "" || f == "" || r == ""){
        aguardando.innerHTML = `&#x1F602; Impossivel contar. \u{1F602}` //duas formas de colocar o Emoji
    } else {
        if (r <=0 ){
            alert('Razão inválida. Considerando Razão = 1')
            r = 1
        }
        if (i < f) { //testar se o inicio é menor que o fim
                aguardando.innerHTML = `Contando de <strong>${i}</strong> até <strong>${f}</strong> pulando de <strong>${r}</strong> em <strong>${r}</strong>.`
              while (i <= f) {
                    contando.innerHTML += `${i}  &#x1F449; `
                    i += r
                }
                contando.innerHTML += ` \u{1F3C1}` //BANDEIRA CRAZE OBRIGATÓRIO

            } else {
                aguardando.innerHTML = `Contando de <strong>${i}</strong> até <strong>${f}</strong> pulando de <strong>${r}</strong> em <strong>${r}</strong>.`
                while (f <= i) {
                    contando.innerHTML += `${i} &#x1F449; `
                    i -= r
                }
                contando.innerHTML += " &#x1F3C1;" //BANDEIRA
            }

    }


    
}