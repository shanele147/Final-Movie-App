import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperSlider.css";
// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import { API_KEY, image_url } from "../../constant/const-key";

function CategorySwiper(props) {
  const { movieList, onViewMore, movieType } = props;
  movieList && console.log(movieList);
  const filerMovies =
    movieList && movieList.filter((movie) => movie.vote_average > 7);
  const movies = filerMovies.map((movie, index) => {
    const { title, id, poster_path, release_date } = movie;
    return (
      <>
        <SwiperSlide key={index}>
          <img
            src={`${image_url}${poster_path}?api_key=${API_KEY}&language=en-US)`}
            onClick={() => onViewMore(id)}
          ></img>
        </SwiperSlide>
      </>
    );
  });
  return (
    <div className="container-fluid category-swiper">
      <div className="row">
        <div className="col-12 col-md-12 col-sm-12">
          <h1>{movieType.split("_").join(" ").toUpperCase()}</h1>
        </div>
        <div className="col-11 mask-overflow">
          <Swiper
            navigation={true}
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            {movies}
          </Swiper>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default CategorySwiper;
