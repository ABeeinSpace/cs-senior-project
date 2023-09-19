'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import firebase from "firebase/compat/app";
import SignedOutToast from 'src/app/SignedOutToast.js';
import { FirebaseContext, AuthContext } from "src/app/FirebaseContext.js";
import "firebase/compat/auth";
import React, { useState, useContext } from "react";
import app from "./Firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
import { NavDropdown } from 'react-bootstrap';
// import App from 'next/app';
// import { auth } from 'firebaseui';

export default function Home() {

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
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ChatGPTuring</title>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
          <Nav className="me-auto" activeKey="/">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="./game">Game</Nav.Link>
            <Nav.Link href="./write">Write</Nav.Link>
          </Nav>
          <Nav>
            <RenderLoginUI />
          </Nav>
        </Container>
      </Navbar>
      <br />
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

function RenderLoginUI(app) {
  var [setShow] = useState(false);
  const { user } = useContext(AuthContext);

  if (user != null) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    return (
      <NavDropdown title={user.displayName}>
        <NavDropdown.Item>Account Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => {
          firebase.auth().signOut().then(() => {
            setShow = true;
            <SignedOutToast />
          }, function (error) {
            console.error('Sign Out Error', error);
          });
        }}>Sign Out</NavDropdown.Item>
      </NavDropdown>
    )
  } else {
    return (
      <Nav.Link href="./login">Login</Nav.Link>)
  };
}

// function handleSignOut(setShow) {

//   firebase.auth().signOut().then(() => {
//     setShow true;
//     <SignedOutToast />
//   }, function (error) {
//     console.error('Sign Out Error', error);
//   });
// }