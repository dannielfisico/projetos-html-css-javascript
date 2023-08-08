function carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0

    //Método público
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


const fusca = new carro

console.log(fusca.getVelocidadeAtual())
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
console.log(fusca.getVelocidadeAtual())

const ferrari = new carro(350, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())