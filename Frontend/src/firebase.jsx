import firebase from 'firebase';
import 'firebase/storage';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyC68HSFol21vmFUz86u4YeRfKdbiVALoXM",
  authDomain: "newpaf-foodies.firebaseapp.com",
  projectId: "newpaf-foodies",
  storageBucket: "newpaf-foodies.appspot.com",
  messagingSenderId: "1065809900278",
  appId: "1:1065809900278:web:9f8f31dbe25b000afdf2d7"
};

// Initialize Firebase
const app =!firebase.apps.length?firebase. initializeApp(firebase):firebase.app();

const db=app.firestore();
const storage=firebase.storage();

export{db, storage}