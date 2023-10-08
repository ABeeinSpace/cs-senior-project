'use client'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import app from "src/app/Firebase.js";
import 'firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	getFirestore, collection, getDocs, doc, setDoc, getDoc
} from 'firebase/firestore'
import 'src/app/page.module.css';


export default function FirebaseUI() {

	var uiConfig = {
		signInFlow: 'popup',
		callbacks: {
			signInSuccessWithAuthResult: function (authResult, redirectUrl) {
				if (!authResult.additionalUserInfo.isNewUser) {
					const db = getFirestore(); //Get a reference to the Firestore instance, using the Firebase reference we got previously.

					setDoc(doc(db, "users", authResult.user.uid), {
						hasGuessed: false,
						isStudent: false,
						guessed: 0,
						correctness: 0,
						userID: authResult.user.uid
					}).then(() => {
						location.assign("http://localhost:3000")
					});
				} else {
					location.assign("/")
				}


				return false;
			},
		},

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
		tosUrl: 'https://youtu.be/dQw4w9WgXcQ?si=7jzmBjue1mwk18zt',
		// Privacy policy url/callback.


	};
	// Initialize the FirebaseUI Widget using Firebase.

	const ui = new firebaseui.auth.AuthUI(firebase.auth());
	ui.start('#firebaseui-auth-container', uiConfig);
	// The start method will wait until the DOM is loaded.

}

async function createAdditionalUserInfo(authResult) {
	const db = getFirestore(); //Get a reference to the Firestore instance, using the Firebase reference we got previously.

	const docReference = doc(db, "users", authResult.user.uid)
	const docSnap = await getDoc(docReference)


	if (docSnap.exists() == false) {
		console.log("Doc does not exist!")
	}
}