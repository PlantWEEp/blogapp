// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbI8bS62lrtk59D7xRmeFnby62j83UTOc",
    authDomain: "travel-blog-app-7e15a.firebaseapp.com",
    projectId: "travel-blog-app-7e15a",
    storageBucket: "travel-blog-app-7e15a.appspot.com",
    messagingSenderId: "47836766646",
    appId: "1:47836766646:web:d81497d48ff5caa6f5a117",
    measurementId: "G-1QSF23WQ2P"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };
