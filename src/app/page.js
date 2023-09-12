'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/page.module.css';
// import App from 'next/app';
// import { auth } from 'firebaseui';

export default function Home() {

  const app = initialiseFirebase();
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Turing Test-Inator!</title>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">ChatGPTuring</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="./game">Game</Nav.Link>
              <Nav.Link href="./write">Write</Nav.Link>
            </Nav>
            <Nav>
              {renderLoginUI(app)}
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
    </>

  )
}

function initialiseFirebase() {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAThWUht-tNf-REso6KxH1tKQ3PXfeCifw",
    authDomain: "cs-senior-project-9c0e0.firebaseapp.com",
    projectId: "cs-senior-project-9c0e0",
    storageBucket: "cs-senior-project-9c0e0.appspot.com",
    messagingSenderId: "1054365365385",
    appId: "1:1054365365385:web:fdd0bf6ce2f08ee09dc258"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  return app;
}

function renderLoginUI(app) {
  if (firebase.auth(app).currentUser != null) {
    return <Nav.Link>{firebase.auth(app).app.currentUser.displayName}</Nav.Link>
  } else {
    return (
      <>
        <Nav.Link href="./login">Login</Nav.Link>
        <Nav.Link href="#signup">Sign Up</Nav.Link>
      </>
    )
  }
}