import React from "react";
import "./SearchBar.scss";

function SearchBar({ searchText, setSearchText, onSearchSubmit }) {
  return (
    <>
      <div className="search-bar">
        <div className="search-container">
          <input
            className="searchbar"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={setSearchText}
          />
          <span onClick={onSearchSubmit}>
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
