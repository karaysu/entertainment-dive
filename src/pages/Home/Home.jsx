import React, { Component } from 'react';
import './Home.scss'
import SearchBar from '../../components/SearchBar/SearchBar';

class Home extends Component {
	onSearchSubmit = (term) => {
		const lowercasedFilter = term.toLowerCase();
		console.log(lowercasedFilter);
		// const searchedData = arr.filter(item => {
		// 	console.log(item);
		// 	return Object.keys(item).some(key =>
		// 		item[key]
		// 			.toString()
		// 			.toLowerCase()
		// 			.includes(lowercasedFilter)
		// 	);
		// });
		// this.setState({ filteredData: searchedData });
	};

	render() {
		return (
			<div className="home">
				<SearchBar className="home-searchbar" onSearchSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default Home;
