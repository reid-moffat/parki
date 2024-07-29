import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

// Firebase configuration (API key is non-sensitive, just an identifier so can be public)
const firebaseConfig = {
    apiKey: "AIzaSyB5XlB3gS3nh5UD6ssExhXD4das2_FD_Fs",
    authDomain: "qtma-2023-2024.firebaseapp.com",
    projectId: "qtma-2023-2024",
    storageBucket: "qtma-2023-2024.appspot.com",
    messagingSenderId: "132743444471",
    appId: "1:132743444471:web:cd8858d9e981ef6d4f60f2"
};

// Initialize Firebase so we can call API & auth
const app = initializeApp(firebaseConfig);

// All firebase access will be done through our API (functions), except a few authentication function (sign in/out)
const functions = getFunctions(app);
const auth = getAuth(app);

const callApi = (endpoint: string) => httpsCallable(functions, endpoint);

export { auth, callApi };
