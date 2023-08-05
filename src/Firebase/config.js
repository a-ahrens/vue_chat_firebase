import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-kRLhrk1V443tSVXk3polWgRfGmLyjSc",
    authDomain: "fir-vue-f1bdc.firebaseapp.com",
    projectId: "fir-vue-f1bdc",
    storageBucket: "fir-vue-f1bdc.appspot.com",
    messagingSenderId: "254218786747",
    appId: "1:254218786747:web:6556be2ac99be631d3169e",
    measurementId: "G-B6FH92TDY7"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }