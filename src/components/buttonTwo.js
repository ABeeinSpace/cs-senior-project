
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import { useState, useRef} from 'react';
import {
	getFirestore, collection, getDoc, updateDoc, doc, setDoc
} from 'firebase/firestore'
require('dotenv').config()


export default function ButtonGrouping(props) {
  const [refButton, setButton] = useState(false);
  const [leftButton, setLeftButton] = useState('primary');
  const [rightButton, setRightButton] = useState('primary');
 
  function handleLeftHuman() {
    const db = getFirestore();

  const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
  let numGuessedGameTwo = 0;
  let numCorrectGameTwo = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
      numGuessedGameTwo = doc.data().guessedGameTwo
      numCorrectGameTwo = doc.data().correctnessGameTwo
    })
    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
    let numGuessedUser = 0;
    let numGuessedUserGameTwo = 0;
    let numCorrectUserGameTwo = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed
      numGuessedUserGameTwo = doc.data().guessedGameTwo
      numCorrectUserGameTwo = doc.data().correctnessGameTwo

    

    let correct = 0;
    if(props.codeSelector == 1){
      correct = 1
      setRightButton('success')
      setLeftButton('danger')
      props.setBgColor('RGB(144, 238, 144)')
    }else{
      setRightButton('danger')
      setLeftButton('success')
      props.setBgColor('RGB(255, 204, 203)')
    }


  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct,
    guessedGameTwo: numGuessedGameTwo +1,
    correctnessGameTwo: numCorrectGameTwo + correct
  };

 

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + correct,
    guessedGameTwo: numGuessedUserGameTwo +1,
    correctnessGameTwo: numCorrectUserGameTwo + correct
  };

  updateDoc(docRef, promptData)
  updateDoc(userRef, userData)
  setButton(true)
})
  }

  function handleRightHuman() {
    const db = getFirestore();

  const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
  let numGuessedGameTwo = 0;
  let numCorrectGameTwo = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
      numGuessedGameTwo = doc.data().guessedGameTwo
      numCorrectGameTwo = doc.data().correctnessGameTwo
    })
    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
    let numGuessedUser = 0;
    let numGuessedUserGameTwo = 0;
    let numCorrectUserGameTwo = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed
      numGuessedUserGameTwo = doc.data().guessedGameTwo
      numCorrectUserGameTwo = doc.data().correctnessGameTwo

    

    let correct = 0;
    if(props.codeSelector == 0){
      correct = 1
      setLeftButton('success')
      setRightButton('danger')
      props.setBgColor('RGB(144, 238, 144)')
    }else{
      setRightButton('success')
      setLeftButton('danger')
      props.setBgColor('RGB(255, 204, 203)')
    }

  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct,
    guessedGameTwo: numGuessedGameTwo +1,
    correctnessGameTwo: numCorrectGameTwo + correct
  };


  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + correct,
    guessedGameTwo: numGuessedUserGameTwo +1,
    correctnessGameTwo: numCorrectUserGameTwo + correct
  };

  updateDoc(docRef, promptData)
  updateDoc(userRef, userData)
  setButton(true)
})
  }


  return (
    <div className="align-items-center">
      <div class="row g-0">
      <div class="col-lg-6">
        <Button id="test" disabled = {refButton} className="me-3" variant={leftButton} onClick={handleRightHuman}>
          Left Written by AI
        </Button>
        </div>
        <div class="col-lg-6">
        <Button id="test" disabled = {refButton} className="me-3" variant={rightButton} onClick={handleLeftHuman}>
          Right Written by AI
        </Button>
        </div>
        </div>
        
        


    </div>
  );
  }

