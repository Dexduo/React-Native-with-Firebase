// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "projeto-70825.firebaseapp.com",
  projectId: "projeto-70825",
  storageBucket: "projeto-70825.appspot.com",
  messagingSenderId: "580678039355",
  appId: "1:580678039355:web:2edf0280713aff314b291e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}