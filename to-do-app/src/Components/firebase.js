import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfbuV0PtB7zvMsWn6PqARtlU9rAELTZvI",
    authDomain: "to-do19.firebaseapp.com",
    projectId: "to-do19",
    storageBucket: "to-do19.appspot.com",
    messagingSenderId: "297590309933",
    appId: "1:297590309933:web:95819378064ded99ee64a4",
    measurementId: "G-0MYQ6SYRQ5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
