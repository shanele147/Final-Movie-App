import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import {
  MOVIE_UPCOMING,
  MOVIE_TOP_RATED,
  MOVIE_POPULAR,
} from "../../services/MovieService";
import SearchBar from "../SearchBar";

export default function Header(props) {
  const { isLoggedin, onLogout } = props;

  return (
    <header className="w-100">
      <nav className="navbar navbar-expand-md navbar-dark bg-nav fixed-top">
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
            <img
              src="https://i.imgur.com/kFFNY1q.png"
              alt="Logo"
              style={{ width: "3.5rem", height: "auto" }}
            />
          </Link>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
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
              {isLoggedin ? (
                <Link className="nav-link" to="/" onClick={onLogout}>
                  Log out
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Log in
                </Link>
              )}
            </div>
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  );
}
