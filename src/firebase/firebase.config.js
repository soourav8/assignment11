// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_rvYPoQ1efESlvhqVgr6QMz9gDlfmaKk",
  authDomain: "toy-shop-1be7e.firebaseapp.com",
  projectId: "toy-shop-1be7e",
  storageBucket: "toy-shop-1be7e.appspot.com",
  messagingSenderId: "82037856349",
  appId: "1:82037856349:web:af1655866d9faaf9cf55b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;