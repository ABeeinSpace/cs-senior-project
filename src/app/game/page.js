'use client'

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cards from './cards';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';

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
						<Nav.Link href="./login">Login</Nav.Link>
						<Nav.Link href="#signup">Sign Up</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<br />
			<div style={{
				

			}}className="container">
				<h1>Game Page</h1>
				<p />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<p>
					This page is under construction. Please come back later for a super cool
					AI-related project!
				</p>
			</div>
		</div>

	)
}
