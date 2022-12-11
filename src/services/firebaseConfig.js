import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwhk50J43FWGNHuJWF-4-pKbZvMWQtsh4",
  authDomain: "nutrition-7e709.firebaseapp.com",
  projectId: "nutrition-7e709",
  storageBucket: "nutrition-7e709.appspot.com",
  messagingSenderId: "797792539391",
  appId: "1:797792539391:web:29a5b7661d8441b379b2ca",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
