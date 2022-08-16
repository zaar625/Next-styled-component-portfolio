import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCwaYrEoyzhq2UXJgvvs4AjXFlnwiJWt54",
    authDomain: "next-portfolio-1faec.firebaseapp.com",
    projectId: "next-portfolio-1faec",
    storageBucket: "next-portfolio-1faec.appspot.com",
    messagingSenderId: "746503656272",
    appId: "1:746503656272:web:1be9324b416d7d4c89d255"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)