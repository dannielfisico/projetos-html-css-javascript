function somar(){
    var n1 = document.querySelector('input#num1')
    var n2 = document.querySelector('input#num2')
    var numero1 = Number(n1.value)
    var numero2 = Number(n2.value)
    var s = numero1 + numero2
    var res = document.querySelector("div#resultado")
    res.innerHTML = `${s}`
}