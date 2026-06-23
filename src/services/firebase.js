import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCdVKtICPEgBsCBHY1pQRw4z6e4OGqX5iY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "control-financial.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "control-financial",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "control-financial.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "710778540212",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:710778540212:web:7f1f06ebbf5f1a7fefc7e1",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-R4XTKCPWHH",
};

const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const getCurrentUid = () => auth.currentUser?.uid || null;
/* export const database = firebase.database(); */
export const db = getFirestore(app);
