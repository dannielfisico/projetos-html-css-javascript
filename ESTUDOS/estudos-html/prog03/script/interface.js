document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("click", handleClick)
    })
})

function handleClick(event) {
    console.log(event.target) //elemento que sofreu o evento de click

    let square = event.target
    let position = square.id 

    handleMove(position)
    updateSquares()
}


function updateSquares(){
    
    let squares = document.querySelectorAll(".square")
    
    squares.forEach(square => {
       let position = square.id 
       let symbol = board[position]

       if (symbol != ""){
        square.innerHTML = `<div class="${symbol}"></div>`
       }
    })
}

