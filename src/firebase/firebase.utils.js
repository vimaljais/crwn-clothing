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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
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
