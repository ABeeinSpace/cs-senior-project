'use client'

import React, { useContext, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from "src/app/FirebaseContext.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';

export default function Write() {

	return (
		<div>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Turing Test-Inator!</title>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
					<Nav className="me-auto" activeKey="./write">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="./game">Game</Nav.Link>
						<Nav.Link href="./write">Write</Nav.Link>
					</Nav>
					<Nav>
						<RenderLoginUI />
					</Nav>
				</Container>
			</Navbar>
			<br />
			<Container className="container">
				<h1>Write Page</h1>
				<p />
				<p>
					This page is under construction. Please come back later for a super cool
					AI-related project!
				</p>
			</Container>
		</div>

	)
}

function RenderLoginUI(app) {

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