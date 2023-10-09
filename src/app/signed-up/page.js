'use client'

import { NavDropdown, Nav, Navbar, Container, Toast, ToastContainer, Spinner, Form, Button } from 'react-bootstrap';
import firebase from "firebase/compat/app";
// import SignedOutToast from 'src/app/SignedOutToast.js';
import { FirebaseContext, AuthContext } from "src/app/FirebaseContext.js";
import "firebase/compat/auth";
import React, { useState, useContext, useEffect } from "react";
import app from '../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import {
	getFirestore, collection, getDocs, doc, getDoc, updateDoc
} from 'firebase/firestore'
// import App from 'next/app';
// import { auth } from 'firebaseui';

export default function SingedIn() {

	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => { // after some fake time, component will stop with render
			setIsLoading(false);
		}, 750);
	}, []);

	const { user } = useContext(AuthContext);

	var isStudent = React.createRef(false);

	const updateIsStudent = (e) => {
		isStudent = e.target;
	};

	var termsAgreedTo = React.createRef(false);

	const setTermsAgreedTo = (e) => {
		termsAgreedTo = e.target;
	}
	// const { termsAgreedTo, setTermsAgreedTo} = useState(false);

	return (
		<>
			<Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg">
				<Container>
					<Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse>
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="./game">Game</Nav.Link>
							<Nav.Link href="./write">Write</Nav.Link>
						</Nav>
						<Nav>
							{isLoading && <Spinner animation="grow" role="status" variant='light' size='sm'>
								<span className="visually-hidden">Loading...</span>
							</Spinner>}
							{!isLoading && <RenderLoginUI />}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<br />
			<div className="container">
				<h1>Sign-Up</h1>
				<p />
				<p>
					Enter additional information to complete sign-up:
				</p>
				<Form>
					{['checkbox'].map((type) => (
						<div key={`default-${type}`} className="mb-3">

							<Form.Check
								ref={isStudent}
								type={"checkbox"}
								label={`I am a student`}
								id={`default-${type}-1`}
								// checked={isStudent.current.checked}
								onChange={updateIsStudent}
							/>
							{/* <Form.Check
								ref={termsAgreedTo}
								type={type}
								label={`I have read and agree to the terms `}
								id={`default-${type}-2`}
								// checked={termsAgreedTo}
								onChange={setTermsAgreedTo}

							/> */}
						</div>
					))}
					<Button variant='primary' onClick={() => { submitForm(user, isStudent) }}>Submit</Button>
				</Form>
			</div>

		</>
	)
}

async function submitForm(user, isStudent) {

	const db = getFirestore(app);
	// var doc = collection(db, "users").doc()
	var docReference = doc(db, "users", user.uid)
	// var docSnapshot = await getDoc(docReference);
	// var isFaculty = isFaculty.current
	// console.log(isStudent.checked)
	await updateDoc(docReference, {
		isStudent: isStudent.checked
	}).then(
		location.assign("/") // Go to the home page after the call to updateDoc returns
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
			<NavDropdown title={user.displayName}>
				<NavDropdown.Item>Account Settings</NavDropdown.Item>
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