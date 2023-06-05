const firebaseConfig = {
  apiKey: "AIzaSyDtyr8Er2dNA-TmOsDnbJwSGff9tBmVdgI",
  authDomain: "colegio-733df.firebaseapp.com",
  databaseURL: "https://colegio-733df-default-rtdb.firebaseio.com",
  projectId: "colegio-733df",
  storageBucket: "colegio-733df.appspot.com",
  messagingSenderId: "730535053084",
  appId: "1:730535053084:web:1898daa81cc421e3b61cd9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let banco = firebase.firestore();

/*
console.log(`Dados dos Alunos`)
banco.collection('turmaA').get().then((snapshot) => {
  snapshot.forEach((doc) => {
    let aluno = doc.data()
    console.log(`Nome: ${aluno.nome}`)
    
  })
})
*/
/*

let docRef = banco.collection('turmaA').doc('2ylK6KEvZml63GMA0lcI')

docRef.get().then((doc) => {
  const aluno = doc.data().nome
  const nota1 = doc.data().Notas.nota1
  const nota2 = doc.data().Notas.nota2
  const media = (nota1 + nota2)/2

  console.log(`O aluno ${aluno} obteve Nota1 = ${nota1} e Nota2 = ${nota2} e ${media}`)
})
*/

banco.collection('turmaA').where('nome', '!=', 'Ana').get().then((snapshot) => {
    snapshot.forEach(doc => {
      let aluno = doc.data()
      console.log(aluno.nome, aluno.sobrenome)
    });
})