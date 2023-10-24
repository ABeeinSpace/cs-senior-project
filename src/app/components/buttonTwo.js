
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
  function handleBothHuman() {
    const db = getFirestore();

  const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
    })

    const docRef2 = doc(db, "prompts", props.object2.id);
    let numCorrect2 = 0
    let numGuessed2 = 0;
      getDoc(docRef2)
      .then((doc)=>{
        numCorrect2 = doc.data().correctness
        numGuessed2 = doc.data().guessed
      })

    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
    let numGuessedUser = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed

    

    let correct = 0;
    if(props.codeSelector == 1){
      correct = 1
    }

    let correct2 = 0;
    if(props.codeSelector2 == 1){
      correct2 = 1
    }

    let userCorrect = 0;
    if(props.codeSelector2 == 1 && props.codeSelector == 1){
      userCorrect = 1
    }
  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct
  };

  const promptData2 = {
    guessed: numGuessed2 +1,
    correctness: numCorrect2 + correct2
  };

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + userCorrect
  };

  updateDoc(docRef, promptData)
  updateDoc(docRef2, promptData2)
  updateDoc(userRef, userData)
})
  }

  function handleNeitherHuman() {
    const db = getFirestore();

  const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
    })

    const docRef2 = doc(db, "prompts", props.object2.id);
    let numCorrect2 = 0
    let numGuessed2 = 0;
      getDoc(docRef2)
      .then((doc)=>{
        numCorrect2 = doc.data().correctness
        numGuessed2 = doc.data().guessed
      })

    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
    let numGuessedUser = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed

    

    let correct = 0;
    if(props.codeSelector == 0){
      correct = 1
    }

    let correct2 = 0;
    if(props.codeSelector2 == 0){
      correct2 = 1
    }

    let userCorrect = 0;
    if(props.codeSelector2 == 0 && props.codeSelector == 0){
      userCorrect = 1
    }
  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct
  };

  const promptData2 = {
    guessed: numGuessed2 +1,
    correctness: numCorrect2 + correct2
  };

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + userCorrect
  };

  updateDoc(docRef, promptData)
  updateDoc(docRef2, promptData2)
  updateDoc(userRef, userData)
})
  }

  function handleLeftHuman() {
    const db = getFirestore();

  const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
    })

    const docRef2 = doc(db, "prompts", props.object2.id);
    let numCorrect2 = 0
    let numGuessed2 = 0;
      getDoc(docRef2)
      .then((doc)=>{
        numCorrect2 = doc.data().correctness
        numGuessed2 = doc.data().guessed
      })

    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
    let numGuessedUser = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed

    

    let correct = 0;
    if(props.codeSelector == 1){
      correct = 1
    }

    let correct2 = 0;
    if(props.codeSelector2 == 0){
      correct2 = 1
    }

    let userCorrect = 0;
    if(props.codeSelector2 == 0 && props.codeSelector == 1){
      userCorrect = 1
    }
  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct
  };

  const promptData2 = {
    guessed: numGuessed2 +1,
    correctness: numCorrect2 + correct2
  };

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + userCorrect
  };

  updateDoc(docRef, promptData)
  updateDoc(docRef2, promptData2)
  updateDoc(userRef, userData)
})
  }

  function handleRightHuman() {
    const db = getFirestore();

  const docRef = doc(db, "prompts", props.object.id);
  let numCorrect = 0
  let numGuessed = 0;
    getDoc(docRef)
    .then((doc)=>{
      numCorrect = doc.data().correctness
      numGuessed = doc.data().guessed
    })

    const docRef2 = doc(db, "prompts", props.object2.id);
    let numCorrect2 = 0
    let numGuessed2 = 0;
      getDoc(docRef2)
      .then((doc)=>{
        numCorrect2 = doc.data().correctness
        numGuessed2 = doc.data().guessed
      })

    
    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    let numCorrectUser = 0
    let numGuessedUser = 0;
    getDoc(userRef)
    .then((doc)=>{
      numCorrectUser = doc.data().correctness
      numGuessedUser = doc.data().guessed

    

    let correct = 0;
    if(props.codeSelector == 0){
      correct = 1
    }

    let correct2 = 0;
    if(props.codeSelector2 == 1){
      correct2 = 1
    }

    let userCorrect = 0;
    if(props.codeSelector2 == 1 && props.codeSelector == 0){
      userCorrect = 1
    }
  const promptData = {
    guessed: numGuessed +1,
    correctness: numCorrect + correct
  };

  const promptData2 = {
    guessed: numGuessed2 +1,
    correctness: numCorrect2 + correct2
  };

  const userData = {
    guessed: numGuessedUser +1,
    correctness: numCorrectUser + userCorrect
  };

  updateDoc(docRef, promptData)
  updateDoc(docRef2, promptData2)
  updateDoc(userRef, userData)
})
  }


  return (
    <div className="align-items-center">
        <Button id="test" className="me-3" variant="primary" onClick={handleLeftHuman}>
          Left Written by Human, Right Written by AI
        </Button>
        <Button id="test" className="me-3" variant="primary" onClick={handleRightHuman}>
          Left Written by AI, Right Written by Human
        </Button>
        <Button id="test" className="me-3" variant="primary" onClick={handleNeitherHuman}>
          Both Written by AI
        </Button>
        <Button id="test" className="me-3" variant="primary" onClick={handleBothHuman}>
          Both Written by Human
        </Button>


    </div>
  );
  }

