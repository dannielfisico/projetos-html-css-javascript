const card = document.querySelector('#a7864621d')
let flipada = true
card.addEventListener('click', ()=> {
    if(flipada){
        card.setAttribute('class', "card flip")
        flipada = false
    } else {
        card.setAttribute('class', "card")
        flipada = true
    }
})