import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-64d83.firebaseapp.com",
  projectId: "chat-app-64d83",
  storageBucket: "chat-app-64d83.appspot.com",
  messagingSenderId: "165628738955",
  appId: "1:165628738955:web:afdc3d6a83532e2886c38e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
