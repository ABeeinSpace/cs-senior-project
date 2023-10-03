
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import {
	getFirestore, collection, getDocs, updateDoc, doc
} from 'firebase/firestore'
require('dotenv').config()


export default function ButtonGrouping(props) {
 async function handleClickHuman() {
    const db = getFirestore();
    const docRef = doc(db, "prompts", props.object.id);
    const querySnapshot = doc(db, "users", firebase.auth().currentUser.uid);
    console.log(querySnapshot)

    let correct = 0;
    if(props.codeSelector == 1){
      correct = 1
    }
    console.log(querySnapshot.data().guessed)
  const data = {
    guessed: props.object.guessed +1,
    correctness: props.object.correctness + correct
  };

  updateDoc(docRef, data)
  updateDoc(querySnapshot, data)
  }

  function handleClickAI() {
    const db = getFirestore();
    const docRef = doc(db, "prompts", props.object.id);
    let correct = 0;
    if(props.codeSelector == 0){
      correct = 1
    }
  const data = {
    guessed: props.object.guessed +1,
    correctness: props.object.correctness + correct
  };

  updateDoc(docRef, data)
  }

  
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button id = "Test" className="rounded-circle me-5" variant="secondary" onClick={handleClickHuman}>
          Written by a Human
        </Button>
        <Button className="rounded-circle" variant="secondary"onClick={handleClickAI}>
          Written by AI
        </Button>
      </ButtonGroup>


    </>
  );
  }

