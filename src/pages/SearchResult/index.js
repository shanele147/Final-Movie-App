import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieService from "../../services/MovieService";
import { API_KEY, image_url, search_URL } from "../../constant/const-key";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import "./Search.css";

const Search = () => {
  // get info from search box in the Search page
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  function handleChange(event, value) {
    setCurrentPage(value);
  }

  const onSearchInputHandler = (e) => {
    const lowerCaseSearch = e.target.value.toLowerCase();
    setSearchValue(lowerCaseSearch);
  };

  async function fetchSearchData() {
    const searchData = await MovieService.searchMovie(searchValue);
    // setMovies(searchData);
    const movieList = searchData.results;
    setTotalPages(searchData.total_pages);
    setMovies(movieList);
  }

  async function fetchSearchDataPerPage(page) {
    const movieList = await axios
      .get(
        `${search_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
      )
      .then((response) => response.data.results);
    setMovies(movieList);
  }

  const onSearch = (e) => {
    e.preventDefault();
    setQuery(searchValue);
    fetchSearchData();
    setSearchValue("");
    navigate(`/search/${searchValue}`);
  };

  useEffect(() => {
    query && fetchSearchDataPerPage(currentPage);
  }, [currentPage]);

  const movieItems = !query ? (
    <p>Please search movie</p>
  ) : movies && movies.length > 0 ? (
    movies.map((movie, index) => {
      const { title, id, overview } = movie;
      return (
        <div key={index} className="col-6 col-lg-4 col-md-6 col-sm-12">
          <div>
            <img
              src={`${image_url}${movie?.poster_path}?api_key=${API_KEY}&language=en-US`}
              loading="lazy"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="overview">{overview}</p>
              <Link
                to={`/search/${id}/${title.split(" ").join("-")}`}
                className="btn-view-more category-btn"
              >
                View more
              </Link>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p>Movie not found</p>
  );

  console.log({ searchValue, query, currentPage, movies });

  // const notFoundMovie = query && !movies && <p>Movie not found</p>;

  return (
    <div className="container mt-5 search-result">
      <div className="row form">
        <div className="col-10 col-sm-12">
          <form className="d-flex">
            <input
              className="me-2"
              type="search"
              onChange={onSearchInputHandler}
              value={searchValue}
              placeholder="Search movie here..."
              aria-label="Search"
            />
            <button className="btn btn-form" type="submit" onClick={onSearch}>
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="row g-4" style={{ marginTop: "3rem" }}>
        {movieItems}
        <div className="col-12">
          <Stack spacing={2}>
            <Pagination
              className="custom-pagination"
              count={totalPages < 40 ? totalPages : 40}
              page={currentPage}
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Search;
