import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import {
  MOVIE_UPCOMING,
  MOVIE_TOP_RATED,
  MOVIE_POPULAR,
  MOVIE_NOW_PLAYING,
} from "../../services/MovieService";

export default function Header(props) {
  const { isLoggedin} = props;
  // const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("user");
    // navigate("/");
  }
  return (
    <header className="w-100">
      <nav className="navbar navbar-expand-md navbar-dark bg-nav w-100">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="" to="/">
            <img src="https://i.imgur.com/kFFNY1q.png" alt="Logo" style={{width:"3.5rem", height:"auto"}}/>
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
           
          <div className="navbar-nav">
            {/* <Link className="nav-link" to="/">
              Home
            </Link> */}
            <Link className="nav-link" to={`/${MOVIE_UPCOMING}`}>
              Up Coming
            </Link>
            <Link className="nav-link" to={`/${MOVIE_POPULAR}`}>
              Popular
            </Link>
            <Link className="nav-link" to={`/${MOVIE_TOP_RATED}`}>
              Top Rated
            </Link>
            <Link className="nav-link" to="/wishlist">
              Wish List
            </Link>
              {isLoggedin ? <Link className="nav-link" to="/" onClick={onLogout}>
                Log out</Link> : <Link className="nav-link" to="/login">
                Log in 
            </Link>}
          </div>
        </div>
      </div>
    </nav>
    </header >
  );
}
