import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { useAuth } from 'auth'
import { useEffect } from 'react';
import { useDatabase } from 'database';

function LoginForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const {user,signIn} = useAuth();
	const {getMovies} = useDatabase();

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

			await signIn(formData.email, formData.password);
			// Signed in 
			// navigate("/dashboard")

		} catch (error) {
			console.error(error)
		}

	}

	// As soon as User value is set, navigate to dashboard.
	useEffect(()=> {
		if(!user) return;
		navigate("/dashboard")
	}, [user])

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