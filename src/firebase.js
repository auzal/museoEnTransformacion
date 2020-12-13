export function initFirebase() {  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBxsdNVf9M4kV6h0zPpZCyJ-sAY3uJupCA",
    authDomain: "auzal-new-museum.firebaseapp.com",
    projectId: "auzal-new-museum",
    storageBucket: "auzal-new-museum.appspot.com",
    messagingSenderId: "571983042511",
    appId: "1:571983042511:web:cde768baa7b59f0a6764ba",
    measurementId: "G-PGZLJNQJQT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
