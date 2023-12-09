'use client'

import { Spinner } from 'react-bootstrap';
import CGTNavbar from '../../components/navbar';
// import firebase from "firebase/compat/app";
import SignedOutToast from '../../components/SignedOutToast';
import "firebase/compat/auth";
import { AuthContext } from "../../lib/FirebaseContext";
import React, { useState, useContext, useEffect, useRef } from "react";
// import app from "../lib/Firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page.module.css';
import firebase from "firebase/compat/app";
import OverallDataPieChart from '../../components/overallDataPieChart'
import Link from 'next/link'
import {
  getFirestore, collection, getDoc, updateDoc, doc, setDoc
} from 'firebase/firestore'

require('dotenv').config()

// "Me and the homies goin to check the dasboard"

export default function Home() {
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 750);

  }, []);

  return (
    <div>
      <CGTNavbar />
      <br />
      <SignedOutToast />
      <div className="container">
        <h1>User Dashboard</h1>
        {isLoading && <Spinner animation="border" role="status" size='sm'>
          <span className="visually-hidden">Loading... </span>
        </Spinner>}
        {!isLoading && <RenderTables />}
      </div>
    </div>

  )
}

function RenderTables() {
  const db = getFirestore();
  const { user } = useContext(AuthContext);

  const [refOverallGuessed, setOverallGuessed] = useState();
  const [refOverallCorrect, setOverallCorrect] = useState();
  const [refAIGameOneGuessed, setAIGameOneGuessed] = useState();
  const [refHumanGameOneGuessed, setHumanGameOneGuessed] = useState();
  const [refAIGameOneCorrect, setAIGameOneCorrect] = useState();
  const [refHumanGameOneCorrect, setHumanGameOneCorrect] = useState();
  const [refGameTwoGuessed, setGameTwoGuessed] = useState();
  const [refGameTwoCorrect, setGameTwoCorrect] = useState();

  if (user) {

    const userRef = doc(db, "users", firebase.auth().currentUser.uid)
    getDoc(userRef)
      .then((doc) => {
        setOverallCorrect(doc.data().correctness)
        setOverallGuessed(doc.data().guessed)
        setAIGameOneGuessed(doc.data().guessedAIGameOne)
        setHumanGameOneGuessed(doc.data().guessedHumanGameOne)
        setAIGameOneCorrect(doc.data().correctAIGameOne)
        setHumanGameOneCorrect(doc.data().correctHumanGameOne)
        setGameTwoGuessed(doc.data().guessedGameTwo)
        setGameTwoCorrect(doc.data().correctnessGameTwo)
      })

    return (
      <>
        <div style={{ border: "1px solid black" }}>
          <OverallDataPieChart title="Overall Score" correct={refOverallCorrect} incorrect={refOverallGuessed - refOverallCorrect}></OverallDataPieChart>
        </div>
        <br />
        <br />
        <div style={{ border: "1px solid black" }}>
          <OverallDataPieChart title="Single Prompt Score" correct={refHumanGameOneCorrect + refAIGameOneCorrect} incorrect={(refHumanGameOneGuessed + refAIGameOneGuessed) - (refHumanGameOneCorrect + refAIGameOneCorrect)}></OverallDataPieChart>
        </div>
        <br />
        <br />
        <div style={{ border: "1px solid black" }}>
          <OverallDataPieChart title="Single Prompt Score when AI Shown" correct={refAIGameOneCorrect} incorrect={refAIGameOneGuessed - refAIGameOneCorrect}></OverallDataPieChart>
        </div>
        <br />
        <br />
        <div style={{ border: "1px solid black" }}>
          <OverallDataPieChart title="Single Prompt Score when Human Shown" correct={refHumanGameOneCorrect} incorrect={refHumanGameOneGuessed - refHumanGameOneCorrect}></OverallDataPieChart>
        </div>
        <br />
        <br />
        <div style={{ border: "1px solid black" }}>
          <OverallDataPieChart title="Dual Prompt Score" correct={refGameTwoCorrect} incorrect={refGameTwoGuessed - refGameTwoCorrect}></OverallDataPieChart>
        </div>
        <br />
        <br />
      </>

    )
  } else {
    return (
      <p>Please <Link className="notLoggedInLink" href={"/login"}>log in</Link> to continue.</p>
    )
  }
}


// function handleSignOut(setShow) {

//   firebase.auth().signOut().then(() => {
//     setShow true;
//     <SignedOutToast />
//   }, function (error) {
//     console.error('Sign Out Error', error);
//   });
// }