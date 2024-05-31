import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpfyKxl_4uncQ70gPbFwg1LEvKHjnY62A",
    authDomain: "db-electivai.firebaseapp.com",
    projectId: "db-electivai",
    storageBucket: "db-electivai.appspot.com",
    messagingSenderId: "682279724254",
    appId: "1:682279724254:web:86e9f23d66b2ae7150ce4f"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();