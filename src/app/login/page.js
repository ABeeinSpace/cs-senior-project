'use client'

import React from "react";
import dynamic from "next/dynamic";
import { Container, Nav, Navbar } from "react-bootstrap";
// import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import app from "../../lib/Firebase";
import 'firebaseui/dist/firebaseui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';

export default function Login() {

	const FirebaseUI = dynamic(
		() => import('src/components/FirebaseUI.js'),
		{ ssr: false }
	)

	return (
		<div>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="./game">Single Prompt</Nav.Link>
						<Nav.Link href="./gameTwo">Dual Prompt</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<br />
			<div className="container">
				<h1>Login</h1>
				<p />
				{/* <Alert id="loginAlert" variant="primary">
					Please disable Firefox's Enhanced Tracking Protection or Safari's "Prevent cross-site tracking" to login
				</Alert> */}
				<Container id="firebaseui-auth-container">
					{/* <FirestoreTest /> */}
					<FirebaseUI />

				</Container>
			</div>
		</div>

	)
}
