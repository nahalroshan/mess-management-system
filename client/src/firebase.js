import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvuH75FkE3li_dXsDaA03DRPZtbzv1qRY",
    authDomain: "dbms-project-1a9bf.firebaseapp.com",
    projectId: "dbms-project-1a9bf",
    storageBucket: "dbms-project-1a9bf.appspot.com",
    messagingSenderId: "108302637620",
    appId: "1:108302637620:web:990cfc0380ca30979b0861"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;