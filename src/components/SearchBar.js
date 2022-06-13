import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSearchInputHandler = (e) => {
    const lowerCaseSearch = e.target.value.toLowerCase();
    setSearchValue(lowerCaseSearch);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setSearchValue("");
    navigate(`/search/${searchValue}`);
  };

  /*  async function fetchSearchData() {
    const searchData = await MovieService.searchMovie(params.query);
    const movieList = searchData.results;
    setTotalPages(searchData.total_pages);
    setMovies(movieList);
  } */

  return (
    <div className="header-search-box">
      <form className="d-flex justify-content-end">
        {/* <input
          className="me-2"
          type="search"
          placeholder="Search movie here..."
          onChange={onSearchInputHandler}
          value={searchValue}
          aria-label="Search"
        /> */}
        <Link to="/search" className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
