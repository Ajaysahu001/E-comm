// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsLpeKRh77hp-zVowzt4tQjzIZfNBc9a0",
    authDomain: "e-commerece-project-ad560.firebaseapp.com",
    projectId: "e-commerece-project-ad560",
    storageBucket: "e-commerece-project-ad560.appspot.com",
    messagingSenderId: "461133239116",
    appId: "1:461133239116:web:327efeee138cb73eba35e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app);

// Initialize Cloud Firestore and get a reference to the service
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
