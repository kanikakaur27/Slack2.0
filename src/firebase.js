import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import{ getAuth }from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEkDt6vhIEZWr90bl1-XRIB8evn-ND_tM",
  authDomain: "slack-clone-20e1c.firebaseapp.com",
  projectId: "slack-clone-20e1c",
  storageBucket: "slack-clone-20e1c.appspot.com",
  messagingSenderId: "938377349903",
  appId: "1:938377349903:web:09d2a48e50dc658a414c7a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
