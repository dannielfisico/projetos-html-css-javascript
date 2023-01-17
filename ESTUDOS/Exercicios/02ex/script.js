function verificar() {
    const p1 = document.querySelector('p#p1')
    const p2 = document.querySelector('p#p2')
    const res = document.querySelector('p#res')
    if (p1.textContent == p2.textContent){
        res.innerHTML = `Sim`
    } else {
        res.innerHTML = `Não`
    }
}