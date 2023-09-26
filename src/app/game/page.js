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
import { useState, useRef} from 'react';
import {
	getFirestore, collection, getDocs
} from 'firebase/firestore'

require('dotenv').config()

const db = getFirestore()

const colRef = collection(db, 'prompts')
var prompts = []

let humanOrArtificial = []







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
			<Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse>
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
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<br />
			<div style={{


			}} className="container">
				<h1>Game Page</h1>
				<p />
				{isLoading && <Spinner animation="grow" role="status" size='sm'>
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



const randomNumberInRange = (min, max) => {
	return Math.floor(Math.random() 
			* (max - min + 1)) + min;
};


function RenderCards() {
	console.log('rendering')
	
	const ref = useRef('First Prompt');
	const ref2 = useRef('Second Prompt');
	const ref3= useRef('Third Prompt');
	const ref4 = useRef('Fourth Prompt');
	const ref5 = useRef('Fifth Prompt');
	const ref6 = useRef('Sixth Prompt');
	const ref7 = useRef('Seventh Prompt');
	const ref8 = useRef('Eighth Prompt');
	const ref9 = useRef('Ninth Prompt');
	const ref10 = useRef('Tenth Prompt');

	const refCode = useRef('First Code');
	const ref2Code = useRef('Second Code');
	const ref3Code= useRef('Third Code');
	const ref4Code = useRef('Fourth Code');
	const ref5Code = useRef('Fifth Code');
	const ref6Code = useRef('Sixth Code');
	const ref7Code = useRef('Seventh Code');
	const ref8Code = useRef('Eighth Code');
	const ref9Code = useRef('Ninth Code');
	const ref10Code = useRef('Tenth Code');

	const [toggled, setToggled] = useState(false);
	const { user } = useContext(AuthContext);
	
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User

		

		if(!toggled){
		console.log('calling database')
	 getDocs(colRef)
	.then((snapshot) => {
		console.log('set prompts')
		
		snapshot.docs.forEach((doc) =>{
			prompts.push({...doc.data(), id: doc.id})
		})
		console.log(prompts);
		console.log(prompts.length)
		
		var selectPrompt1 = randomNumberInRange(0, prompts.length-1)
		ref.current = prompts[selectPrompt1].prompt
		console.log(ref)
		console.log(ref2)
		
		let selectPrompt2 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt2 != selectPrompt1){

				break;
			}else{
				selectPrompt2 = randomNumberInRange(0, prompts.length-1)
			}
		}
		let selectPrompt3 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt3 != selectPrompt1 && selectPrompt3 != selectPrompt2){
				break;
			}else{
				selectPrompt3 = randomNumberInRange(0, prompts.length-1)
			}
		}
		let selectPrompt4 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt4 != selectPrompt1 && selectPrompt4 != selectPrompt2 && selectPrompt4 != selectPrompt3){
				break;
			}else{
				selectPrompt4 = randomNumberInRange(0, prompts.length-1)
			}
		}
		let selectPrompt5 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt5 != selectPrompt1 && selectPrompt5 != selectPrompt2 && selectPrompt5 != selectPrompt3 && selectPrompt5 != selectPrompt4){
				break;
			}else{
				selectPrompt5 = randomNumberInRange(0, prompts.length-1)
			}
		}
		let selectPrompt6 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt6 != selectPrompt1 && selectPrompt6 != selectPrompt2 && selectPrompt6 != selectPrompt3 && selectPrompt6 != selectPrompt4 && selectPrompt6 != selectPrompt5){
				break;
			}else{
				selectPrompt6 = randomNumberInRange(0, prompts.length-1)
			}
		}
		let selectPrompt7 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt7 != selectPrompt1 && selectPrompt7 != selectPrompt2 && selectPrompt7 != selectPrompt3 && selectPrompt7 != selectPrompt4 && selectPrompt7 != selectPrompt5 && selectPrompt7 != selectPrompt6){
				break;
			}else{
				selectPrompt7 = randomNumberInRange(0, prompts.length-1)
			}
		}
		let selectPrompt8 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt8 != selectPrompt1 && selectPrompt8 != selectPrompt2 && selectPrompt8 != selectPrompt3 && selectPrompt8 != selectPrompt4 && selectPrompt8 != selectPrompt5 && selectPrompt8 != selectPrompt6 && selectPrompt8 != selectPrompt7){
				break;
			}else{
				selectPrompt8 = randomNumberInRange(0, prompts.length-1)
			}
		}
		let selectPrompt9 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt9 != selectPrompt1 && selectPrompt9 != selectPrompt2 && selectPrompt9 != selectPrompt3 && selectPrompt9 != selectPrompt4 && selectPrompt9 != selectPrompt5 && selectPrompt9 != selectPrompt6 && selectPrompt9 != selectPrompt7 && selectPrompt9 != selectPrompt8){
				break;
			}else{
				selectPrompt9 = randomNumberInRange(0, prompts.length-1)
			}
		}
		let selectPrompt10 = randomNumberInRange(0, prompts.length-1)
		while(true){
			if(selectPrompt10 != selectPrompt1 && selectPrompt10 != selectPrompt2 && selectPrompt10 != selectPrompt3 && selectPrompt10 != selectPrompt4 && selectPrompt10 != selectPrompt5 && selectPrompt10 != selectPrompt6 && selectPrompt10 != selectPrompt7 && selectPrompt10 != selectPrompt8 && selectPrompt10 != selectPrompt9){
				break;
			}else{
				selectPrompt10 = randomNumberInRange(0, prompts.length-1)
			}
		}

		ref2.current = prompts[selectPrompt2].prompt
		ref3.current = prompts[selectPrompt3].prompt
		ref4.current = prompts[selectPrompt4].prompt
		ref5.current = prompts[selectPrompt5].prompt
		ref6.current = prompts[selectPrompt6].prompt
		ref7.current = prompts[selectPrompt7].prompt
		ref8.current = prompts[selectPrompt8].prompt
		ref9.current = prompts[selectPrompt9].prompt
		ref10.current = prompts[selectPrompt10].prompt

		let selectIndex =0
		let selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt1].AIResponses.length-1)
			refCode.current =  prompts[selectPrompt1].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt1].HumanResponses.length-1) 
			refCode.current =  prompts[selectPrompt1].HumanResponses[selectIndex]
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt2].AIResponses.length-1)
			ref2Code.current =  prompts[selectPrompt2].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt2].HumanResponses.length-1) 
			ref2Code.current =  prompts[selectPrompt2].HumanResponses[selectIndex]
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt3].AIResponses.length-1)
			ref3Code.current =  prompts[selectPrompt3].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt3].HumanResponses.length-1) 
			ref3Code.current =  prompts[selectPrompt3].HumanResponses[selectIndex]
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt4].AIResponses.length-1)
			ref4Code.current =  prompts[selectPrompt4].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt4].HumanResponses.length-1) 
			ref4Code.current =  prompts[selectPrompt4].HumanResponses[selectIndex]
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt5].AIResponses.length-1)
			ref5Code.current =  prompts[selectPrompt5].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt5].HumanResponses.length-1) 
			ref5Code.current =  prompts[selectPrompt5].HumanResponses[selectIndex]
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt6].AIResponses.length-1)
			ref6Code.current =  prompts[selectPrompt6].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt6].HumanResponses.length-1) 
			ref6Code.current =  prompts[selectPrompt6].HumanResponses[selectIndex]
		}
		
		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt7].AIResponses.length-1)
			ref7Code.current =  prompts[selectPrompt7].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt7].HumanResponses.length-1) 
			ref7Code.current =  prompts[selectPrompt7].HumanResponses[selectIndex]
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt8].AIResponses.length-1)
			ref8Code.current =  prompts[selectPrompt8].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt8].HumanResponses.length-1) 
			ref8Code.current =  prompts[selectPrompt8].HumanResponses[selectIndex]
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt9].AIResponses.length-1)
			ref9Code.current =  prompts[selectPrompt9].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt9].HumanResponses.length-1) 
			ref9Code.current =  prompts[selectPrompt9].HumanResponses[selectIndex]
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt10].AIResponses.length-1)
			ref10Code.current =  prompts[selectPrompt10].AIResponses[selectIndex]
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt10].HumanResponses.length-1) 
			ref10Code.current =  prompts[selectPrompt10].HumanResponses[selectIndex]
		}



		setToggled(true)

		console.log(prompts[selectPrompt1].prompt);

	
		
		
		
		
		
		
		
	
	})
	.catch(err =>{
		console.log(err.message)
	})
		
}
		return (
			<>
						
				<Cards id='cardOne' prompt= {ref.current} code={refCode.current}> </Cards>
				<Cards id='cardTwo' prompt= {ref2.current} code= {ref2Code.current}> </Cards>
				<Cards id='cardThree' prompt={ref3.current} code={ref3Code.current}> </Cards>
				<Cards id='cardFour' prompt={ref4.current} code= {ref4Code.current}> </Cards>
				<Cards id='cardFive' prompt={ref5.current} code={ref5Code.current}> </Cards>
				<Cards id='cardSix' prompt={ref6.current} code= {ref6Code.current}> </Cards>
				<Cards id='cardSeven' prompt={ref7.current} code={ref7Code.current}> </Cards>
				<Cards id='cardEight' prompt={ref8.current} code={ref8Code.current}> </Cards>
				<Cards id='cardNine' prompt={ref9.current} code={ref9Code.current}> </Cards>
				<Cards id='cardTen' prompt={ref10.current} code={ref10Code.current}> </Cards>
			</>
		)
			
	} else {
		return (
			<p>Please log in to continue.</p>
		)
	}
}



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