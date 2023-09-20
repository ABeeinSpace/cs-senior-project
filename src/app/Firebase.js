//1. import the dependencies
import firebase from "firebase/compat/app";
import "firebase/auth";
import {
	getFirestore, collection, getDocs
}from 'firebase/firestore'

//2. Initialize app with the config vars
const app = firebase.initializeApp({
	apiKey: "AIzaSyAThWUht-tNf-REso6KxH1tKQ3PXfeCifw",
	authDomain: "cs-senior-project-9c0e0.firebaseapp.com",
	projectId: "cs-senior-project-9c0e0",
	storageBucket: "cs-senior-project-9c0e0.appspot.com",
	messagingSenderId: "1054365365385",
	appId: "1:1054365365385:web:fdd0bf6ce2f08ee09dc258"
});

// const db = getFirestore()

// const colRef = collection(db, 'prompts')

// getDocs(colRef)
// 	.then((snapshot) => {
// 		let prompts = []
// 		snapshot.docs.forEach((doc) =>{
// 			prompts.push({...doc.data(), id: doc.id})
// 		})
// 		console.log(prompts)
// 	})
// 	.catch(err =>{
// 		console.log(err.message)
// 	})

//3. export it for use
export default app;