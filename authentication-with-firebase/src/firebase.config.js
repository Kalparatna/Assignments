import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSSTnkVrJwxorU4hCvNl7joFQNz34Vwuc",
  authDomain: "authenticationapp-33783.firebaseapp.com",
  projectId: "authenticationapp-33783",
  storageBucket: "authenticationapp-33783.firebasestorage.app",
  messagingSenderId: "1059998159314",
  appId: "1:1059998159314:web:ea85ec601b2d36bcf3f80b",
  measurementId: "G-G06NW0DFPX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
