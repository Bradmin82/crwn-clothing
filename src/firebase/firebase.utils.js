import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6QXfgx4g7NS_3O-rPLYElgl9DVawdjvM",
    authDomain: "crwn-db-5db58.firebaseapp.com",
    databaseURL: "https://crwn-db-5db58.firebaseio.com",
    projectId: "crwn-db-5db58",
    storageBucket: "crwn-db-5db58.appspot.com",
    messagingSenderId: "232949928624",
    appId: "1:232949928624:web:f03fa5ec4da25e2b116175",
    measurementId: "G-7DF3P87YW9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;