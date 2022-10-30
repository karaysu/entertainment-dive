import Button from 'components/Button/Button';
import React from 'react'
import {useNavigate} from 'react-router'


// Only authenticated users are authorized to view this page. 
function Dashboard () {
	const navigate = useNavigate();
	return (
		<div className='d-flex justify-content-between mx-5 mt-5'>
			<h1>Dashboard</h1>
			<div><Button onClick={() => navigate("/")}>Home</Button></div>
		</div>
	)
}

export default Dashboard;