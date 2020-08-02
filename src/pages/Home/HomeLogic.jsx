import React, { Component } from "react";
import Home from "./Home";

class HomeLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchResults: [],
      currentPage: 0
    };
  }

  // Sets the value of the input to the state on change
  setSearchText = (e) => {
    const newSearchText = e.target.value;
    this.setState({ searchText: newSearchText });
  };

  // Fetches the data (results and page number) and stores it in the state
  onSearchSubmit = async () => {
    if (this.state.searchText !== "") {
      const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.state.searchText}&page=1&include_adult=false`;
      const data = await fetch(endpoint);
      const {results, page} = await data.json();

      this.setState({ searchResults: results, currentPage: page });
    }
  };

  render() {
    return (
      <Home
        searchText={this.state.searchText}
        setSearchText={this.setSearchText}
        onSearchSubmit={this.onSearchSubmit}
      />
    );
  }
}

export default HomeLogic;
