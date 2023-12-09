'use client'

import React from "react";
import dynamic from "next/dynamic";
import { Container, Nav, Navbar } from "react-bootstrap";
// import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import app from "../../lib/Firebase";
import 'firebaseui/dist/firebaseui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page.module.css';

export default function Login() {

	const FirebaseUI = dynamic(
		() => import('../../components/FirebaseUI'),
		{ ssr: false }
	)

	return (
		<div>
			<Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg">
				<Container>
					<Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse>
						<Nav className="me-auto">
							<Nav.Link href="/single-prompt">Single Prompt</Nav.Link>
							<Nav.Link href="/dual-prompt">Dual Prompt</Nav.Link>
						</Nav>
					</Navbar.Collapse>
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
