import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
	state = { term: '' };

	handleInputChange = e => {
		const currentTerm = e.target.value;
		this.setState({ term: currentTerm });
		this.props.onSearchSubmit(currentTerm);
	};

	render() {
		return (
			<div className="search-bar">
				<div className="search-container">
					<input
						className="searchbar"
						type="text"
						placeholder="Search..."
						value={this.state.term}
						onChange={this.handleInputChange}
					/>
					<i className="fa fa-search"></i>
				</div>
			</div>
		);
	}
}

SearchBar.defaultProps = {
	hideModal: () => {
		return;
	}
};

export default SearchBar;
