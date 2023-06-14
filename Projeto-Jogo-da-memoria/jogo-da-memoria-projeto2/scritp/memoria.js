const card = document.querySelector('.card')
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