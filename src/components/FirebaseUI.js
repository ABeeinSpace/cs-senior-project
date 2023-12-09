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
		signInSuccessUrl: '/single-prompt',
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