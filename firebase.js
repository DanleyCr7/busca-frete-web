import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBG8GWwYTIssk6vwG0h6y8_rzV5H2HZEHA",
    authDomain: "busca-frete-1596493798027.firebaseapp.com",
    projectId: "busca-frete-1596493798027",
    storageBucket: "busca-frete-1596493798027.appspot.com",
    messagingSenderId: "861713318898",
    appId: "1:861713318898:web:1edd58470e4ddaeb91e16b",
    measurementId: "G-F2L74P7VMF"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
export {db, auth}