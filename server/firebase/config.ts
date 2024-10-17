// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cartiger-3cbf0.firebaseapp.com",
  projectId: "cartiger-3cbf0",
  storageBucket: "cartiger-3cbf0.appspot.com",
  messagingSenderId: "741858805241",
  appId: "1:741858805241:web:c593b6809c8650873e6928",
  measurementId: "G-3R9R6VLM03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseStore = getStorage(app);
