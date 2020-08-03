import React, {useState} from "react";
import "./SearchBar.scss";

function SearchBar({ searchText, setSearchText, onSearchSubmit, emptySearchResults }) {

	const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
		await emptySearchResults();
		onSearchSubmit();
    // setSearched(true);
  }
  
  return (
    <>
      <div className={`search-bar ${searched ? 'after-submit' : 'before-submit'}`}>
        <div className="search-container">
          <input
            className="searchbar"
            type="text"
            placeholder="Search..."
            value={searchText}
						onChange={setSearchText}
						onKeyDown={(e) => {if(e.keyCode === 13) handleSearch()}}
          />
          <span onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
