const card = document.querySelector('#a7864621d')
let flipada = 0
card.addEventListener('click', ()=> {
    if(flipada){
        card.setAttribute('class', "card flip")
        flipada--
    } else {
        card.setAttribute('class', "card")
        flipada++
    }
})