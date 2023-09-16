'use client';
//1.
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import app from "./Firebase";

//2.
export const AuthContext = React.createContext();

//3.
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebase.auth(app).onAuthStateChanged(setUser);
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
