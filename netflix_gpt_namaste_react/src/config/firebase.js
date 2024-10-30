import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration using environment variables
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: "AIzaSyCyzPr9IMHmpzkXmpPKC9cF6evPqvaC7gc",
  authDomain: "netflixgpt-34ea0.firebaseapp.com",
  projectId: "netflixgpt-34ea0",
  storageBucket: "netflixgpt-34ea0.appspot.com",
  messagingSenderId: "453622124467",
  appId: "1:453622124467:web:c8a42860648dc22a1185c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth();
