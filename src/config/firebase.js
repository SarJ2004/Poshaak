// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/compat/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQVLGYYCVdH2w-4iMS7AmWhCBZ_fWKADs",
  authDomain: "poshaak-b2ad3.firebaseapp.com",
  projectId: "poshaak-b2ad3",
  storageBucket: "poshaak-b2ad3.appspot.com",
  messagingSenderId: "828847142446",
  appId: "1:828847142446:web:388af08890d3b8e7c791bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
