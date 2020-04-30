import firebase from "firebase";
require('dotenv').config()

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN ,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PRO_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;


