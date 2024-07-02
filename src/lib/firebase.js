import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chaturangveda-a752e.firebaseapp.com",
  projectId: "chaturangveda-a752e",
  storageBucket: "chaturangveda-a752e.appspot.com",
  messagingSenderId: "846770189900",
  appId: "1:846770189900:web:ce912741c49979cda726e9",
  measurementId: "G-BFP12ZWL99"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()
export const db = getFirestore()