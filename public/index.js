// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABHch4sUf7Pdw-NLsb05yGf2hPIKNtdfQ",
  authDomain: "it332-7cce3.firebaseapp.com",
  projectId: "it332-7cce3",
  storageBucket: "it332-7cce3.appspot.com",
  messagingSenderId: "1048258522977",
  appId: "1:1048258522977:web:bb2284c8ae8a8788fb1f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');
const message = document.getElementById('message');

signOutButton.style.display = none;
message.style.display=  none;

const userSignIn = async()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
  }).catch((err) =>{
    const errorCode = err.code;
    const errorMessage = err.message;
  });
};


const userSignOut = async()=>{
  signOut(auth).then(()=>{
    alert('you have been signed out');
  }).catch((err) =>{
    const errorCode = err.code;
    const errorMessage = err.message;
  })
};


onAuthStateChanged(auth, (user)=>{
  if(user){
    signOutButton.style.display = "block";
    message.style.display = "block";
  }else{
    signOutButton.style.display = "none";
    message.style.display = "none";
  }
});

signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);