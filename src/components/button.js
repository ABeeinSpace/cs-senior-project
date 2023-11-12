
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import {
	getFirestore, collection, getDoc, updateDoc, doc, setDoc
} from 'firebase/firestore'
import { useState, useRef} from 'react';
require('dotenv').config()



export default function ButtonGrouping(props) {
  const [refButton, setButton] = useState(false);
  const [humanColor, setHumanColor] = useState('primary');
  const [aiColor, setAiColor] = useState('primary');
 async function handleClickHuman() {

    const db = getFirestore();

  const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
  let numAIGuessed = 0;
  let numHumanGuessed = 0;
  let numAICorrect = 0;
  let numHumanCorrect = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
      numAIGuessed = doc.data().guessedAIGameOne
      numHumanGuessed = doc.data().guessedHumanGameOne
      numAICorrect = doc.data().correctAIGameOne
      numHumanCorrect = doc.data().correctHumanGameOne
    })

    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
    let numGuessedUser = 0;
    let numAIGuessedUser = 0;
    let numHumanGuessedUser = 0;
    let numAICorrectUser = 0;
    let numHumanCorrectUser = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed
      numAIGuessedUser = doc.data().guessedAIGameOne
      numHumanGuessedUser = doc.data().guessedHumanGameOne
      numAICorrectUser = doc.data().correctAIGameOne
      numHumanCorrectUser = doc.data().correctHumanGameOne
    

    console.log(numGuessedUser)

    let correct = 0;
    let isHuman = 0;
    let isAI = 0;
    if(props.codeSelector == 1){
      correct = 1
      setHumanColor('success')
      setAiColor('danger')
      isHuman = 1
      props.setBgColor('RGB(144, 238, 144)')
    }else{
      setHumanColor('danger')
      setAiColor('success')
      isAI = 1
      props.setBgColor('RGB(255, 204, 203)')
    }
  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct,
    guessedHumanGameOne : numHumanGuessed + isHuman,
    correctHumanGameOne: numHumanCorrect + correct,
    guessedAIGameOne: numAIGuessed + isAI
  };

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + correct,
    guessedHumanGameOne : numHumanGuessedUser + isHuman,
    correctHumanGameOne: numHumanCorrectUser + correct,
    guessedAIGameOne: numAIGuessedUser + isAI
  };

  updateDoc(docRef, promptData)
  updateDoc(userRef, userData)
  setButton(true)
  
  
})
  }

  function handleClickAI() {
    const db = getFirestore();
    const docRef = doc(db, "prompts", props.object.id);
    let numCorrect = 0
    let numGuessed = 0;
    let numAIGuessed = 0;
    let numHumanGuessed = 0;
    let numAICorrect = 0;
    let numHumanCorrect = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
      numAIGuessed = doc.data().guessedAIGameOne
      numHumanGuessed = doc.data().guessedHumanGameOne
      numAICorrect = doc.data().correctAIGameOne
      numHumanCorrect = doc.data().correctHumanGameOne
    })

    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
    let numGuessedUser = 0;
    let numAIGuessedUser = 0;
    let numHumanGuessedUser = 0;
    let numAICorrectUser = 0;
    let numHumanCorrectUser = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed
      numAIGuessedUser = doc.data().guessedAIGameOne
      numHumanGuessedUser = doc.data().guessedHumanGameOne
      numAICorrectUser = doc.data().correctAIGameOne
      numHumanCorrectUser = doc.data().correctHumanGameOne

    

    console.log(numGuessedUser)

    let correct = 0;
    let isAI = 0;
    let isHuman = 0;
    if(props.codeSelector == 0){
      correct = 1
      setHumanColor('danger')
      setAiColor('success')
      isAI = 1;
      props.setBgColor('RGB(144, 238, 144)')
    }else{
      setHumanColor('success')
      setAiColor('danger')
      isHuman = 1
      props.setBgColor('RGB(255, 204, 203)')
    }
  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct,
    guessedAIGameOne : numAIGuessed + isAI,
    correctAIGameOne: numAICorrect + correct,
    guessedHumanGameOne : numHumanGuessed + isHuman
  };

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + correct,
    guessedAIGameOne : numAIGuessedUser + isAI,
    correctAIGameOne: numAICorrectUser + correct,
    guessedHumanGameOne : numHumanGuessedUser + isHuman
  };

  updateDoc(docRef, promptData)
  updateDoc(userRef, userData)
  setButton(true)
})
  }

  
  return (
    <div className="align-items-center">
        <Button id="humanButton" disabled = {refButton} className="me-5 " variant={humanColor} onClick= {handleClickHuman}>
          Written by a Human
        </Button>
        <Button id = "aiButton" disabled = {refButton}  variant={aiColor} onClick={handleClickAI}>
          Written by AI     
        </Button>


    </div>
  );
  }

