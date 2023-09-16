'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "firebase/compat/auth";
import Cards from './cards';
import { AuthContext } from "src/app/FirebaseContext.js";
import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import app from '../Firebase';

export default function Game() {

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
						<Nav.Link href="./game">Game</Nav.Link>
						<Nav.Link href="./write">Write</Nav.Link>
					</Nav>
					<Nav>
						<RenderLoginUI />
					</Nav>
				</Container>
			</Navbar>
			<br />
			<div style={{


			}} className="container">
				<h1>Game Page</h1>
				<p />
				<RenderCards />
				<p>
					This page is under construction. Please come back later for a super cool
					AI-related project!
				</p>
			</div>
		</div>
	)
}


function RenderCards() {
	const { user } = useContext(AuthContext);

	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		return (
			<>
				<Cards id='cardOne' prompt='Prompt One' code='Code One'> </Cards>
				<Cards id='cardTwo' prompt='Prompt Two' code='Code Two'> </Cards>
				<Cards id='cardThree' prompt='Prompt Three' code='Code Three'> </Cards>
				<Cards id='cardFour' prompt='Prompt Four' code='Code Four'> </Cards>
				<Cards id='cardFive' prompt='Prompt Five' code='Code Five'> </Cards>
				<Cards id='cardSix' prompt='Prompt Six' code='Code Six'> </Cards>
				<Cards id='cardSeven' prompt='Prompt Seven' code='Code Seven'> </Cards>
				<Cards id='cardEight' prompt='Prompt Eight' code='Code Eight'> </Cards>
				<Cards id='cardNine' prompt='Prompt Nine' code='Code Nine'> </Cards>
				<Cards id='cardTen' prompt='Prompt Ten' code='Code Ten'> </Cards>
			</>
		)
	} else {
		return (
			<p>Please log in to continue.</p>
		)
	}
};

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