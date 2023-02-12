import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCTcKgpVbXta9Cjec1eRtU4XLpx63p_wM0",
    authDomain: "final-hackathon-7c88e.firebaseapp.com",
    projectId: "final-hackathon-7c88e",
    storageBucket: "final-hackathon-7c88e.appspot.com",
    messagingSenderId: "883151899738",
    appId: "1:883151899738:web:2d334a19dedc17b9d4dc63",
    measurementId: "G-JJ59NTJ0RR"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const storage = getStorage(app)

export {
    db,
    auth
}