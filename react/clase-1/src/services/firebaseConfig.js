import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCu4nIQM8QW9U6Q8AttE_0y6L-zePOPmqA",
  authDomain: "react-trapani.firebaseapp.com",
  projectId: "react-trapani",
  storageBucket: "react-trapani.appspot.com",
  messagingSenderId: "544061750048",
  appId: "1:544061750048:web:1d56b1b96836278a5b3545"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)