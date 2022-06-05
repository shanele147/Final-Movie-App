import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSlider from "../../components/HeroSlider";
import Loader from "../../components/Loader";
import MovieService from "../../services/MovieService";
import {
  MOVIE_UPCOMING,
  MOVIE_TOP_RATED,
  MOVIE_POPULAR,
  MOVIE_NOW_PLAYING,
} from "../../services/MovieService";
import "./HomePage.css";


const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  // const [idList, setIdList] = useState([]);
  // const [posterPaths, setPosterPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  const onViewMore = (movieType, id ) => {
    navigation(`/movie/${movieType}/${id}`);
  }

  async function fetchData() {
    setLoading(true);
    const moviePopular = await MovieService.getMovieByType(MOVIE_POPULAR);
    const movieUpcoming = await MovieService.getMovieByType(MOVIE_UPCOMING);
    const movieTopRated = await MovieService.getMovieByType(MOVIE_TOP_RATED);
    const movieNowPlaying = await MovieService.getMovieByType(MOVIE_NOW_PLAYING);
   
    setPopularMovies(moviePopular);
    setUpcomingMovies(movieUpcoming);
    setTopRatedMovies(movieTopRated);
    setNowPlaying(movieNowPlaying);

    setTimeout(() => {     
      setLoading(false);
    }, 2000);

    
  }
  /* let type;
  async function fetchData(type) {
    setLoading(false);
    switch (type) {
      case MOVIE_NOW_PLAYING:
        const movieNowPlaying = await MovieService.getMovieByType(MOVIE_NOW_PLAYING);
        setNowPlaying(movieNowPlaying);
        break;
      case MOVIE_UPCOMING:
        const movieUpcoming = await MovieService.getMovieByType(MOVIE_UPCOMING);
        setUpcomingMovies(movieUpcoming);
        break;
      case MOVIE_POPULAR:
        const moviePopular = await MovieService.getMovieByType(MOVIE_POPULAR);
        setPopularMovies(moviePopular);
        break;
      case MOVIE_TOP_RATED:
        const movieTopRated = await MovieService.getMovieByType(MOVIE_TOP_RATED);
        setTopRatedMovies(movieTopRated);
        break;
    }
    setLoading(false);
  } */

  // call API
  useEffect(() => {
    fetchData();
  }, []);
  console.log(loading);

  // get Id list of the now playing movie to show on carousel
  /*  useEffect(() => {
     loading === false && nowPlaying
       ? setIdList(nowPlaying.map((movie) => movie.id))
       : console.log("Loading...");
     loading === false && nowPlaying ? setPosterPaths(nowPlaying.map((movie) => movie.poster_path)) : console.log("Loading...");
   }, [nowPlaying]); */

  return (
    <div>
      {/* render with condition. Only rendering when the data is ready */}
      {/* {nowPlaying && <Carousel nowPlaying={nowPlaying}/>} */}
      {loading === true ? <Loader /> : <HeroSlider nowPlaying={nowPlaying} onViewMore={onViewMore} movieType={MOVIE_NOW_PLAYING} />}  
    </div>
  );
};

export default HomePage;
