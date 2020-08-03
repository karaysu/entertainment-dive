import React from 'react';
import './Card.scss';

function Card({id, title, poster, doesHavePoster}) {
  const basePosterURL = 'http://image.tmdb.org/t/p/w500';

  let fullPosterURL = doesHavePoster ? basePosterURL + poster : poster;

	return (
		<div className="card" >
			<div className="content">
				<img className="cover" src={`${fullPosterURL}`} alt="Cover" />
				<div className="title">{title}</div>
			</div>
		</div>
	);
}

export default Card;
