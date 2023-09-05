'use client'

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './page.module.css';

export default function Home() {

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Turing Test-Inator!</title>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">ChatGPTuring</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/game">Game</Nav.Link>
            <Nav.Link as={Link} to="/write">Write</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
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
