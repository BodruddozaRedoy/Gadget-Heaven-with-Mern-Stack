// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx3QuXt6d4fZOTwYhvP_HXrNRKDCxOE68",
  authDomain: "gadget-heaven-d9be9.firebaseapp.com",
  projectId: "gadget-heaven-d9be9",
  storageBucket: "gadget-heaven-d9be9.firebasestorage.app",
  messagingSenderId: "384752610035",
  appId: "1:384752610035:web:e261eae0a4c5b7af62a586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)