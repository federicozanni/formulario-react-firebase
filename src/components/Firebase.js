import firebase from 'firebase/app';
import 'firebase/firestore';

//conexion a firebase
  const  firebaseConfig = {
    apiKey: "AIzaSyAcXnLtW1ICRmIHYS6yH2jo0_PJ9eVvHno",
    authDomain: "formulario-340c4.firebaseapp.com",
    projectId: "formulario-340c4",
    storageBucket: "formulario-340c4.appspot.com",
    messagingSenderId: "659972277574",
    appId: "1:659972277574:web:98308d7fc253e5b2a3d147",
    measurementId: "G-38K47PKBTQ"
  };
  // iniciar firebase
  const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore(); 

