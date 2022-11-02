import Button from 'components/Button/Button';
import React from 'react'
import { useNavigate } from 'react-router'

import { useAuth } from 'auth';


// Only authenticated users are authorized to view this page. 
function Dashboard() {
	const navigate = useNavigate();
	const { signOut } = useAuth();
	return (
		<div className='d-flex justify-content-between mx-5 mt-5'>
			<h1>Dashboard</h1>
			<div>
				<Button onClick={() => navigate("/")}>Home</Button>
				<Button onClick={() => { signOut(); navigate("/") }}>Sign Out</Button>
			</div>
		</div>
	)
}

export default Dashboard;