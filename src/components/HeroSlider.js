// import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-carousel.css";
import { API_KEY, image_url } from "../constant/const-key";
import MovieService from "../services/MovieService";

function HeroSlider(props) {
  const { nowPlaying, onViewMore, movieType } = props;
  //   console.log(nowPlaying);
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const filerMovies =
    nowPlaying && nowPlaying.filter((movie) => movie.vote_average > 7);
  const movieShowList = filerMovies.map((movie, index) => {
    const { title, id, overview, backdrop_path, release_date, vote_average } =
      movie;
    return (
      <>
        <div
          className="item-carousel"
          key={index}
          style={{
            backgroundImage: `url("${image_url}${backdrop_path}?api_key=${API_KEY}&language=en-US)"`,
            backgroundSize: "cover",
          }}
        >
          <div className="overlay">
            <div className="content-container">
              <h1 className="big-title">{title}</h1>
              <p className="overview">{overview}</p>
              <br></br>
              <p style={{ fontSize: "1.25rem" }}>
                Release:{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#ee550e",
                  }}
                >
                  {MovieService.convertToHumanDate(release_date)}
                </span>
              </p>
              <div>
                <button
                  className="btn-view-more"
                  onClick={() => onViewMore(id)}
                >
                  View more
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div id="movie-slider" className="w-100 m-auto">
      <Slider {...settings}>{movieShowList}</Slider>
    </div>
  );
}
export default HeroSlider;
