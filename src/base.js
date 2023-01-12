import firebase from "firebase/compat/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { auth } from "firebaseui";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

if (process.env.NODE_ENV === "development") {
  const myAuth = getAuth();
  connectAuthEmulator(myAuth, "http://localhost:9099");
}

export default app;
