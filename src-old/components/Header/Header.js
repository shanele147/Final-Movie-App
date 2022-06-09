import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"


export default function Header() {
  return (
      <>
          {/* The rest of your app goes here */}
          <nav className="navbar navbar-expand-md navbar-dark bg-nav">
              <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                          <Link className="nav-link" to="/movie/upcoming">Up Coming</Link>
                          <Link className="nav-link" to="/movie/popular">Popular</Link>
                          <Link className="nav-link" to="/movie/top-rated">Top Rated</Link>
                      </div>
                  </div>
              </div>
          </nav>
      </>
  )
}
