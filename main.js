// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBX32xaxrrkTw2AvkUme6IXAFneujPQmTo",
  authDomain: "recordbump-94bf9.firebaseapp.com",
  projectId: "recordbump-94bf9",
  storageBucket: "recordbump-94bf9.appspot.com",
  messagingSenderId: "756433573216",
  appId: "1:756433573216:web:9e6ad2ecccd7dc2c19fa05",
  measurementId: "G-9LGMDPJ0L8"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You're being redirected.")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("pricing.html");
    }
})
