import React from 'react';
import { useState } from 'react';

import { useDatabase } from 'database';
import './Card.scss';
import { useAuth } from 'auth';
import { useEffect } from 'react';

function Card({ id, title, poster, doesHavePoster, detailView = false, mediaType }) {
	const basePosterURL = 'http://image.tmdb.org/t/p/w500';

	const [liked, setLiked] = useState(false);

	const { addMovie, removeMovie, movies } = useDatabase();
	const {user} = useAuth();

	let fullPosterURL = doesHavePoster ? basePosterURL + poster : poster;


	// Update the like button for all saved movies.
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
			addMovie(user.uid, id, title, mediaType)
			setLiked(true);
		}
	}


	return (
		<div className="movie-card" >
			<div className="content">
				<span className="mediatype">{mediaType==="movie" ? "Movie": "TV"}</span>
				<img className="cover" src={`${fullPosterURL}`} alt="Cover" />
				<div className="title">
					<div>{title}</div>
					<div>
						<i 
							title="Like"
							className={`bi bi-heart-fill ${liked ? "font-color-red" : ""}`}
							onClick={handleLikeClick}
						></i>
					{
						(detailView && !(movies[id].link === undefined)) && <>
							<a 
								href={movies[id].link} 
								title="Click to watch"
								className="link-primary px-3"	
								rel="noopener"
								target='_blank'
							><i className="bi bi-tv text-white"></i></a>
						</>
					}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
