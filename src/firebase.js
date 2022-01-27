import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import{ getAuth }from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBldsIFgcMhv0NetmSbObaApGdIKPTQME",
  authDomain: "slack-clone-e1c9b.firebaseapp.com",
  projectId: "slack-clone-e1c9b",
  storageBucket: "slack-clone-e1c9b.appspot.com",
  messagingSenderId: "884484803254",
  appId: "1:884484803254:web:86a425afaa63d0dde63417"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
