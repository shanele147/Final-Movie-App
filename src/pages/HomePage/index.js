import "./HomePage.css";
import React, { useState, useEffect } from 'react'
import MovieService from '../../services/MovieService';
import { MOVIE_UPCOMING, MOVIE_TOP_RATED, MOVIE_POPULAR, MOVIE_NOW_PLAYING } from '../../services/MovieService';
import SimpleSlider from "../../components/SlickCarousel";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [idList, setIdList] = useState([]);
  // const [posterPaths, setPosterPaths] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const moviePopular = await MovieService.getMovieByType(MOVIE_POPULAR);
    const movieUpcoming = await MovieService.getMovieByType(MOVIE_UPCOMING);
    const movieTopRated = await MovieService.getMovieByType(MOVIE_TOP_RATED);
    const movieNowPlaying = await MovieService.getMovieByType(MOVIE_NOW_PLAYING);
    // console.log({ moviePopular, movieUpcoming, movieTopRated });
    setPopularMovies(moviePopular);
    setUpcomingMovies(movieUpcoming);
    setTopRatedMovies(movieTopRated);
    setNowPlaying(movieNowPlaying);
    setLoading(false);
  }

  // call API
  useEffect(() => {
    fetchData();    
  }, []);
  console.log(loading);

 
  // get Id list of the now playing movie to show on carousel
  useEffect(() => {
    loading === false && nowPlaying ? setIdList(nowPlaying.map((movie) => movie.id)) : console.log("Loading...");
    // loading === false && nowPlaying ? setPosterPaths(nowPlaying.map((movie) => movie.poster_path)) : console.log("Loading...");
    /* async function fetchPosterPath(id) {
      const path = await MovieService.getMoviePoster(id);
    } */

    

  }, [nowPlaying]);
  
  

  return (
    <div>
      {/* render with condition. Only rendering when the data is ready */}
      {/* {nowPlaying && <Carousel nowPlaying={nowPlaying}/>} */}
      {<SimpleSlider nowPlaying={nowPlaying} idList={idList} />}
    </div>
  )
}

export default HomePage