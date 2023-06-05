const firebaseConfig = {
  apiKey: "AIzaSyAqlc0oZRfJKC0QLS9uRr4exyJX1nP40mA",
  authDomain: "escola-2023.firebaseapp.com",
  projectId: "escola-2023",
  storageBucket: "escola-2023.appspot.com",
  messagingSenderId: "11446509285",
  appId: "1:11446509285:web:7bd97814785537127f3e0c",
  measurementId: "G-02NMSR4BTT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*
console.log('antes')
firebase.auth().signInWithEmailAndPassword("teste@teste.com.br", "senha123").then( response => {
  console.log('success', response)
}).catch(error => {
  console.log('error', error)
});
console.log('depois')
*/