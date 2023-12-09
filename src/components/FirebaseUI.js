'use client'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	getFirestore, doc, setDoc
} from 'firebase/firestore'
import '../app/page.module.css';


export default function FirebaseUI() {

	var uiConfig = {
		signInFlow: 'popup',
		// callbacks: {
		// 	signInSuccessWithAuthResult: function (authResult, redirectUrl) {
		// 		const db = getFirestore(); //Get a reference to the Firestore instance, using the Firebase reference we got previously.
				
		// 		console.log(authResult.user.metadata)

		// 		if (authResult.user.metadata.createdAt <= (authResult.user.metadata.lastLoginAt + 500) ) {

		// 			setDoc(doc(db, "users", authResult.user.uid), {
		// 				hasGuessed: false,
		// 				isStudent: false,
		// 				guessed: 0,
		// 				correctness: 0,
		// 				userID: authResult.user.uid,
		// 				gradeLevel: "test",
		// 				correctAIGameOne: 0,
		// 				correctHumanGameOne: 0,
		// 				correctnessGameTwo: 0,
		// 				guessedAIGameOne: 0,
		// 				guessedAIGameOne: 0,
		// 				guessedGameTwo: 0,
		// 				guessedHumanGameOne: 0
		// 			}, { merge: true }).then(() => {
		// 				location.assign("/account-settings")
		// 			});
		// 		} else {
		// 			location.assign("/")
		// 		}

		// 		return false
		// 	}
		// },

		signInSuccessUrl: '/',
		signInOptions: [
			{
				provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				customParameters: {
					// Forces account selection even when one account
					// is available.
					prompt: 'select_account'
				}
			},
			firebase.auth.EmailAuthProvider.PROVIDER_ID,

		],
		// tosUrl and privacyPolicyUrl accept either url string or a callback
		// function.
		// Terms of service url/callback.
		tosUrl: '',
		// Privacy policy url/callback.


	};
	// Initialize the FirebaseUI Widget using Firebase.

	const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
	ui.start('#firebaseui-auth-container', uiConfig);
	// The start method will wait until the DOM is loaded.

}