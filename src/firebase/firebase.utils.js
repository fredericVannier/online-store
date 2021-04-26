import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBLw81V5xVRtC65baa90jNolk-ixTQAuAQ",
  authDomain: "online-store-db-b9fa8.firebaseapp.com",
  projectId: "online-store-db-b9fa8",
  storageBucket: "online-store-db-b9fa8.appspot.com",
  messagingSenderId: "380813392945",
  appId: "1:380813392945:web:66db48560e4f3d822ea910",
  measurementId: "G-ZSN63X00Z2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
