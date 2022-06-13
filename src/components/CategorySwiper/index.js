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
<<<<<<< HEAD
  const { movieList, onViewMore, movieType, onGetWishList } = props;
=======
  const { movieList, onViewMore, movieType } = props;
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
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
<<<<<<< HEAD
        <MovieItem
          movie={movie}
          onViewMore={onViewMore}
          onGetWishList={onGetWishList}
        />
=======
        <MovieItem movie={movie} onViewMore={onViewMore}/>
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
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
              breakpoints={{
                425: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
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
