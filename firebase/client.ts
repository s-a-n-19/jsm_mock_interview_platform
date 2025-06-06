import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMMnHsBGlnuGPL-xct2g3DgPOBV6S7RZ4",
  authDomain: "prepwise-ce165.firebaseapp.com",
  projectId: "prepwise-ce165",
  storageBucket: "prepwise-ce165.firebasestorage.app",
  messagingSenderId: "744059958444",
  appId: "1:744059958444:web:b787b6e6e58aadd4a85b09",
  measurementId: "G-XCSHN8HHR4",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
