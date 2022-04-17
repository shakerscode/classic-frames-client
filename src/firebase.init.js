// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiUy6GPFkwrA8xMiPlBOCj9NRkBaiLV-w",
  authDomain: "classic-frames.firebaseapp.com",
  projectId: "classic-frames",
  storageBucket: "classic-frames.appspot.com",
  messagingSenderId: "273772520128",
  appId: "1:273772520128:web:4b60d857a7ef3f80614325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
export  default auth;