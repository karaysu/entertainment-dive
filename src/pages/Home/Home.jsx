import React from "react";
import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home(props) {
  return (
    <div className="home">
      <h1 className="website-name">Entertainment Dive</h1>
      <SearchBar
        className="home-searchbar"
        searchText={props.searchText}
        setSearchText={props.setSearchText}
        onSearchSubmit={props.onSearchSubmit}
      />
    </div>
  );
}

export default Home;
