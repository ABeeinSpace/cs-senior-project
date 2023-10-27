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
import CGTNavbar from '../components/navbar';
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

	var gradeLevel = React.createRef('Senior');

	const updateGradeLevel = (e) => {
		gradeLevel = e.target.text;
	};

	var termsAgreedTo = React.createRef(false);

	const setTermsAgreedTo = (e) => {
		termsAgreedTo = e.target;
	}
	// const { termsAgreedTo, setTermsAgreedTo} = useState(false);

	return (
		<>
			<CGTNavbar />
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
					<Button variant='primary' onClick={() => { submitForm(user, isStudent.checked, gradeLevel) }}>Submit</Button>
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
		isStudent: isStudent
	}).then(
		location.assign("/game") // Go to the home page after the call to updateDoc returns
	)

}