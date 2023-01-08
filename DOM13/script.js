function gerarTabuada(){

   // let num = Number(document.querySelector('input#num').value)
    let num = prompt(`Qual o número?`)
    // let num = Number(pergunta)
    let tabuada = document.querySelector('select#tabuada')
    //Verificar se o campo número está vazio
    tabuada.innerHTML = ""
    if (num == "") {
        alert(`Por favor, digite um número`)
    } else {
        let contador = 1 //iniciar o contador com 1
        while (contador <=10 ) { //Enquanto o contador for menor que 10 faça
            let item = document.createElement('option')
            item.text = `${num}x${contador}=${num*contador}`
            tabuada.appendChild(item)
            contador++
        }
    }

}

function gerarTabuada2(){
    const lista = document.getElementById("minhaLista");
    lista.textContent = ""
    let num = prompt(`Qual o número?`)
    if (num == "") {
        alert(`Por favor, digite um número`)
    } else {
        let contador = 1 //iniciar o contador com 1
        
        while (contador <=10 ) {
            
            lista.setAttribute("style", "list-style-type: none") //Remove a 'bolinha' marcador da lista
            const item1 = document.createElement("li");
            item1.textContent = `${num}x${contador}=${num*contador}`;
            lista.appendChild(item1);
            contador++
        }
    }
}