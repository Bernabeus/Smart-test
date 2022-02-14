// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1HFORjoLMQmtrY_QcTP9c-jN8D7Xmm4Y",
  authDomain: "test-smart-4a805.firebaseapp.com",
  projectId: "test-smart-4a805",
  storageBucket: "test-smart-4a805.appspot.com",
  messagingSenderId: "606884295373",
  appId: "1:606884295373:web:b375c3f233e89e80842f84",
  measurementId: "G-T4WSJEJR5Q"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
        // Check that `window` is in scope for the analytics module!
        if (typeof window !== 'undefined') {
            // Enable analytics. https://firebase.google.com/docs/analytics/get-started
            if ('measurementId' in clientCredentials) {
                firebase.analytics()
                firebase.performance()
            }
        }
        console.log('Firebase was successfully init.')
    }
}