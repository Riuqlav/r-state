// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLH8OgrYGM5TX8Hn9Eg6bmD7vKgg78E0U",
  authDomain: "r-state.firebaseapp.com",
  projectId: "r-state",
  storageBucket: "r-state.appspot.com",
  messagingSenderId: "491896119865",
  appId: "1:491896119865:web:160fda7b825565e85f23e8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
