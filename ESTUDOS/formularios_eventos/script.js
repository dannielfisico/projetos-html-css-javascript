// 
// registro.addEventListener('submit', imprimir())

function imprimir() {
    const registro = document.forms.registro
    const { primeiroNome, sobrenome, anoNascimento } = registro
    const anoAtual = new Date().getFullYear()
    const idade = anoAtual = anoNascimento.value
    const respnome = document.querySelector('p#nome')
    const respsobrenome = document.querySelector('p#sobrenome')
    const respanonascimento = document.querySelector('p#idade')
    respnome.innerHTML = `${idade}`
    
}