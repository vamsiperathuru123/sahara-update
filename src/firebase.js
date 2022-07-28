// Import the functions you need from the SDKs you need

import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAsViHswOOe4PVgRNhbcmpjxoTCZWdi74E",
  authDomain: "sahara-1224f.firebaseapp.com",
  databaseURL: "https://sahara-1224f.firebaseio.com",
  projectId: "sahara-1224f",
  storageBucket: "sahara-1224f.appspot.com",
  messagingSenderId: "429229553087",
  appId: "1:429229553087:web:7a5036312e25aac45d9d0a",
  measurementId: "G-CDX5Y69MC8"
});

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};
