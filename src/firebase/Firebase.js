// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9SSn-ZG2n1Mgh3wQn8aFo86RsZxYL3xI",
  authDomain: "form-react-f6d3a.firebaseapp.com",
  projectId: "form-react-f6d3a",
  storageBucket: "form-react-f6d3a.appspot.com",
  messagingSenderId: "416626425390",
  appId: "1:416626425390:web:33d5ffd4657c1a053969bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export default Auth;