'use client'

import React, { useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default function FirebaseUIReact(params) {
	useEffect(() => {
		const app = initialiseFirebase();
		const auth = firebase.auth(app);
		instantiateFirebaseUI(app);
		console.log(auth.currentUser);
	});
}

function initialiseFirebase() {

	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyAThWUht-tNf-REso6KxH1tKQ3PXfeCifw",
		authDomain: "cs-senior-project-9c0e0.firebaseapp.com",
		projectId: "cs-senior-project-9c0e0",
		storageBucket: "cs-senior-project-9c0e0.appspot.com",
		messagingSenderId: "1054365365385",
		appId: "1:1054365365385:web:fdd0bf6ce2f08ee09dc258"
	};

	// Initialize Firebase
	const app = firebase.initializeApp(firebaseConfig);
	return app;
}


function instantiateFirebaseUI(app) {
	var uiConfig = {
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

	var ui = new firebaseui.auth.AuthUI(firebase.auth());
	ui.start('#firebaseui-auth-container', uiConfig);

	// The start method will wait until the DOM is loaded.

}