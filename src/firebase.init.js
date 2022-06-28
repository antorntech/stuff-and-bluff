// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUj07ow26Aj6dUz6S35NIiV06zyW4gk7c",
  authDomain: "stuff-and-bluff-7cbda.firebaseapp.com",
  projectId: "stuff-and-bluff-7cbda",
  storageBucket: "stuff-and-bluff-7cbda.appspot.com",
  messagingSenderId: "1044661847865",
  appId: "1:1044661847865:web:268595aab27c9a75708ae8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
