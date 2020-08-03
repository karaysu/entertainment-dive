import React, { Component } from "react";
import Home from "./Home";

import { fetchMoviesBySearchText } from "../../api/fetchTMDB";

class HomeLogic extends Component {
  constructor(props) {
    super(props);
    //States
    this.state = {
      searchText: "",
      searchResults: [],
      nextPage: 1,
      currentPage: 0,
      totalPages: 0
    };
  }

  // Sets the value of the input to the state on change
  setSearchText = (e) => {
    const newSearchText = e.target.value;
    this.setState({ searchText: newSearchText });
  };

  // Fetches the data ({page, total_results, total_pages, results: Array(20)}) and stores it in the state
  onSearchSubmit = async () => {
    if (this.state.searchText !== "" && this.state.currentPage <= this.state.totalPages) {
      const {results, page, total_pages} = await fetchMoviesBySearchText(this.state.searchText, this.state.nextPage);
      this.setState({ searchResults: [...this.state.searchResults, ...results], currentPage: page, nextPage: page + 1, totalPages: total_pages});
    }
  };

  //Function to reset the state variables for new search
  emptySearchResults = () => {
    this.setState({searchResults: [], currentPage: 0, totalPages: 0, nextPage: 1});
  }


  //Rendering and sending the props to home
  render() {
    return (
      <Home
        searchText={this.state.searchText}
        searchResults={this.state.searchResults}
        setSearchText={this.setSearchText}
        onSearchSubmit={this.onSearchSubmit}
        emptySearchResults={this.emptySearchResults}
        totalPages = {this.totalPages}
        currentPage = {this.currentPage}
      />
    );
  }
}

export default HomeLogic;
