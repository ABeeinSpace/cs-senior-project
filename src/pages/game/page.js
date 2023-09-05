'use client'

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
				<h1>Game Page</h1>
				<p />
				<p>
					This page is under construction. Please come back later for a super cool
					AI-related project!
				</p>
			</div>
		</div>

	)
}
