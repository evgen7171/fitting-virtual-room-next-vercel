import firebase from 'firebase';

try {
    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: "fittingvroom.firebaseapp.com",
            databaseURL: "https://fittingvroom-default-rtdb.firebaseio.com",
            projectId: "fittingvroom",
            storageBucket: "fittingvroom.appspot.com",
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID
        });
    } else {
        firebase.app(); // if already initialized, use that one
    }
} catch (e) {
    throw new Error(e.message);
}

export const firebaseDB = firebase.database();
export default {firebaseDB};