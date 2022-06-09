import React from "react";
import { useParams } from "react-router-dom";

const MovieCategory = () => {
  const params = useParams();
  console.log(params);
  return <div>MovieCategory</div>;
};

export default MovieCategory;
