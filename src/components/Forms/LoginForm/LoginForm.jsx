import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import firebaseApp from 'firebase-app';

function LoginForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const handleValueChange = function (field, value) {
		setFormData({
			...formData,
			[field]: value
		})
	}

	const handleSubmit = async function (event) {
		
		event.preventDefault();

		// Validate here

		// Send api request here.

		const auth = getAuth(firebaseApp);
		try {

			const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
			// Signed in 
			const user = userCredential.user;
			console.log("User:", user)
			console.log("Login successfully")

			navigate("dashboard")

		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error("Login error:")
			console.error(errorCode, errorMessage)
		}

	}

	return (
		<form>
			<div className="mb-3">
				<label htmlFor="login-email" className="form-label">Email address</label>
				<input
					type="email"
					className="form-control"
					id="login-email"
					aria-describedby="emailHelp"
					value={formData.email}
					onChange={(e) => handleValueChange('email', e.target.value)}
				/>
				<div className="invalid-feedback">
					Please enter a username.
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="login-password" className="form-label">Password</label>
				<input
					type="password"
					className="form-control"
					id="login-password"
					value={formData.password}
					onChange={(e) => handleValueChange('password', e.target.value)}
				/>
			</div>
			{/* Can use this for view password  */}
			{/* <div className="mb-3 form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
			</div> */}
			<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
		</form>
	)
}

export default LoginForm