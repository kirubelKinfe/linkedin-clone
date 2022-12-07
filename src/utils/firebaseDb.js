import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC3lc-0eNc1_QTL9yFns8xXoVpX6rbmBfs",
    authDomain: "linkedin-clone-46e90.firebaseapp.com",
    projectId: "linkedin-clone-46e90",
    storageBucket: "linkedin-clone-46e90.appspot.com",
    messagingSenderId: "217098424682",
    appId: "1:217098424682:web:efffe4194e58dddb1a5513",
    measurementId: "G-GRD5CHMDGG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }