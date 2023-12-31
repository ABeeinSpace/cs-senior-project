import { NavDropdown, Nav, Navbar, Container, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/page.module.css';
import firebase from "firebase/compat/app";
import { AuthContext } from "../lib/FirebaseContext";
import React, { useState, useContext, useEffect } from "react";
// import Logo from "";


export default function CGTNavbar({ activePage }) {
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => { // after some fake time, component will stop with render
			setIsLoading(false);
		}, 750);
	}, []);

	return (
		<Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse>
					<Nav className="me-auto" activeKey={activePage}>
						<Nav.Link href="./single-prompt">Single Prompt</Nav.Link>
						<Nav.Link href="./dual-prompt">Dual Prompt</Nav.Link>
					</Nav>


					<Nav>
						{isLoading && <Spinner animation="border" role="status" variant='light' size='sm'>
							<span className="visually-hidden">Loading...</span>
						</Spinner>}
						{!isLoading && <RenderLoginUI />}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

function RenderLoginUI() {
	const [show, setShow] = useState(false);
	const { user } = useContext(AuthContext);


	if (user != null) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		// ...
		return (
			<NavDropdown title={user.displayName} className='shadow'>
				<NavDropdown.Item href='/account-settings'>Account Settings</NavDropdown.Item>
				<NavDropdown.Item href='/user-dashboard'>Dashboard</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item onClick={() => {
					firebase.auth().signOut().then(() => {
						setShow(true)
					}, function (error) {
						console.error('Sign Out Error', error);
					});
				}}>Sign Out</NavDropdown.Item>
			</NavDropdown>
		)
	} else {
		return (
			<Nav.Link href="./login">Login</Nav.Link>)
	};
}
