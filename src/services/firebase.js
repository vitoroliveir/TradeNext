import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

/* const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
} */
const firebaseConfig = {
  apiKey: "AIzaSyCdVKtICPEgBsCBHY1pQRw4z6e4OGqX5iY",
  authDomain: "control-financial.firebaseapp.com",
  projectId: "control-financial",
  storageBucket: "control-financial.appspot.com",
  messagingSenderId: "710778540212",
  appId: "1:710778540212:web:7f1f06ebbf5f1a7fefc7e1",
  measurementId: "G-R4XTKCPWHH"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
/* export const database = firebase.database(); */
export const db = getFirestore(app);

