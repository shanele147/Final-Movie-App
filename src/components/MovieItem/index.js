import React, { useState } from "react";
import { API_KEY, image_url } from "../../constant/const-key";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
import "./MovieItem.css";
import { useNavigate } from "react-router-dom";

function MovieItem(props) {
<<<<<<< HEAD
  const { movie, onViewMore, onGetWishList } = props;
  const { id, poster_path, title } = movie;
  const src = `${image_url}${poster_path}?api_key=${API_KEY}&language=en-US`;
  // const navigate = useNavigate();

  const onAddWishList = () => {
    localStorage.setItem("favorite", JSON.stringify({ id, poster_path }));
    props.onGetWishList({ id, poster_path });
  };

  return (
    <div className="item-container" style={{ height: "100%" }}>
      <a className="icon">
        <FontAwesomeIcon icon={faHeart} onClick={() => onAddWishList(id)} />
      </a>
      {src && (
        <img
          src={src}
          alt={title}
          loading="lazy"
          onClick={() => onViewMore(id)}
          style={{ cursor: "pointer" }}
        ></img>
      )}
=======
  const { movie, onViewMore } = props;
  const { id, poster_path, title } = movie;
  const src = `${image_url}${poster_path}?api_key=${API_KEY}&language=en-US`;
  const navigate = useNavigate();

  return (
    <div className='item-container' style={{ height: "100%" }}>
      <a className="icon"><FontAwesomeIcon icon={faHeart} /></a>
      {src && <img src={src} alt={title} loading="lazy" onClick={() => onViewMore(id)}
        style={{cursor:"pointer"}}></img>}
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
    </div>
  );
}

export default MovieItem;
