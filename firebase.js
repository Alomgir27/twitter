// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSCwVYgPaH0Ek9DcpdXhWrBm8m7Sbbyw4",
    authDomain: "twitter-clone-yt-935ca.firebaseapp.com",
    projectId: "twitter-clone-yt-935ca",
    storageBucket: "twitter-clone-yt-935ca.appspot.com",
    messagingSenderId: "737220900439",
    appId: "1:737220900439:web:7702cd4b967f371f2dd512"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };