const numeros = [1,2,3,4]

let n1 = 12

let numeros2 = []

numeros.forEach(element => {
  let a =  n1+= element
    numeros2.push(a)
    
})

console.log(numeros)
console.log(numeros2)

let jogadasFeitas = ["x","x","x","x","x","x","x","x","x"]

const jogada1 = "X"
const jogaga2 = "Y"


function eCampeao(){
    console.log(jogadasFeitas)
    const possibilidades = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
/*
    for(let i = 0; i < possibilidades.length; i++){
        let sequencia = possibilidades[i]

        let pos1 = sequencia[0]
        let pos2 = sequencia[1]
        let pos3 = sequencia[2]

        if( jogadasFeitas[pos1] == jogadasFeitas[pos2]  && jogadasFeitas[pos2] == jogadasFeitas[pos3] && jogadasFeitas[pos1] != ""){
            return true
        }
    }*/

 if(possibilidades.forEach(elemento => {
        let pos1 = elemento[0]
        let pos2 = elemento[1]
        let pos3 = elemento[2]

        if(jogadasFeitas[pos1] == jogadasFeitas[pos2] && jogadasFeitas[pos1] == jogadasFeitas[pos3] && jogadasFeitas[pos1] != ""){
           return true
        }})){
            return true
        }

    
    return false
    
    }