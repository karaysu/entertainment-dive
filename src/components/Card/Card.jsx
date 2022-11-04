import React from 'react';
import { useState } from 'react';

import { useDatabase } from 'database';
import './Card.scss';
import { useAuth } from 'auth';
import { useEffect } from 'react';

function Card({ id, title, poster, doesHavePoster }) {
	const basePosterURL = 'http://image.tmdb.org/t/p/w500';

	const [liked, setLiked] = useState(false);

	const { addMovie, removeMovie, movies } = useDatabase();
	const {user} = useAuth();

	let fullPosterURL = doesHavePoster ? basePosterURL + poster : poster;

	useEffect(() => {
		if (id in movies) {
			setLiked(true)
		} else {
			setLiked(false)
		}
 	}, [movies])

	function handleLikeClick(e) {
		e.preventDefault()
		
		if(liked) {
			removeMovie(user.uid, id)
			setLiked(false);
		} else {
			addMovie(user.uid, id, title)
			setLiked(true);
		}
	}


	return (
		<div className="movie-card" >
			<div className="content">
				<img className="cover" src={`${fullPosterURL}`} alt="Cover" />
				<div className="title">
					<div>{title}</div>
					<div>
						<i 
							className={`bi bi-heart-fill ${liked ? "font-color-red" : ""}`}
							onClick={handleLikeClick}
						></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
