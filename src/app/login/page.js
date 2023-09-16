'use client'

import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import app from "src/app/Firebase.js";
import 'firebaseui/dist/firebaseui.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import * as firebaseui from 'firebaseui'


export default function Login() {

	return (
		<div>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Turing Test-Inator!</title>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/game">Game</Nav.Link>
						<Nav.Link href="/writing">Write</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<br />
			<div className="container">
				<h1>Login</h1>
				<p />
				<Container id="firebaseui-auth-container">

					< FirebaseUI />

				</Container>
			</div>
		</div>

	)
}


function FirebaseUI() {


	var uiConfig = {
		callbacks: {
			signInSuccessWithAuthResult: function (authResult, redirectUrl) {
				Firebase.auth(app).applyActionCode
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

	useEffect(() => {
		var ui = new firebaseui.auth.AuthUI(firebase.auth(app));
		ui.start('#firebaseui-auth-container', uiConfig);
	}, []);
	// The start method will wait until the DOM is loaded.

}