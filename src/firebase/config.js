// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwuIqBIELL1wCc1vzK4EQHgFb5OrFkEws",
    authDomain: "waveapp-c671c.firebaseapp.com",
    projectId: "waveapp-c671c",
    storageBucket: "waveapp-c671c.appspot.com",
    messagingSenderId: "78276349617",
    appId: "1:78276349617:web:16fb066db7a3220a331c90",
    measurementId: "G-RZDM639RY3",
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
