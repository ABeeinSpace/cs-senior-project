'use client'

import { NavDropdown, Nav, Navbar, Container, Toast, ToastContainer, Spinner } from 'react-bootstrap';
import firebase from "firebase/compat/app";
import SignedOutToast from 'src/app/SignedOutToast.js';
import { FirebaseContext, AuthContext } from "src/app/FirebaseContext.js";
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
      <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto" activeKey="/">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="./game">Game</Nav.Link>
              <Nav.Link href="./write">Write</Nav.Link>
            </Nav>
            <Nav>
              {isLoading && <Spinner animation="border" role="status" variant='light' size='sm'>
                <span className="visually-hidden">Loading...</span>
              </Spinner>}
              {!isLoading && <RenderLoginUI />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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

function RenderLoginUI() {
  const [show, setShow] = useState(false);
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
            setShow(true)
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