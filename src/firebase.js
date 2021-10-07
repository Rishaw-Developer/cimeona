import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCF_GAG1wV67u62ZuUHB-arn1UI-qTjASQ",
  authDomain: "cimeona-d3b7f.firebaseapp.com",
  projectId: "cimeona-d3b7f",
  storageBucket: "cimeona-d3b7f.appspot.com",
  messagingSenderId: "721279863637",
  appId: "1:721279863637:web:5cad85cd6329e542d6bddc",
  measurementId: "G-LY412G6S9Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
