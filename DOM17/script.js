const progresso = document.querySelector('.barra div')
const input = document.querySelector('input')
const p = document.querySelector('p#percent')
const alterarProgresso = () => {
    progresso.setAttribute("style", "width: " + input.value +"%")
    p.innerHTML = `${input.value}%`
}

