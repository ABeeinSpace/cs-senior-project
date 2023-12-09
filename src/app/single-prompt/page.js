'use client'

// import Container from 'react-bootstrap/Container';
import { Spinner } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Cards from '../../components/cards';
import { AuthContext } from "../../lib/FirebaseContext";
import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page.module.css';
// import app from '../../lib/Firebase';
import { useState, useRef} from 'react';
import {
	getFirestore, collection, getDocs
} from 'firebase/firestore'
import CGTNavbar from '../../components/navbar';
import Link from 'next/link';


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
		setTimeout(() => {
			setIsLoading(false);
		}, 750);
	}, []);

	return (

		<div>
			<CGTNavbar activePage={"./single-prompt"} />
			<br />
			<div style={{


			}} className="container">
				<h1>Single Prompt</h1>
				<p />
				<p>
					Your task is to determine whether the following code snippet, written in response to the given prompt, was generated by a human or AI. 
				</p>
				<p>
					Note: Base your guess on who you believe the generator to be, and not based on the functionality of the code itself.
				</p>

				{isLoading && <Spinner animation="border" role="status" size='sm'>
					<span className="visually-hidden">Loading...</span>
				</Spinner>}
				{!isLoading && <RenderCards />}
			</div>
		</div>
	)
}



const randomNumberInRange = (min, max) => {
	return Math.floor(Math.random() 
			* (max - min + 1)) + min;
};


