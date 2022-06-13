import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../../services/MovieService";
import Loader from "../../components/Loader";
import MovieItem from "../../components/MovieItem";
import { API_KEY, image_url, base_URL } from "../../constant/const-key";
import "./WishList.css";

function WishList(props) {
  const { wishList } = props;
  console.log(wishList);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const onViewMore = (id) => {
    navigate(`/movies/${id}`);
  };

  const movieImgs = wishList.map((item, index) => {
    const { id, poster_path } = item;
    const src = `${image_url}${poster_path}?api_key=${API_KEY}&language=en-US`;
    return (
      <div key={index} className="col-4 col-md-3 col-sm-3">
        <div className="wish-list">
          {src && (
            <img
              src={src}
              alt={id}
              loading="lazy"
              onClick={() => onViewMore(id)}
              style={{ cursor: "pointer" }}
            ></img>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="wishList-container container">
      <div className="row g-4">
        <h2>Wish List Movies</h2>
        {movieImgs}
      </div>
    </div>
  );
}

export default WishList;
