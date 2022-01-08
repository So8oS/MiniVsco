import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyAOUOI781BfH3rqRu_pfEnODj1AiWI7xjM",
  authDomain: "minivsco-44de9.firebaseapp.com",
  projectId: "minivsco-44de9",
  storageBucket: "minivsco-44de9.appspot.com",
  messagingSenderId: "492818709592",
  appId: "1:492818709592:web:a25dceb756362f97cc9e2d",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
