'use client'

import { Container, Spinner } from 'react-bootstrap';
import CGTNavbar from 'src/app/components/navbar.js';
import firebase from "firebase/compat/app";
import SignedOutToast from 'src/app/components/SignedOutToast.js';
import "firebase/compat/auth";
import React, { useState, useContext, useEffect } from "react";
import app from "./Firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
// import App from 'next/app';
// import { auth } from 'firebaseui';

export default function Home() {
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => { // after some fake time, component will stop with render
      setIsLoading(false);
    }, 750);
  }, []);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //       const displayName = user.displayName;
  //       // ...
  //       console.log("uid", uid)
  //     } else {
  //       // User is signed out
  //       // ...
  //       console.log("user is logged out")
  //     }
  //   });

  // }, [])

  return (
    <div>
      <CGTNavbar/>
      <br />
      <SignedOutToast />
      <div className="container">
        <h1>Home Page</h1>
        <p />
        <p>
          Welcome to ChatGPTuring!
        </p>
        <p />
        <p>
          This project was created by Aidan Border, Andrea Morris, and Joshua Rowe for CSC 4899.
          </p>
        <p />
        <p>
          In this project, we wish to examine a human&apos;s ability to distingush beween human-generated and AI-generated code. 
          </p>
        <p />
        <p>
          We decided to persue this project after hearing about the development of OpenAI&#39;s ChatGPT, expecially after it was learned that the program has the ability to
          generate human-like responses to prompts and questions, including the generation of code. 
          While there are many possitive applications of ChatGPT, one potentual negative application that schools are particularly worried about is the 
          possibe usage of the software to commit academic dishonesty. In order to combat academic dishonesty, many teachers and professors are having to find ways of
          determining if a submitted work was generated by a student or by an AI.
          </p>
        <p />
        <p>
           With detection of AI content being of such great importance to schools and other institutions, we decided to create this project to try and determine two things:
           </p>
        <p />
        <p>
           1. How well can people distinguish beween AI-generated and Human-generated works?
           </p>
        <p />
        <p>
           2. Are professors more successful at identifying AI-generated works then a student?
           </p>
        <p />
        <p>
          We decided to have users analyse code snippets rather than other types of generated content due to the fact that we, as computer science students,
          have greater access to human-generated code and coding prompts then other types of generated content. We would like to remind our users to grade the code
          not based on functionality, but based on who you believe the generator to be.
          </p>
        <p />
        <p>
          Thank you for participating in our project!
        </p>
      </div>
    </div>

  )
}


// function handleSignOut(setShow) {

//   firebase.auth().signOut().then(() => {
//     setShow true;
//     <SignedOutToast />
//   }, function (error) {
//     console.error('Sign Out Error', error);
//   });
// }