import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import NoPoster from '../../assests/images/no_poster.jpg'

function Home(props) {
	const renderCards = (arr) => (
		arr.map((card) => {
			return <Card key={card.id} id={card.id} title={card.title} poster={card.poster_path ? card.poster_path : NoPoster} doesHavePoster = {card.poster_path != null} />
		})
	)
	
	return (
		<div className="home">
			<h1 className="website-name">Entertainment Dive</h1>
			<SearchBar
				className="home-searchbar"
				searchText={props.searchText}
				setSearchText={props.setSearchText}
				onSearchSubmit={props.onSearchSubmit}
			/>
			<div className="card-container">
        {renderCards(props.searchResults)}
      </div>
		</div>
	);
}

export default Home;
