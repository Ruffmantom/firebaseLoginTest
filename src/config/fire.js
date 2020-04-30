import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCgWvLHgO8-Nh39yn9Irrmm-PktXOFcUls",
    authDomain: "testreact-2fdfc.firebaseapp.com",
    databaseURL: "https://testreact-2fdfc.firebaseio.com",
    projectId: "testreact-2fdfc",
    storageBucket: "testreact-2fdfc.appspot.com",
    messagingSenderId: "1047644101898",
    appId: "1:1047644101898:web:4d7ba668bd7781c432aef3",
    measurementId: "G-0EWVKW1Y93"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;