import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MovieService from "../../services/MovieService";
import Loader from "../../components/Loader";
import "./MovieCategory.css";
import { API_KEY, image_url } from "../../constant/const-key";
<<<<<<< HEAD
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
=======
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033

const MovieCategory = (props) => {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

<<<<<<< HEAD
  // pagination
=======
  // pagination 
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  async function fetchData() {
    setLoading(true);
    console.log(page);
<<<<<<< HEAD
    const response = await MovieService.getMovieByTypePerPage(
      params.movieCategory,
      page > 20 ? 1 : page
    );
=======
    const response = await MovieService.getMovieByTypePerPage(params.movieCategory, page > 20 ? 1 : page);
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
    const movieList = response.results;
    setTotalPages(response.total_pages);
    setMovies(movieList);
    // setCategory(params.movieCategory);
<<<<<<< HEAD
    setLoading(false);
  }

  console.log({ page, totalPages });

  // call API
  useEffect(() => {
    fetchData();
  }, [params.movieCategory, page]);

  const movieItems =
    movies &&
    movies.map((movie, index) => {
      const { title, id, overview } = movie;
      return (
        <div key={index} className="col-6 col-lg-4 col-md-6 col-sm-12">
          <div>
            <img
              src={`${image_url}${movie?.poster_path}?api_key=${API_KEY}&language=en-US`}
              loading="lazy"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="overview">{overview}</p>
              <Link to={`/movies/${id}`} className="btn-view-more category-btn">
                View more
              </Link>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="container mt-5">
      {loading === true ? (
        <Loader />
      ) : (
        <div className="row g-4" style={{ marginTop: "5rem" }}>
=======
    setLoading(false);    
  }

  console.log({ page, totalPages});

  // call API
  useEffect(() => {
    fetchData();    
  }, [params.movieCategory, page]);

  const movieItems = movies && movies.map((movie, index) => {
    const { title, id, overview } = movie;
    return (
      <div key={index} className="col-6 col-lg-4 col-md-6 col-sm-12">
        <div>
          <img src={`${image_url}${movie?.poster_path}?api_key=${API_KEY}&language=en-US`} loading="lazy" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="overview">{overview}</p>
            <Link to={`/movies/${id}`} className="btn-view-more category-btn">View more</Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-5">
      {loading === true ? <Loader /> :
        (<div className="row g-4" style={{ marginTop: "5rem" }} >
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
          {movieItems}
          <div className="col-12">
            <Stack spacing={2}>
              {/* <Typography>Page: {page}</Typography> */}
<<<<<<< HEAD
              <Pagination
                className="custom-pagination"
                count={totalPages > 20 ? 20 : totalPages}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
=======
              <Pagination className="custom-pagination" count={totalPages > 20 ? 20 : totalPages} page={page < 20 ? page : 1 } onChange={handleChange} />
            </Stack>
          </div>
        </div>
        )}
    </div>);
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
};

export default MovieCategory;

