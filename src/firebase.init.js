import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTHDOMAIN,
  authDomain: process.env.REACT_APP_PROJECTID,
  projectId: process.env.REACT_APP_STORAGEBUCKET,
  storageBucket: process.env.REACT_APP_APIKEY,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
