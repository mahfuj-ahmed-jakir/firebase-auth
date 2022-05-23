// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9XkHfvuKa-vXFjQ1ttkbQ1YYqPpyiMmc",
  authDomain: "fir-auth-mern.firebaseapp.com",
  projectId: "fir-auth-mern",
  storageBucket: "fir-auth-mern.appspot.com",
  messagingSenderId: "232653243836",
  appId: "1:232653243836:web:4c7e3c8944021173f7d7b9",
  measurementId: "G-G4195247QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
