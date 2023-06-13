const avatares1rad = document.getElementsByName("player1")
const avatares1txt = document.querySelectorAll('#icone1')

const avatares2rad = document.getElementsByName("player2")
const avatares2txt = document.querySelectorAll('#icone2')

const iconesSelecionados = ["",""]

let avatarPlayer1 = ""
let avatarPlayer2 = ""
let avatarPlayer1txt = []
let avatarPlayer2txt = []

document.addEventListener('DOMContentLoaded', () => {

    avatares1txt.forEach(txtavatar => {
        for(let c = 0; c < avatares1txt.length; c++){
            avatarPlayer1txt[c] = avatares1txt[c].innerHTML
        }
    })

    avatares2txt.forEach(txtavatar => {
        for(let d = 0; d < avatares2txt.length; d++){
            avatarPlayer2txt[d] = avatares2txt[d].innerHTML
        }
    })
})

const celulas = document.querySelectorAll(".celula")

function jogar(){
    avatares1rad.forEach(avatar1 => {
        for(var a = 0; a < avatares1rad.length; a++){
            if(avatares1rad[a].checked){
                avatarPlayer1 = a
                
                
           }
        
        }
    })

    
    avatares2rad.forEach(avatar2 => {
        for(var b = 0; b < avatares2rad.length; b++){
           if(avatares2rad[b].checked){
                avatarPlayer2 = b
                
                
           }
        }
    })

    iconesSelecionados[0] = avatarPlayer1
    iconesSelecionados[1] = avatarPlayer2

    
    

    
    //log
    console.log(`Avatar P1: ${avatarPlayer1}`)
    console.log(`Avatar P2: ${avatarPlayer2}`)
    console.log(`Icones Selecionados ${iconesSelecionados}`)
    console.log(`Avatares Player txt 1 ${avatarPlayer1txt}`)    
    console.log(`Avatares Player txt 2 ${avatarPlayer2txt}`)
    console.log((`Icones Selecionados : ${avatarPlayer1txt[iconesSelecionados[0]]} e ${avatarPlayer2txt[iconesSelecionados[1]]}`))


}

