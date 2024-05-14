// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVz38tBbybab0wmApZS7TPhOkXCjQCwAM",
  authDomain: "pintrest-3f6d3.firebaseapp.com",
  projectId: "pintrest-3f6d3",
  storageBucket: "pintrest-3f6d3.appspot.com",
  messagingSenderId: "690485159184",
  appId: "1:690485159184:web:1482743ccefa33bfa07195"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;