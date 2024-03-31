import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseDetails = require('../utils/firebasedetails');

const firebaseConfig = {
  apiKey: firebaseDetails.FIREBASE_API_KEY,
  authDomain: firebaseDetails.FIREBASE_AUTH_DOMAIN,
  projectId: firebaseDetails.FIREBASE_PROJECT_ID,
  storageBucket: firebaseDetails.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebaseDetails.FIREBASE_MESSAGING_SENDER_ID,
  appId: firebaseDetails.FIREBASE_APP_ID,
  measurementId: "G-JTF29993CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;