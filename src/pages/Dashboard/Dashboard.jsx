import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { useAuth } from 'auth';
import { useDatabase } from 'database';

import { findById, fetchMovieDetailById } from 'api/fetchTMDB'

import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import NoPoster from '../../assests/images/no_poster.jpg'

// Only authenticated users are authorized to view this page. 
function Dashboard() {
	const navigate = useNavigate();
	const { user, signOut } = useAuth();
	const { movies, getMovies } = useDatabase();

	const [moviesList, setMoviesList] = useState([]);

	// On update in saved movies, fetch all the required movies data from tmdb api to display in cards.
	useEffect(() => {
		(async () => {
			const resultMoviesList = await Promise.all(Object.keys(movies).map(async movieId => {
				const response = await fetchMovieDetailById(movieId)
				// console.log(response)
				return response
			}));

			setMoviesList(resultMoviesList)
		})()
	}, [movies])

	// On dashboard load, fetch all saved movies.
	useEffect(() => {
		getMovies(user.uid)
	}, [])

	return (<>
		<div className='d-flex justify-content-between mx-5 mt-5'>
			<h1>Dashboard</h1>
			<div>
				<Button onClick={() => navigate("/")}>Home</Button>
				<Button onClick={() => { signOut(); navigate("/") }}>Sign Out</Button>
			</div>
		</div>
		<div className='card-container d-flex flex-wrap  px-5 mt-5'>
			{moviesList.map(({ id, title, name, poster_path, media_type }) => (
				<Card
					key={id}
					id={id}
					title={title===undefined ? name : title}
					poster={poster_path ? poster_path : NoPoster}
					doesHavePoster={poster_path !== null}
					detailView={true}
					mediaType={media_type}
				/>
			))}
		</div>
	</>
	)
}

export default Dashboard;