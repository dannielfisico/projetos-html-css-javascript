//iniciar minhas variáveis
let board = ["","","","","","","","",""] //representa o tabuleiro com as 9 opções de jogada
let playerTime = 0
let simbols = ["o", "x"]

let gameOver = false

function handleMove(position){

    if (gameOver) {
        return
    }

    gameOver = isWin()
    
    board[position] = simbols[playerTime]
    
    if(gameOver == false){
            if (playerTime == 0){
            playerTime = 1
        } else {
            playerTime = 0
        }
    }

    return gameOver
}

function isWin() {
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i]
        let position1 = seq[0]
        let position2 = seq[1]
        let position3 = seq[2]
        
        if (board[position1] == board[position2] && board[position1] == board[position3] && board[position1] != ""){
            return true
        }
    }

    return false
}