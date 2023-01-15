function soma(){
      let soma = 0
      for(i in arguments){
          soma += arguments[i]
      }
      return soma
}

const d = soma(7,3,9)
console.log(d)

function somar(a,b){
    return a + b
}

console.log(somar(7,3,1))

const lista = [1,2,3,4,5]

function adicionar(lista){
    somatorio = 0
    for (i in lista){
        somatorio += lista[i]
    }
    return somatorio
}

console.log(adicionar(lista))