'use client'

import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap';
import { AuthContext } from "src/app/FirebaseContext.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
// import {
// 	getFirestore, collection, getDocs
// } from 'firebase/firestore'
import { FirebaseContext } from "../FirebaseContext";
import CGTNavbar from 'src/components/navbar.js';


export default function Write() {

	return (
		<div>
			<CGTNavbar activePage="./write"/>
			<br />
			<Container className="container">
				<h1>Write Page</h1>
				<p />
				<p>
					This page is under construction. Please come back later for a super cool
					AI-related project!
				</p>
				{/* <UserTest /> */}
			</Container>
		</div>

	)
}

function RenderLoginUI() {

	const { user } = useContext(AuthContext);

	if (user != null) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		// ...
		return (
			<NavDropdown title={user.displayName}>
				<NavDropdown.Item>Account Settings</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item onClick={() => handleSignOut()}>Sign Out</NavDropdown.Item>
			</NavDropdown>
		)
	} else {
		return (
			<Nav.Link href="./login">Login</Nav.Link>)
	};
}

function handleSignOut() {
	firebase.auth().signOut().then(function () {
		console.log('Signed Out');
	}, function (error) {
		console.error('Sign Out Error', error);
	});
}

// function UserTest() {
// 	const user = useContext(AuthContext);
// 	if (user != null) {

// 		const db = getFirestore(); //Get a reference to the Firestore instance, using the Firebase reference we got previously.

// 		const usersCollection = collection(db, 'users'); //Get a reference to the users collection in Firestore
// 		getDocs(usersCollection).then((dbSnapshot) => {
// 			console.log(dbSnapshot.docs[1].data())
// 		})
// 	}


// }