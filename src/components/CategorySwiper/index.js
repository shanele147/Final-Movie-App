import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../../components/Spinner";
import MovieItem from "../../components/MovieItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperSlider.css";
// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

function CategorySwiper(props) {
  const { movieList, onViewMore, movieType } = props;
  // movieList && console.log(movieList);

  const [isFadeEnd, setFadeEnd] = useState(true);

  const onReachEndHandler = () => {
    setFadeEnd(false);
  };

  const onSlideChangeHandler = () => {
    if (!isFadeEnd) {
      setFadeEnd(true);
    }
  };

  const filerMovies =
    movieList && movieList.filter((movie) => movie.vote_average > 7);

  const movies = filerMovies.map((movie, index) => {
    // const { id, poster_path } = movie;
    return (
      <SwiperSlide key={index}>
        <MovieItem movie={movie} />
      </SwiperSlide>
    );
  });

  return (
    <div className="container-fluid category-swiper">
      <div className="row">
        <div className="col-12 col-md-12 col-sm-12">
          <h1>{movieType.split("_").join(" ").toUpperCase()}</h1>
        </div>
        <div className="col-12 mask-overflow">
          {movies && (
            <Swiper
              navigation={true}
              slidesPerView={4}
              slidesPerGroup={4}
              spaceBetween={30}
              grabCursor={true}
              freeMode={true}
              onReachEnd={() => onReachEndHandler()}
              onSlideChange={() => onSlideChangeHandler()}
              pagination={false}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper"
            >
              {movies}

              <div className={isFadeEnd ? "fadeEnd" : "fadeOut"}></div>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategorySwiper;
