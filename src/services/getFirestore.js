import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrf0cMlfnRCOjqLN74uTunNsp2ZgnH6ZU",
    authDomain: "my-commerce-1a5a4.firebaseapp.com",
    projectId: "my-commerce-1a5a4",
    storageBucket: "my-commerce-1a5a4.appspot.com",
    messagingSenderId: "776165350381",
    appId: "1:776165350381:web:517054674405a9ad65a5e4"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

export default function getFirestore() {
    return db;
}
