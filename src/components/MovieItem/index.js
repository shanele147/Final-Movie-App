import React, { useState } from "react";
import { API_KEY, image_url } from "../../constant/const-key";
import Spinner from "../Spinner";

function MovieItem(props) {
  const [ready, setReady] = useState(false);

  /* function handleImageLoaded(src) {
    setReady(false);
    console.log("Ready " + ready);
    setReady(true);
  } */

  const { movie } = props;
  // const { id, poster_path, title } = movie;
  const src = `${image_url}${movie?.poster_path}?api_key=${API_KEY}&language=en-US`;
  return (
    <div style={{ height: "100%" }}>
      {" "}
      {src && <img src={src} alt={movie?.title} loading="lazy"></img>}
    </div>
  );
}

export default MovieItem;
