// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "mern-estate-7506c.firebaseapp.com",
  projectId: "mern-estate-7506c",
  storageBucket: "mern-estate-7506c.appspot.com",
  messagingSenderId: "879780047422",
  appId: "1:879780047422:web:501043e118017ec25c3f6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);