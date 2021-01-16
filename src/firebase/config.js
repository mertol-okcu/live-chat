import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB8e6P5f7FZw2cd2eXU7H9Q65g-0c5SlqY",
  authDomain: "udemy-vue-firebase-sites-98eed.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-98eed",
  storageBucket: "udemy-vue-firebase-sites-98eed.appspot.com",
  messagingSenderId: "996327184274",
  appId: "1:996327184274:web:d7f9fa20285ce3cc62d34b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFirestore, timestamp}