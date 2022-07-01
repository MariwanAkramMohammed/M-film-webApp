
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Config = {
  apiKey: "AIzaSyAko_VtB8tAS3c9DX14ShkM_O8ImpHNG8Q",
  authDomain: "m-film.firebaseapp.com",
  projectId: "m-film",
  storageBucket: "m-film.appspot.com",
  messagingSenderId: "1086172331675",
  appId: "1:1086172331675:web:aee9fc3afb0b0bab29d03e"
};
const app=initializeApp(Config);
export const db=getFirestore(app);
export const auth=getAuth();
const provider=new GoogleAuthProvider();
export const SignWithGoogle=()=>{
  signInWithPopup(auth,provider)
}

