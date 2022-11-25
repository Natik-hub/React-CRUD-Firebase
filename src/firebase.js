import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACuZsT9hU8aeotlgjow1DRCuqbTIQuW7k",
    authDomain: "react-test-82e7c.firebaseapp.com",
    projectId: "react-test-82e7c",
    storageBucket: "react-test-82e7c.appspot.com",
    messagingSenderId: "454725493307",
    appId: "1:454725493307:web:de0f5e8620f32b0eb6321e"
  };
  
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
