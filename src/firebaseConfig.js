import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2wwcYW_YTIhJj6KcskIxsKq8nWVE02zE",
    authDomain: "testlogin-7dc57.firebaseapp.com",
    projectId: "testlogin-7dc57",
    apiKey: "AIzaSyD2wwcYW_YTIhJj6KcskIxsKq8nWVE02zE",
    authDomain: "testlogin-7dc57.firebaseapp.com",
    projectId: "testlogin-7dc57",
    storageBucket: "testlogin-7dc57.appspot.com",
    messagingSenderId: "75254857826",
    appId: "1:75254857826:web:d094f2caf952707e29513b",
    measurementId: "G-8XPBKPND3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;