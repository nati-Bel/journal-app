// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhAx1EauWFtp46jnRYLZHAd-_r467JlOI",
  authDomain: "journal-app-f84d3.firebaseapp.com",
  projectId: "journal-app-f84d3",
  storageBucket: "journal-app-f84d3.appspot.com",
  messagingSenderId: "713619518083",
  appId: "1:713619518083:web:5a96c79c98abcf0e30a1b6",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )


