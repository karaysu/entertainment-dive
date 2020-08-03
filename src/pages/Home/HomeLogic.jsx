import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Home from "./Home";

import { fetchMoviesBySearchText } from "../../api/fetchTMDB";

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

  // Fetches the data ({page, total_results, total_pages, results: Array(20)}) and stores it in the state
  onSearchSubmit = async () => {
    if (this.state.searchText !== "") {
      const {results, page} = await fetchMoviesBySearchText(this.state.searchText);
      this.setState({ searchResults: results, currentPage: page });
    }
  };


  render() {
    return (
      <Home
        searchText={this.state.searchText}
        searchResults={this.state.searchResults}
        setSearchText={this.setSearchText}
        onSearchSubmit={this.onSearchSubmit}
      />
    );
  }
}

export default HomeLogic;
