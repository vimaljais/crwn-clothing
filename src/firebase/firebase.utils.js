import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDzuh_YKu-6j-Y6iOiWjnD1hDg_bnrT8LU",
  authDomain: "crown-ede2a.firebaseapp.com",
  databaseURL: "https://crown-ede2a.firebaseio.com",
  projectId: "crown-ede2a",
  storageBucket: "crown-ede2a.appspot.com",
  messagingSenderId: "919450711454",
  appId: "1:919450711454:web:1f08fc6b320cb36a09d28f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  console.log("dadadadssss");
  auth.signInWithPopup(provider);
};

export default firebase;
