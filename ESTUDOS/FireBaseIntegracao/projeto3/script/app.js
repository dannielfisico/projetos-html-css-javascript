// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjhGmmEbhZSmLt9JjW39cJbHjDqNy0wuE",
    authDomain: "agenda-608b1.firebaseapp.com",
    databaseURL: "https://agenda-608b1-default-rtdb.firebaseio.com",
    projectId: "agenda-608b1",
    storageBucket: "agenda-608b1.appspot.com",
    messagingSenderId: "1033622188516",
    appId: "1:1033622188516:web:ea45f965877663785297f1"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const agenda = firebase.firestore()
//#region 
//Pegar todos os dados da coleção (get)
/*
console.log('Dados na agenda')
agenda.collection('agenda').get().then((snapshot) => {
    snapshot.forEach((doc) => {
      let contato = doc.data()
      console.log(`Nome: ${contato.nome} ${contato.sobrenome} Telefone: ${contato.telefone}`)
      
    })
  })
*/
//#endregion

//Pegar dos dados por referência
/*
let agendaRef = agenda.collection('clientes').doc('cliente1')

  agendaRef.get().then((doc) => {
    const nome = doc.data().nome
    console.log(`Nome: ${nome}`)
  })
*/

//#region 

//Pesquisa avançada
/*
agenda.collection('clientes').where('estado','!=','Mato Grosso do Sul').get().then((array)=> {
    array.forEach(element => {
        let cliente = element.data()
        console.log(cliente.nome, cliente.sobrenome)
        
    });
})
*/

//#endregion

//#region 

/*
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let nota1 = document.getElementById('nota1').value
    let nota2 = document.getElementById('nota2').value
    let nota3 = document.getElementById('nota3').value
    let nota4 = document.getElementById('nota4').value
    console.log(nome, sobrenome, nota1, nota2, nota3, nota4)

*/
//#endregion
  
//#region Adicionar novos documentos na coleção existente

/*
    agenda.collection('turmas').add({
        nome: nome,
        sobrenome: sobrenome,
        notas: {nota1:nota1, nota2:nota2, nota3:nota3, nota4:nota4}
    }).then((doc) => {
        console.log("Documento Inserido com sucesso!")
    }).catch(erro => {
        console.log(erro)
    })

};
*/

//#endregion

//#region 

/*
agenda.collection('turmas').add({
    nome: 'Carlos',
    sobrenome: "Montingni",
    notas: {nota1:7.8, nota2:6.4, nota3:9.0, nota4:8.5}
}).then((doc) => {
    console.log("Documento Inserido com sucesso!", doc)
}).catch(erro => {
    console.log(erro)
})
*/
//#endregion

//#region 
/*
agenda.collection('clientes').where('nome',"!=",'').get().then(array => {
    array.forEach( element => {
        let cliente = element.data()
        console.log(`Nome: ${cliente.nome} Estado: ${cliente.estado}`)
    })
})
*/
//#endregion


//#region 
/*
agenda.collection("clientes").add(
    {
        nome: 'Professor',
        sobrenome: 'Ivan',
        estado: 'Ceará'
    }
).then( (doc) => {
    console.log("Documento inserido com sucesso!")
}).catch(erro => {
    console.log(erro)
})
*/
//#endregion

//#region 
//Adicionando cliente setando o nome do documento
//o método set além de adicionar, também edita o cliente sobrescrevendo os dados (Tenha atenção)
/*
agenda.collection('clientes').doc("cliente5").set(
    {
        nome: 'Jazylania',
        sobrenome: 'Martins',
        estado: 'Ceará'
    }  //o método set não retorna nenhum objeto então não há necessidade desse (doc)
).then( () => {
    console.log("Cliente cadastrado com sucesso")
}).catch( error => {
    console.log(error)
})
*/
//#endregion


//#region 
/*
agenda.collection('clientes').doc("cliente5").set(
    {
        nome: 'Jazylania',
        sobrenome: 'Martins',
        estado: 'Ceará'
    }, {merge: true}  //para não sobrescrever tudo, usa-se o merge: true
).then( () => {
    console.log("Cliente cadastrado com sucesso")
}).catch( error => {
    console.log(error)
})
*/
//#endregion


//#region 
//Usando o update não é necessário fazer o uso do {merge: true}
/*
agenda.collection('clientes').doc("cliente5").update(
    {
        // cidades: firebase.firestore.FieldValue.arrayUnion('Varjota'),
           cidades: firebase.firestore.FieldValue.arrayUnion('Croatá', 'Reriutaba'),
           cidades: firebase.firestore.FieldValue.arrayRemove('Croatá','Reriutaba', 'Sobral', 'Varjota')
    },
).then( () => {
    console.log("Cliente cadastrado com sucesso")
}).catch( error => {
    console.log(error)
})
*/
//#endregion

//#region 
//Adicionando campos e incrementando valores
/*
agenda.collection('clientes').doc('cliente6').update(
    {
        idade: firebase.firestore.FieldValue.increment(1),
    }
).then(() => {
    console.log('Cliente adicionando com sucesso')
}).catch(erro => {
    console.log(erro)
})
*/

//#endregion

//#region onSnapshot
/*
console.log('Dados na agenda')
agenda.collection('agenda').onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
      let contato = doc.data()
      console.log(`Nome: ${contato.nome} ${contato.sobrenome} Telefone: ${contato.telefone}`)
      
    })
  })
*/
//#endregion

//#region onSnapshot
/*
let agendaRef = agenda.collection('clientes').doc('cliente1')

  agendaRef.onSnapshot((doc) => {
    const nome = doc.data().nome
    console.log(doc.data())
  })
*/
//#endregion

//#region Apagar um campo do documento
/*
agenda.collection('clientes').doc('cliente5').update(
    {
        cidades: firebase.firestore.FieldValue.delete(),
        mensalidades: firebase.firestore.FieldValue.delete()
    }
)
*/
//#endregion

//#region Apagar um documento inteiro
/*
agenda.collection('clientes').doc('Fi996Hr0GWJVXTCvT1m6').delete().then(() => {
    console.log('Cliente apagado com sucesso!')
}
).catch(erro => {
    console.log(erro)
})
*/
//#endregion

//#region exercitando: Adicionando novas coleções


document.getElementById('btn').onclick = () => {
    alert('clicou!!!!')

}

/*

agenda.collection('assinantes').add(
    {
        nome: 'Nanda',
        sobrenome: 'Oliveira Pontes',
        cidade: 'Guaraciaba do Norte'
    }
).then((doc) => {
    console.log(`O assinante foi adicionando.`)
}).catch(erro => {
    console.log(erro)
})

*/





//#endregion