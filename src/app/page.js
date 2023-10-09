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
      <CGTNavbar />
      <br />
      <SignedOutToast />
      <div className="container">
        <h1>Home Page</h1>
        <p />
        <p>
          This page is under construction. Please come back later for a super cool
          AI-related project!
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