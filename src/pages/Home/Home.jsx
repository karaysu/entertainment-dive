import React from 'react';

import './Home.scss';

import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import InfiniteScrolling from '../../components/InfiniteScrolling/InfiniteScrolling'

import NoPoster from '../../assests/images/no_poster.jpg'

function Home(props) {

  InfiniteScrolling(props.onSearchSubmit);
  
	const renderCards = arr => (
		arr.map((card, index) => {
			return <Card key={index} id={card.id} title={card.title} poster={card.poster_path ? card.poster_path : NoPoster} doesHavePoster = {card.poster_path != null} />
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
        emptySearchResults={props.emptySearchResults}
			/>
			<div className="card-container">
        {renderCards(props.searchResults)}
      </div>
      {/* <button className="test" onClick={props.emptySearchResults} type="submit">Test</button> */}
		</div>
	);
}

export default Home;
