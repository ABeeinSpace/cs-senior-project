'use client'

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import app from "src/app/Firebase.js";
import 'firebaseui/dist/firebaseui.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';

// import * as firebaseui from 'firebaseui'


export default function Login() {

	const FirebaseUI = dynamic(
		() => import('./FirebaseUI'),
		{ ssr: false }
	)

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
					<React.StrictMode>
						< FirebaseUI />
					</React.StrictMode>

				</Container>
			</div>
		</div>

	)
}