function RenderCards() {	
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

	const refObjectOne = useRef()
	const refObjectTwo = useRef()
	const refObjectThree = useRef()
	const refObjectFour = useRef()
	const refObjectFive = useRef()
	const refObjectSix = useRef()
	const refObjectSeven = useRef()
	const refObjectEight = useRef()
	const refObjectNine = useRef()
	const refObjectTen = useRef()

	const refCodeSelectorOne = useRef(0)
	const refCodeSelectorTwo = useRef(0)
	const refCodeSelectorThree = useRef(0)
	const refCodeSelectorFour = useRef(0)
	const refCodeSelectorFive = useRef(0)
	const refCodeSelectorSix = useRef(0)
	const refCodeSelectorSeven = useRef(0)
	const refCodeSelectorEight = useRef(0)
	const refCodeSelectorNine = useRef(0)
	const refCodeSelectorTen = useRef(0)

	const [toggled, setToggled] = useState(false);
	const { user } = useContext(AuthContext);
	
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User

		

		if(!toggled){
	getDocs(colRef)
	.then((snapshot) => {
		
		snapshot.docs.forEach((doc) =>{
			prompts.push({...doc.data(), id: doc.id})
		})

		var selectPrompt1 = randomNumberInRange(0, prompts.length-1)
		ref.current = prompts[selectPrompt1].prompt
		refObjectOne.current = prompts[selectPrompt1];         
		
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
		refObjectTwo.current = prompts[selectPrompt2];
		ref3.current = prompts[selectPrompt3].prompt
		refObjectThree.current = prompts[selectPrompt3];
		ref4.current = prompts[selectPrompt4].prompt
		refObjectFour.current = prompts[selectPrompt4];
		ref5.current = prompts[selectPrompt5].prompt
		refObjectFive.current = prompts[selectPrompt5];
		ref6.current = prompts[selectPrompt6].prompt
		refObjectSix.current = prompts[selectPrompt6];
		ref7.current = prompts[selectPrompt7].prompt
		refObjectSeven.current = prompts[selectPrompt7];
		ref8.current = prompts[selectPrompt8].prompt
		refObjectEight.current = prompts[selectPrompt8];
		ref9.current = prompts[selectPrompt9].prompt
		refObjectNine.current = prompts[selectPrompt9];
		ref10.current = prompts[selectPrompt10].prompt
		refObjectTen.current = prompts[selectPrompt10];

		let selectIndex =0
		let selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt1].AIResponses.length-1)
			let filler = prompts[selectPrompt1].AIResponses[selectIndex]
			refCode.current = filler
			refCodeSelectorOne.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt1].HumanResponses.length-1) 
			let filler = prompts[selectPrompt1].HumanResponses[selectIndex]
			refCode.current = filler
			
			refCodeSelectorOne.current = 1
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt2].AIResponses.length-1)
			ref2Code.current =  prompts[selectPrompt2].AIResponses[selectIndex]
			refCodeSelectorTwo.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt2].HumanResponses.length-1) 
			ref2Code.current =  prompts[selectPrompt2].HumanResponses[selectIndex]
			refCodeSelectorTwo.current = 1
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt3].AIResponses.length-1)
			ref3Code.current =  prompts[selectPrompt3].AIResponses[selectIndex]
			refCodeSelectorThree.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt3].HumanResponses.length-1) 
			ref3Code.current =  prompts[selectPrompt3].HumanResponses[selectIndex]
			refCodeSelectorThree.current = 1
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt4].AIResponses.length-1)
			ref4Code.current =  prompts[selectPrompt4].AIResponses[selectIndex]
			refCodeSelectorFour.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt4].HumanResponses.length-1) 
			ref4Code.current =  prompts[selectPrompt4].HumanResponses[selectIndex]
			refCodeSelectorFour.current = 1
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt5].AIResponses.length-1)
			ref5Code.current =  prompts[selectPrompt5].AIResponses[selectIndex]
			refCodeSelectorFive.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt5].HumanResponses.length-1) 
			ref5Code.current =  prompts[selectPrompt5].HumanResponses[selectIndex]
			refCodeSelectorFive.current = 1
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt6].AIResponses.length-1)
			ref6Code.current =  prompts[selectPrompt6].AIResponses[selectIndex]
			refCodeSelectorSix.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt6].HumanResponses.length-1) 
			ref6Code.current =  prompts[selectPrompt6].HumanResponses[selectIndex]
			refCodeSelectorSix.current = 1
		}
		
		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt7].AIResponses.length-1)
			ref7Code.current =  prompts[selectPrompt7].AIResponses[selectIndex]
			refCodeSelectorSeven.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt7].HumanResponses.length-1) 
			ref7Code.current =  prompts[selectPrompt7].HumanResponses[selectIndex]
			refCodeSelectorSeven.current = 1
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt8].AIResponses.length-1)
			ref8Code.current =  prompts[selectPrompt8].AIResponses[selectIndex]
			refCodeSelectorEight.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt8].HumanResponses.length-1) 
			ref8Code.current =  prompts[selectPrompt8].HumanResponses[selectIndex]
			refCodeSelectorEight.current = 1
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt9].AIResponses.length-1)
			ref9Code.current =  prompts[selectPrompt9].AIResponses[selectIndex]
			refCodeSelectorNine.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt9].HumanResponses.length-1) 
			ref9Code.current =  prompts[selectPrompt9].HumanResponses[selectIndex]
			refCodeSelectorNine.current = 1
		}

		selectArray = randomNumberInRange(0,1)
		if(selectArray == 0){
			selectIndex = randomNumberInRange(0, prompts[selectPrompt10].AIResponses.length-1)
			ref10Code.current =  prompts[selectPrompt10].AIResponses[selectIndex]
			refCodeSelectorTen.current = 0
		}else{
			selectIndex = randomNumberInRange(0, prompts[selectPrompt10].HumanResponses.length-1) 
			ref10Code.current =  prompts[selectPrompt10].HumanResponses[selectIndex]
			refCodeSelectorTen.current = 1
		}



		setToggled(true)

	

	
		
		
		
		
		
		
		
	
	})
	.catch(err =>{
		console.log(err.message)
	})
		
}
		return (
			<>
				
				<Cards disabledState = 'true' id='cardOne' prompt= {ref.current} code={refCode.current} object = {refObjectOne.current} codeSelector = {refCodeSelectorOne.current}> </Cards>
				<Cards id='cardTwo' prompt= {ref2.current} code= {ref2Code.current} object = {refObjectTwo.current} codeSelector = {refCodeSelectorTwo.current}> </Cards>
				<Cards id='cardThree' prompt={ref3.current} code={ref3Code.current} object = {refObjectThree.current} codeSelector = {refCodeSelectorThree.current}> </Cards>
				<Cards id='cardFour' prompt={ref4.current} code= {ref4Code.current} object = {refObjectFour.current} codeSelector = {refCodeSelectorFour.current}> </Cards>
				<Cards id='cardFive' prompt={ref5.current} code={ref5Code.current} object = {refObjectFive.current} codeSelector = {refCodeSelectorFive.current}> </Cards>
				<Cards id='cardSix' prompt={ref6.current} code= {ref6Code.current} object = {refObjectSix.current} codeSelector = {refCodeSelectorSix.current}> </Cards>
				<Cards id='cardSeven' prompt={ref7.current} code={ref7Code.current} object = {refObjectSeven.current} codeSelector = {refCodeSelectorSeven.current}> </Cards>
				<Cards id='cardEight' prompt={ref8.current} code={ref8Code.current} object = {refObjectEight.current} codeSelector = {refCodeSelectorEight.current}> </Cards>
				<Cards id='cardNine' prompt={ref9.current} code={ref9Code.current} object = {refObjectNine.current} codeSelector = {refCodeSelectorNine.current}> </Cards>
				<Cards id='cardTen' prompt={ref10.current} code={ref10Code.current} object = {refObjectTen.current} codeSelector = {refCodeSelectorTen.current}> </Cards>

				<p><strong>Tip: Refresh the page to get new prompts!</strong></p>
				
			</>
		)
			
	} else {
		return (
			<p>Please <Link className="notLoggedInLink" href={"/login"}>log in</Link> to continue.</p>
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
	firebase.auth().signOut().then(function () {}, function (error) {
		console.error('Sign Out Error', error);
	});
}