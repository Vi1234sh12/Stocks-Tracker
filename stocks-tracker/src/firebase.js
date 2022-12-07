
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCf9KHQ2V28N1J03X6NPCmibLDoUnmdzZA",
    authDomain: "stocks-tracker-208a6.firebaseapp.com",
    projectId: "stocks-tracker-208a6",
    storageBucket: "stocks-tracker-208a6.appspot.com",
    messagingSenderId: "133966773123",
    appId: "1:133966773123:web:64c0dea8b986b8522b94b6"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };