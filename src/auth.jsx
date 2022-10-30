import React from 'react';
import { useState } from 'react';

import LocalStorage from 'localstorage';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from 'firebase-app';

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(LocalStorage.getItem('user') || null);
	const auth = getAuth(firebaseApp);

	const registerUser = async (email, password) => {
		try {

			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user
			storeUser(user)
			// Signed in 
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
			const user = userCredential.user;
			storeUser(user)
			// Signed in 
			console.log("Login successfully")

		} catch (error) {
			throw 'Error while logging in!'
		}
	}



	const signOut = () => {
		localStorage.removeItem('user')
		setUser(null);
	}

	const isUserLoggedIn = () => {
		return (!!user && !!user.stsTokenManager.accessToken)
	}

	/**
	 * Remove the sensitive data from auth object and then save it as login status.
	 * @param {Object} user object from auth api
	 */
	const storeUser = (user) => {
		// console.log("user", user)
		// console.log("stringigy user", JSON.parse(JSON.stringify(user)))

		// Delete the sensitive data.
		delete user.auth.config.apiKey
		
		LocalStorage.setItem('user', user)
		setUser(user)
	}

	const value = { user, signIn, signOut, registerUser, isUserLoggedIn }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	return React.useContext(AuthContext);
}

