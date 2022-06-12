import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieService from "../../services/MovieService";
import { API_KEY, image_url, youtube_url } from "../../constant/const-key";
import "./MovieDetail.css";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const MovieDetail = () => {
  const params = useParams();
  console.log(params);
  const [movieInfo, setMovieInfo] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [castList, setCastList] = useState([]);
  // const [crews, setCrews] = useState([]);

  async function fetchMovieInfo() {
    const movieDetail = await MovieService.getMovieDetail(params.id);
    // get the list of trailers of the movie by using params
    const movieTrailers = await MovieService.getMovieTrailer(params.id);
    /* get the full casts of movie */
    const movieCasts = await MovieService.getMovieCast(params.id);
    /* get the full crew of movie */
    // const movieCrews = await MovieService.getMovieCrew(params.id);

    setMovieInfo(movieDetail);
    setTrailers(movieTrailers);
    setCastList(movieCasts);
    // setCrews(movieCrews);
  }
  console.log({ movieInfo, castList});

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  console.log(movieInfo);

  const {
    original_title: title,
    backdrop_path,
    poster_path,
    homepage,
    overview,
    release_date,
    imdb_id,
    genres,
    runtime,
    video,
    production_companies,
  } = movieInfo ? movieInfo : undefined;

  /* get the list of genre */
  const genreList =
    genres &&
    genres.map((genre, index) => (
      <li className="genre-tag" key={index}>
        {genre.name}
      </li>
    ));
  const released =
    release_date && MovieService.convertToHumanDate(release_date);
  /* get the 1st video and the title of the trailer */
  const trailer = trailers && trailers.shift();
  trailer && console.log(trailer.name.split('"').join(""));


  /* cast list */
  const top10Cast = castList.splice(0, 10);
  // console.log(top10Cast);
  const casts = top10Cast.map((cast, index) => {
    const { name: castName, character, profile_path } = cast;
    return (
      <SwiperSlide key={index}>
        <div style={{height:"100%"}}>
          <img src={`${image_url}${profile_path}?api_key=${API_KEY}&language=en-US`}
            alt={title}>
          </img>          
        </div>          
        <div className="cast-name">
          <h5>{castName}</h5>
        </div>
        </SwiperSlide>        
    );
  });

return (
  <>
    <div className="container section-wrapper">
      <div className="row">
        <div className="col-5 col-md-6 col-sm-12">
          <div className="hero-img">
            {
              poster_path ? (
                <img
                  src={`${image_url}${poster_path}?api_key=${API_KEY}&language=en-US)`}
                  alt={title}
                />
              ) : (
                <Stack spacing={1}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={118} />
                </Stack>
              )
            }
          </div>
        </div>
        <div className="col-7 col-md-6 col-sm-12 movie-info">
          <h2 className="big-title detail-title">{title}</h2>
          <h4>({released})</h4>
          <ul>{genreList}</ul>
          <div className="detail-overview">
            <p>{overview}</p>
            <div className="visit-website">
              <a className="btn-visit-website" href={`${homepage}`}>
                Visit the website
                {/* <button type="button">Visit the website</button> */}
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-sm-12 trailer">
          {trailer && (
            <iframe
              className="youtube-trailer"
              src={`${youtube_url}${trailer.key}`}
              title={`${trailer.name.split('"').join("")}`}
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        {/* cast slider */}
        <div className="col-lg-12 col-md-12 col-sm-12">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              400: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="castSwiper"
          >
            {casts}
          </Swiper>
        </div>
      </div>
    </div>
  </>
);
};

export default MovieDetail;


