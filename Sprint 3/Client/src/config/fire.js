import firebase from 'firebase';

//Setting up google firebase for user authentication and setting up the database to record chat history. 


const firebaseConfig = {
    apiKey: "AIzaSyBXvNHAAK8FaIkKptcCYKdZquEHHG9AuXM",
    authDomain: "capstone-2e49f.firebaseapp.com",
    databaseURL: "https://capstone-2e49f.firebaseio.com",
    projectId: "capstone-2e49f",
    storageBucket: "capstone-2e49f.appspot.com",
    messagingSenderId: "697274788808",
    appId: "1:697274788808:web:0ee2c433a924c4aadbaefd",
    measurementId: "G-DZ0W6J7QSK"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default fire;
