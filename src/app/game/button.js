
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
require('dotenv').config()


export default function ButtonGrouping(props) {
 async function handleClickHuman() {
    const db = getFirestore();

  const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
    })

    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
  let numGuessedUser = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed

    

    console.log(numGuessedUser)

    let correct = 0;
    if(props.codeSelector == 1){
      correct = 1
    }
  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct
  };

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + correct
  };

  updateDoc(docRef, promptData)
  updateDoc(userRef, userData)
})
  }

  function handleClickAI() {
    const db = getFirestore();
    const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
    })

    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
  let numGuessedUser = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed

    

    console.log(numGuessedUser)

    let correct = 0;
    if(props.codeSelector == 0){
      correct = 1
    }
  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct
  };

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + correct
  };

  updateDoc(docRef, promptData)
  updateDoc(userRef, userData)
})
  }

  
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button id="test" variant="primary" onClick={handleClickHuman}>
          Written by a Human
        </Button>
        <Button variant="primary" onClick={handleClickAI}>
          Written by AI
        </Button>
      </ButtonGroup>


    </>
  );
  }

