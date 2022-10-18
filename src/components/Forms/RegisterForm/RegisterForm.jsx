import React, { useState } from 'react'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from 'firebase-app';

function RegisterForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: ''
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

			const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
			// Signed in 
			const user = userCredential.user;
			console.log("User:", user)
			console.log("Signed in successfully")
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
				<label htmlFor="email" className="form-label">Email address</label>
				<input
					type="email"
					className="form-control"
					id="email"
					aria-describedby="emailHelp"
					value={formData.email}
					onChange={(e) => handleValueChange('email', e.target.value)}
				/>
				<div className="invalid-feedback">
					Please choose a username.
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="password" className="form-label">Password</label>
				<input
					type="password"
					className="form-control"
					id="password"
					value={formData.password}
					onChange={(e) => handleValueChange('password', e.target.value)}
				/>
			</div>
			{/* <div className="mb-3">
				<label htmlFor="confirm-password" className="form-label">Confirm Password</label>
				<input
					type="password"
					className="form-control"
					id="confirm-password"
					value={formData.confirmPassword}
					onChange={(e) => handleValueChange('confirmPassword', e.target.value)}
				/>
			</div> */}
			{/* Can use this for view password  */}
			{/* <div className="mb-3 form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
			</div> */}
			<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
		</form>
	)
}

export default RegisterForm