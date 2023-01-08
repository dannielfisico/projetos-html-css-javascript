const progresso = document.querySelector('#barrainferior div')
const porcento = document.querySelector('input#porcento')
progresso.setAttribute('style', 'width: ' + 0 +'%')
const alterarProgresso = () => {
    progresso.setAttribute('style', 'width: ' + porcento.value +'%')
}
