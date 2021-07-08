import firebase from 'firebase/app';
import 'firebase/firestore';

  const  firebaseConfig = {
    apiKey: "AIzaSyAwRpAatH7vgfqDtCoVbEdM9VLqa1yytWw",
    authDomain: "formulario2-99398.firebaseapp.com",
    projectId: "formulario2-99398",
    storageBucket: "formulario2-99398.appspot.com",
    messagingSenderId: "727813498312",
    appId: "1:727813498312:web:e7a5a2dbe19c32056a4cfd"
  };
  
  const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore(); 