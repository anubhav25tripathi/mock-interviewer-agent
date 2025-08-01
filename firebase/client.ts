// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXG1-0aq5lrEmHBBs67IsR24PM5aGQlys",
  authDomain: "interviewer-a1c2a.firebaseapp.com",
  projectId: "interviewer-a1c2a",
  storageBucket: "interviewer-a1c2a.firebasestorage.app",
  messagingSenderId: "569585113056",
  appId: "1:569585113056:web:fd9a36e87b5ab4c201fd85",
  measurementId: "G-55MG51PNNZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
//const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app)