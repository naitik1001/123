import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    //const firebaseConfig = {
        apiKey: "AIzaSyCq_EiBLkgzo3zEjRcukug80-sjqlAGuQ4",
        authDomain: "proc67-6a538.firebaseapp.com",
        projectId: "proc67-6a538",
        storageBucket: "proc67-6a538.appspot.com",
        messagingSenderId: "259563519634",
        appId: "1:259563519634:web:535884835178efb257704b"
     // };
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();