import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import {useAuth} from 'auth'
import { useEffect } from 'react';

function RegisterForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	})

	const {user, registerUser} = useAuth()
	const navigate = useNavigate()

	const handleValueChange = function (field, value) {
		setFormData({
			...formData,
			[field]: value
		})
	}

	const handleSubmit = async function (event) {
		event.preventDefault();

		// Validate here

		try {

			await registerUser(formData.email, formData.password);
			// Signed in 

			

		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error("Login error:")
			console.error(errorCode, errorMessage)
		}

	}

	useEffect(()=> {
		if(!user) return;
		navigate("/dashboard")
	}, [user])

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