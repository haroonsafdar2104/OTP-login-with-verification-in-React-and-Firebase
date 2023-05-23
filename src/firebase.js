import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTibti25_EWxs7HQy_Ex-hrYRyeUGzCZ0",
  authDomain: "otp-auth-5064a.firebaseapp.com",
  projectId: "otp-auth-5064a",
  storageBucket: "otp-auth-5064a.appspot.com",
  messagingSenderId: "853193261268",
  appId: "1:853193261268:web:a0a0ea5db3a22053f5bb41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
