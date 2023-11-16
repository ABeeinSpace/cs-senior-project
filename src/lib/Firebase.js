//1. import the dependencies
import firebase from "firebase/compat/app";
import "firebase/auth";
import {
	getFirestore, collection, getDocs
}from 'firebase/firestore'
import 'dotenv/config'
import { configDotenv } from "dotenv";

configDotenv()
//2. Initialize app with the config vars
const app = firebase.initializeApp({
	apiKey: process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_REACT_APP_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_REACT_APP_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_REACT_APP_APP_ID
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