'use client'

import { Form, Button, Dropdown, DropdownButton, Spinner } from 'react-bootstrap';
// import SignedOutToast from 'src/app/SignedOutToast.js';
import "firebase/compat/auth";
import React, { useState, useContext, useEffect } from "react";
import app from '../../lib/Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import { AuthContext } from "../../lib/FirebaseContext";
import {
	getFirestore, doc, updateDoc
} from 'firebase/firestore'
import CGTNavbar from 'src/components/navbar';
// import App from 'next/app';
// import { auth } from 'firebaseui';
import Link from 'next/link';


export default function SingedIn() {

	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 750);
	}, []);

	const { user } = useContext(AuthContext);

	var termsAgreedTo = React.createRef(false);

	const setTermsAgreedTo = (e) => {
		termsAgreedTo = e.target;
	}
	// const { termsAgreedTo, setTermsAgreedTo} = useState(false);

	return (
		<>
			<CGTNavbar />
			<br />
			<div className="container" id='settings1'>
				<h1>Account Settings</h1>
				<p />
				{/* <p>
					Enter additional information to complete sign-up:
				</p> */}

				{isLoading && <Spinner animation="border" role="status" size='sm'>
					<span className="visually-hidden">Loading...</span>
				</Spinner>}
				{!isLoading && <SettingsForm />}

			</div>

		</>
	)
}

function SettingsForm() {
	const { user } = useContext(AuthContext);
	var isFaculty = React.useRef(false);

	const updateIsFaculty = (e) => {
		isFaculty = e.target;
	};

	const [gradeLevel, updateGradeLevel] = useState("Grade Level")

	const [shouldShowError, toggleShouldShowError] = useState(false)

	// const updateGradeLevel = (e) => {
	// 	gradeLevel = e;
	// 	console.log(gradeLevel)
	// }


	if (user) {
		return (
			<Form>
				{/* {['checkbox'].map((type) => ( */}
				<div key={`default-checkbox`} className="mb-3">
					<Form.Check
						ref={isFaculty}
						type={"checkbox"}
						className='pb-2'
						label={`I am a faculty member`}
						id={`default-checkbox-1`}
						// checked={isStudent.current.checked}
						onChange={updateIsFaculty}
					/>
					<p />
					<DropdownButton id='grade-level-dropdown-button' title={gradeLevel} onSelect={updateGradeLevel}>
						<Dropdown.Item eventKey="Faculty">Faculty</Dropdown.Item>
						<Dropdown.Item eventKey="Senior">Senior</Dropdown.Item>
						<Dropdown.Item eventKey="Junior">Junior</Dropdown.Item>
						<Dropdown.Item eventKey="Sophomore">Sophomore</Dropdown.Item>
						<Dropdown.Item eventKey="Freshman">Freshman</Dropdown.Item>
					</DropdownButton>

					<p hidden={shouldShowError} className='text-warning'>Select a grade level (or "Faculty") from the drop-down</p>
					{/* <Form.Check
					ref={termsAgreedTo}
					type={type}
					label={`I have read and agree to the terms `}
					id={`default-${type}-2`}
					// checked={termsAgreedTo}
					onChange={setTermsAgreedTo}
	
				/> */}
				</div>
				{/* ))} */}
				<Button variant='primary' onClick={() => { submitForm(user, !isFaculty.checked, gradeLevel) }}>Submit</Button>
			</Form>
		)
	} else {
		return (
			<p>Please <Link className="notLoggedInLink" href={"/login"}>log in</Link> to continue.</p>
		)
	}
}

async function submitForm(user, isFaculty, gradeLevel) {

	const db = getFirestore(app);
	// var doc = collection(db, "users").doc()
	var docReference = doc(db, "users", user.uid)
	// var docSnapshot = await getDoc(docReference);
	// var isFaculty = isFaculty.current
	// console.log(isFaculty)
	if (gradeLevel == "Grade Level") {
		return
	} else {
		// if (shouldShowError == true) {
		// 	toggleShouldShowError
		// }
		await updateDoc(docReference, {
			isStudent: isFaculty,
			gradeLevel: gradeLevel
		}).then(() => {
			location.assign("/single-prompt") // Go to single prompt page after the call to updateDoc returns
		})
	}

}