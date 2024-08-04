// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiffJp_V0ns6DzOSQqhgOz8iQef3SrT78",
  authDomain: "inventorymanagement-e72ff.firebaseapp.com",
  projectId: "inventorymanagement-e72ff",
  storageBucket: "inventorymanagement-e72ff.appspot.com",
  messagingSenderId: "614599654307",
  appId: "1:614599654307:web:6c7da9856266e55b35b816",
  measurementId: "G-JDQ58HN95Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}