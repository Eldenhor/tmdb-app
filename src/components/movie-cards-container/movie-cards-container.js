import React from "react";
import MovieCard from "../movie-card";

const MovieCardContainer = ({cardName, imgCardPath}) => {

  return (

    <div className="d-flex justify-content-around">
      <MovieCard cardName={cardName} imgCardPath={imgCardPath}/>
      <MovieCard cardName={cardName} imgCardPath={imgCardPath}/>
      <MovieCard cardName={cardName} imgCardPath={imgCardPath}/>
    </div>

  );
};

export default MovieCardContainer;