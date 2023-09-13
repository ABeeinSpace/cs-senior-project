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
				<Cards id = 'cardOne' prompt = 'Prompt One' code = 'Code One'> </Cards>
				<Cards id = 'cardTwo' prompt = 'Prompt Two' code = 'Code Two'> </Cards>
				<Cards id = 'cardThree' prompt = 'Prompt Three'code = 'Code Three'> </Cards>
				<Cards id = 'cardFour' prompt = 'Prompt Four'code = 'Code Four'> </Cards>
				<Cards id = 'cardFive' prompt = 'Prompt Five'code = 'Code Five'> </Cards>
				<Cards id = 'cardSix' prompt = 'Prompt Six'code = 'Code Six'> </Cards>
				<Cards id = 'cardSeven' prompt = 'Prompt Seven'code = 'Code Seven'> </Cards>
				<Cards id = 'cardEight' prompt = 'Prompt Eight'code = 'Code Eight'> </Cards>
				<Cards id = 'cardNine' prompt = 'Prompt Nine'code = 'Code Nine'> </Cards>
				<Cards id = 'cardTen' prompt = 'Prompt Ten'code = 'Code Ten'> </Cards>
				<p>
					This page is under construction. Please come back later for a super cool
					AI-related project!
				</p>
			</div>
		</div>

	)
}
