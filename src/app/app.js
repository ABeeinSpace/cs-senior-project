'use client'

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes
} from "react-router-dom";
import Home from './page.js';
// import Write from 'write.js';
// import Game from 'game.js';

export default function App() {
	return (
		<>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					{/* <li>
						<Link to="/game">Game</Link>
					</li>
					<li>
						<Link to="/write">Write</Link>
					</li> */}
				</ul>


				{/*
			A <Switch> looks through all its children <Route>
			elements and renders the first one whose path
			matches the current URL. Use a <Switch> any time
			you have multiple routes, but you want only one
			of them to render at a time
		  */}
				<Switch>

					<Route exact path="/" Component={Home} />

				</Switch>
			</div>
		</>

	);
}

function Test() {
	return (
		<div>
			<h2>Bubblegum</h2>
		</div>
	);
}
