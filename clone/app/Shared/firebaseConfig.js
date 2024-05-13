// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC64S4_Ks7GFwwPtQrtEN66KezP-w3MSwk",
  authDomain: "pintrest-387d7.firebaseapp.com",
  projectId: "pintrest-387d7",
  storageBucket: "pintrest-387d7.appspot.com",
  messagingSenderId: "1022133989509",
  appId: "1:1022133989509:web:c80773ef9c39008d0979ec",
  measurementId: "G-DZL5F1KDH2"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;