import React, { useEffect }  from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default function FirebaseUIReact(params) {
	useEffect(function mount() {
		const app = initialiseFirebase();
	});

}

function instantiateFirebaseUI(app) {
	var uiConfig = {
		signInSuccessUrl: '<url-to-redirect-to-on-success>',
		signInOptions: [
			// Leave the lines as is for the providers you want to offer your users.
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.TwitterAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
			firebase.auth.PhoneAuthProvider.PROVIDER_ID,
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
	const app = initializeApp(firebaseConfig);
}