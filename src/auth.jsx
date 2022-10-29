import React from 'react';
import { useState } from 'react';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import firebaseApp from 'firebase-app';

const AuthContext = React.createContext(null);

export function AuthProvider({children}) {
	const [user, setUser] = useState(null);
	const auth = getAuth(firebaseApp);

	const registerUser = async (email, password) => {
		try {

			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			// Signed in 
			setUser(userCredential.user)
			console.log("User:", user)
			console.log("Signed in successfully")

		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error("Registering error:")
			console.error(errorCode, errorMessage)

			throw 'Error while registering account!'
		}
	}

	const signIn = async (email, password) => {
		try {

			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			// Signed in 
			setUser(userCredential.user)
			console.log("User:", user)
			console.log("Login successfully")

		} catch (error) {
			throw 'Error while logging in!'
		}
	}

	

	const signOut = () => {
		setUser(null);
	}

	const value = {user, signIn, signOut, registerUser}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	return React.useContext(AuthContext);
}

