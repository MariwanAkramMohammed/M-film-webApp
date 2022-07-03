import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Config = {
  apiKey: "AIzaSyAko_VtB8tAS3c9DX14ShkM_O8ImpHNG8Q",
  authDomain: "m-film.firebaseapp.com",
  projectId: "m-film",
  storageBucket: "m-film.appspot.com",
  messagingSenderId: "1086172331675",
  appId: "1:1086172331675:web:aee9fc3afb0b0bab29d03e",
};
const app = initializeApp(Config);
export const db = getFirestore(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const SignWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const UserDocument = async (userData) => {
  const { email, photoURL, uid, displayName } = userData;
  const photo =
    photoURL ||
    "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg";
  const name = displayName || email.slice(0, email.indexOf("@"));

  const ColRef = collection(db, "users");
  const DocRef = doc(ColRef, uid);
  // console.log(DocRef);
  const snapCheck = await getDoc(DocRef);
  if (!snapCheck.exists()) {
    const date = new Date();
    try {
      // await addDoc(ColRef, { email });
      await setDoc(DocRef, { email, name, date, photo });
    } catch (e) {
      alert("there is a data", e);
    }
  } else {
    // alert("welcome back");
    return DocRef;
  }
  return DocRef;
};
