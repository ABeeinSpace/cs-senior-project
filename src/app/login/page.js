'use client'

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { initializeApp } from "firebase/app";

// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Link
// } from "react-router-dom";
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';

export default function Login() {

	var app = initialiseFirebase();
	return (
		<div>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Turing Test-Inator!</title>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">ChatGPTuring</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Game</Nav.Link>
						<Nav.Link href="#pricing">Write</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<br />
			<div className="container">
				<h1>Login</h1>
				<p />
				<Container className="firebaseui-auth-container">
					{FirebaseUI()}
				</Container>
			</div>
		</div>

	)
}



// function FirebaseUI(app) {
// 	var uiConfig = {
// 		signInSuccessUrl: '<url-to-redirect-to-on-success>',
// 		signInOptions: [
// 			// Leave the lines as is for the providers you want to offer your users.
// 			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// 			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
// 			firebase.auth.TwitterAuthProvider.PROVIDER_ID,
// 			firebase.auth.GithubAuthProvider.PROVIDER_ID,
// 			firebase.auth.EmailAuthProvider.PROVIDER_ID,
// 			firebase.auth.PhoneAuthProvider.PROVIDER_ID,
// 			firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
// 		],
// 		// tosUrl and privacyPolicyUrl accept either url string or a callback
// 		// function.
// 		// Terms of service url/callback.
// 		tosUrl: '<your-tos-url>',
// 		// Privacy policy url/callback.


// 	};
// 	// Initialize the FirebaseUI Widget using Firebase.
// 	var ui = new firebaseui.auth.AuthUI(firebase.auth());
// 	// The start method will wait until the DOM is loaded.
// 	ui.start('#firebaseui-auth-container', uiConfig);

// }

// function initialiseFirebase() {

// 	// Your web app's Firebase configuration
// 	const firebaseConfig = {
// 		apiKey: "AIzaSyAThWUht-tNf-REso6KxH1tKQ3PXfeCifw",
// 		authDomain: "cs-senior-project-9c0e0.firebaseapp.com",
// 		projectId: "cs-senior-project-9c0e0",
// 		storageBucket: "cs-senior-project-9c0e0.appspot.com",
// 		messagingSenderId: "1054365365385",
// 		appId: "1:1054365365385:web:fdd0bf6ce2f08ee09dc258"
// 	};

// 	// Initialize Firebase
// 	const app = initializeApp(firebaseConfig);
// }