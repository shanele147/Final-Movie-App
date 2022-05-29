import "./HomePage.css";
import React, { useState, useEffect } from 'react'
import MovieService from '../../services/MovieService';
import { MOVIE_UPCOMING, MOVIE_TOP_RATED, MOVIE_POPULAR, MOVIE_NOW_PLAYING } from '../../services/MovieService';
import Carousel from "../../components/Carousel";
import SimpleSlider from "../../components/SlickCarousel";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(null);

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

    /* const popularData = moviePopular.data.results;
    const upcomingData = movieUpcoming.data.results;
    const topRatedData = movieTopRated.data.results;
    const nowPlaying = movieNowPlaying.data.results;

    setPopularMovies(popularData);
    setUpcomingMovies(upcomingData);
    setTopRatedMovies(topRatedData);
    setNowPlaying(nowPlaying); */
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      {/* render with condition. Only rendering when the data is ready */}
      {/* {nowPlaying && <Carousel nowPlaying={nowPlaying}/>} */}
      {nowPlaying && <SimpleSlider nowPlaying={nowPlaying} />}
    </div>
  )
}

export default HomePage