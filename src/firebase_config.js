import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyDxVqq-8AG84j-gAyILujJT9OpDNLrZyyc",
	authDomain: "todolist-46698.firebaseapp.com",
	projectId: "todolist-46698",
	storageBucket: "todolist-46698.appspot.com",
	messagingSenderId: "915956443192",
	appId: "1:915956443192:web:2bed1bd0ce5037b7fa1ecd"
      };

      firebase.initializeApp(firebaseConfig);

      const db = firebase.firestore();

      export { db };