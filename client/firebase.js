// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-effe2.firebaseapp.com",
  projectId: "real-estate-effe2",
  storageBucket: "real-estate-effe2.firebasestorage.app",
  messagingSenderId: "311226265828",
  appId: "1:311226265828:web:a32ec98ffdf550568e7cf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);