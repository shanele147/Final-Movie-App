import React, { useState } from "react";
import { API_KEY, image_url } from "../../constant/const-key";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./MovieItem.css";
import { useNavigate } from "react-router-dom";

function MovieItem(props) {
  const { movie, onViewMore } = props;
  const { id, poster_path, title } = movie;
  const src = `${image_url}${poster_path}?api_key=${API_KEY}&language=en-US`;
  const navigate = useNavigate();

  return (
    <div className='item-container' style={{ height: "100%" }}>
      <a className="icon"><FontAwesomeIcon icon={faHeart} /></a>
      {src && <img src={src} alt={title} loading="lazy" onClick={() => onViewMore(id)}
        style={{cursor:"pointer"}}></img>}
    </div>
  );
}

export default MovieItem;
