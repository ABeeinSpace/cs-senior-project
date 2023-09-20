'use client'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import app from "src/app/Firebase.js";
import 'firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';


export default function FirebaseUI() {

	var uiConfig = {
		callbacks: {
			// signInSuccessWithAuthResult: function (authResult, redirectUrl) {
			// 	Firebase.auth(app).applyActionCode
			// 	var displayName = user.displayName;
			// 	var email = user.email;
			// 	var emailVerified = user.emailVerified;
			// 	var photoURL = user.photoURL;
			// 	var uid = user.uid;
			// 	var phoneNumber = user.phoneNumber;
			// 	var providerData = user.providerData;
			// 	return true;
			// },
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