import firebase from "../node_modules/firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDl1jRU4X3vrpJqUWU0K-CasVB-l1e9GgQ",
    authDomain: "test-sofwrap.firebaseapp.com",
    databaseURL: "https://test-sofwrap-default-rtdb.firebaseio.com",
    projectId: "test-sofwrap",
    storageBucket: "test-sofwrap.appspot.com",
    messagingSenderId: "676712781915",
    appId: "1:676712781915:web:2f2e6d8e5cff0080cdc77e",
    measurementId: "G-7NRNL2N4TL"
  };

  let fireDB = firebase.initializeApp(firebaseConfig)

  export default fireDB