// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/compat/app";
import "firebase/compat/auth"
import firebaseui from "firebaseui";
import { } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function InitFirebase() {
	var uiConfig = {
		callbacks: {
			signInSuccessWithAuthResult: function (authResult, redirectUrl) {
				firebaseui.auth.
				var displayName = user.displayName;
				var email = user.email;
				var emailVerified = user.emailVerified;
				var photoURL = user.photoURL;
				var uid = user.uid;
				var phoneNumber = user.phoneNumber;
				var providerData = user.providerData;
				return true;
			},
		},
		// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
		signInFlow: 'popup',
		signInSuccessUrl: '/',
		signInOptions: [
			// Leave the lines as is for the providers you want to offer your users.
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.PhoneAuthProvider.PROVIDER_ID
		],
		// Terms of service url.
		tosUrl: '<your-tos-url>',
		// Privacy policy url.
		privacyPolicyUrl: '<your-privacy-policy-url>'
	};


	// Initialize Firebase
	const firebaseApp = initializeApp(firebaseConfig);
	return firebaseApp;
}

function initAuth(firebaseApp) {

}