// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmMkVZkzeZsvthmStpLg0gONPjIIR3wrE",
  authDomain: "nuxt-tp-d308e.firebaseapp.com",
  databaseURL: "https://nuxt-tp-d308e-default-rtdb.firebaseio.com",
  projectId: "nuxt-tp-d308e",
  storageBucket: "nuxt-tp-d308e.firebasestorage.app",
  messagingSenderId: "771545599855",
  appId: "1:771545599855:web:51db0147e44c303988e29a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);