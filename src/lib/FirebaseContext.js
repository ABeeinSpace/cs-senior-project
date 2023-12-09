'use client';
//1.
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import app from "../lib/Firebase";

export const FirebaseContext = React.createContext();

export const useFirebase = () => {
	const firebaseContext = useContext(FirebaseContext);
	if (firebaseContext === undefined) {
		throw new Error(
			"useFirebase must be used within a FirebaseContext.Provider"
		);
	}
	return firebaseContext;
};

//2.
export const AuthContext = React.createContext();

//3.
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebase.auth(app).useEmulator("http://127.0.0.1:9099", { disableWarnings: true })
		firebase.auth(app).onAuthStateChanged(setUser);
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
