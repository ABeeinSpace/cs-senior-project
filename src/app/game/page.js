'use client'

import Container from 'react-bootstrap/Container';
import { Spinner } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Cards from './cards';
import { AuthContext } from "src/app/FirebaseContext.js";
import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import app from '../Firebase';
import { useState } from 'react';
import {
	getFirestore, collection, getDocs
} from 'firebase/firestore'

require('dotenv').config()

const db = getFirestore()

const colRef = collection(db, 'prompts')
let prompts = []

const colRefCode = collection(db, 'code')
let code = []







// import { collection, getDocs } from "firebase/firestore";
// import {db} from '../Firebase';
// import { useState } from ‘React’;

//    const [todos, setTodos] = useState([]);

//     const fetchPost = async () => {

//         await getDocs(collection(db, "todos"))
//             .then((querySnapshot)=>{               
//                 const newData = querySnapshot.docs
//                     .map((doc) => ({...doc.data(), id:doc.id }));
//                 setTodos(newData);                
//                 console.log(todos, newData);
//             })

//     }

//     useEffect(()=>{
//         fetchPost();
//     }, [])

export default function Game() {

	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => { // after some fake time, component will stop with render
			setIsLoading(false);
		}, 550);
	}, []);

	return (

		<div>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
					<Nav className="me-auto" activeKey="./game">
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
				</Container>
			</Navbar>
			<br />
			<div style={{


			}} className="container">
				<h1>Game Page</h1>
				<p />
				{isLoading && <Spinner animation="grow" role="status" variant='dark' size='sm'>
					<span className="visually-hidden">Loading...</span>
				</Spinner>}
				{!isLoading && <RenderCards />}
				<p>
					This page is under construction. Please come back later for a super cool
					AI-related project!
				</p>
			</div>
		</div>
	)
}




function RenderCards() {
	const [promptOne, setPromptOne] = useState([]);
	const [promptTwo, setPromptTwo] = useState([]);
	const [codeOne, setCodeOne] = useState([]);
	// const [promptTwo, setPromptTwo] = useState([]);
	const { user } = useContext(AuthContext);


	getDocs(colRef)
		.then((snapshot) => {
			prompts = []
			snapshot.docs.forEach((doc) => {
				prompts.push({ ...doc.data(), id: doc.id })
			})

			// prompt = prompts[0].prompt
			setPromptOne(prompts[0].prompt)
			setPromptTwo(prompts[1].prompt)


		})
		.catch(err => {
			console.log(err.message)
		})


	getDocs(colRefCode)
		.then((snapshot) => {
			code = []
			snapshot.docs.forEach((doc) => {
				code.push({ ...doc.data(), id: doc.id })
			})

			setCodeOne(code[0].EP001HU01)

		})
		.catch(err => {
			console.log(err.message)
		})



	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User




		return (
			<>

				<Cards id='cardOne' prompt={promptOne} code={codeOne}> </Cards>
				<br />
				<Cards id='cardTwo' prompt={promptTwo} code='Code Two'> </Cards>
				<br />
				<Cards id='cardThree' prompt='Prompt Three' code='Code Three'> </Cards>
				<br />
				<Cards id='cardFour' prompt='Prompt Four' code='Code Four'> </Cards>
				<br />
				<Cards id='cardFive' prompt='Prompt Five' code='Code Five'> </Cards>
				<br />
				<Cards id='cardSix' prompt='Prompt Six' code='Code Six'> </Cards>
				<br />
				<Cards id='cardSeven' prompt='Prompt Seven' code='Code Seven'> </Cards>
				<br />
				<Cards id='cardEight' prompt='Prompt Eight' code='Code Eight'> </Cards>
				<br />
				<Cards id='cardNine' prompt='Prompt Nine' code='Code Nine'> </Cards>
				<br />
				<Cards id='cardTen' prompt='Prompt Ten' code='Code Ten'> </Cards>
			</>
		)
	} else {
		return (
			<p>Please log in to continue.</p>
		)
	}
};

function RenderLoginUI(app) {


	const { user } = useContext(AuthContext);

	if (user != null) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		// ...
		return (
			<NavDropdown title={user.displayName}>
				<NavDropdown.Item>Account Settings</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item onClick={() => handleSignOut()}>Sign Out</NavDropdown.Item>
			</NavDropdown>
		)
	} else {
		return (
			<Nav.Link href="./login">Login</Nav.Link>)
	};
}

function handleSignOut() {
	firebase.auth().signOut().then(function () {
		console.log('Signed Out');
	}, function (error) {
		console.error('Sign Out Error', error);
	});
}