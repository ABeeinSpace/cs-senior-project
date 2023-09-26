'use client'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import app from "src/app/Firebase.js";
import 'firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	getFirestore, collection, getDocs, doc, setDoc, getDoc
} from 'firebase/firestore'
import 'src/app/page.module.css';


export default function FirebaseUI() {

	var uiConfig = {
		callbacks: {
			signInSuccessWithAuthResult: function (authResult, redirectUrl) {
				// if (!authResult.additionalUserInfo.isNewUser) {
				const db = getFirestore(); //Get a reference to the Firestore instance, using the Firebase reference we got previously.

				// const docReference = doc(db, "users", authResult.user.uid)
				// const docSnap = await getDoc(docReference)


				// if (!docSnap.exists()) {
				// 	console.log("Doc does not exist!")
				// }

				setDoc(doc(db, "users", authResult.user.uid), {
					hasGuessed: false,
					isStudent: false,
					userID: authResult.user.uid
				}).then(() => {
					location.assign("http://localhost:3000")
				});
				// }


				return false;
			},
		},

		signInSuccessUrl: '/',
		signInOptions: [
			{
				provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				scopes: [
					'https://www.googleapis.com/auth/contacts.readonly'
				],
				customParameters: {
					// Forces account selection even when one account
					// is available.
					prompt: 'select_account'
				}
			}, firebase.auth.PhoneAuthProvider.PROVIDER_ID,
			firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
		],
		// tosUrl and privacyPolicyUrl accept either url string or a callback
		// function.
		// Terms of service url/callback.
		tosUrl: '<your-tos-url>',
		// Privacy policy url/callback.


	};
	// Initialize the FirebaseUI Widget using Firebase.

	const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
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