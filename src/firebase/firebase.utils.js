import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFMKkAk4dKDPjG0iELF890eOubIs60jYg",
  authDomain: "crwn-db-7fa3c.firebaseapp.com",
  projectId: "crwn-db-7fa3c",
  storageBucket: "crwn-db-7fa3c.appspot.com",
  messagingSenderId: "324914897353",
  appId: "1:324914897353:web:60c1a1b091a0203ff64818",
  measurementId: "G-KNPWFSDKZX"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists)
  {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }

  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;