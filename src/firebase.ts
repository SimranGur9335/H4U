// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // added import

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlfTGU5oeYejsDbf2qmZl-UIHVDyE0JeM",
  authDomain: "sih-h4u.firebaseapp.com",
  projectId: "sih-h4u",
  storageBucket: "sih-h4u.firebasestorage.app",
  messagingSenderId: "182231313994",
  appId: "1:182231313994:web:3b644a31b696f7bd6980b3",
  measurementId: "G-Q416DPPC3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // exported auth
