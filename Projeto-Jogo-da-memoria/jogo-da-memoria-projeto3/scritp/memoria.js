// const card = document.querySelector('.card')
// let flipada = 1
// card.addEventListener('click', () => {
//     if (flipada) {
//         card.setAttribute('class', "card flip")
//         flipada--
//     } else {
//         card.setAttribute('class', "card")
//         flipada++
//     }
// })


const front = "card_front"
const back = "card_back"

let figuras = [
    'cachorro',
    'cavalo',
    'elefante',
    'galo',
    'gato',
    'jacare',
    'macaco',
    'rinoceronte',
    'tatu',
    'tigre'
]

criarCartas(figuras)


function criarCartas(figuras){
    let cartas = []

    for(let figura in figuras){
        cartas.push(criarParDefiguras(figura))
    }
    console.log(cartas)
}



function criarParDefiguras(figura){
    return [
        {
            id: criarId(figura),
            icon: figura,
            flipped: false
        },
        {
            id: criarId(figura),
            icon: figura,
            flipped: false

        }

    ]
}

function criarId(figura) {
    // return figura + parseInt(Math.random()*1000)
    return `${figura}${parseInt(Math.random()*1000000)}`
}

