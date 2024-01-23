// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAucHYjhxOf24CKYySSs01DY4diBmdOKWc",
  authDomain: "jmtodoweb.firebaseapp.com",
  projectId: "jmtodoweb",
  storageBucket: "jmtodoweb.appspot.com",
  messagingSenderId: "1038531568412",
  appId: "1:1038531568412:web:37241a408b5ff87ad850d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);




export {auth, db}