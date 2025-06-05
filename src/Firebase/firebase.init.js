// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdgA2CGg1HC4Ja_ze28TwTCesO7Da7IKI",
  authDomain: "a11-ratewise.firebaseapp.com",
  projectId: "a11-ratewise",
  storageBucket: "a11-ratewise.firebasestorage.app",
  messagingSenderId: "196551884947",
  appId: "1:196551884947:web:80d20b4b97d84411088d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);