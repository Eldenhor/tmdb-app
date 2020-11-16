import './movie-list.css'

import React from "react";
import MovieCardContainer from "../movie-cards-container";

const MovieList = () => {
  return (
    <div className="movie-list">
      <MovieCardContainer/>
      <MovieCardContainer/>
      <MovieCardContainer/>
      <MovieCardContainer/>
      <MovieCardContainer/>
      <MovieCardContainer/>
      <MovieCardContainer/>
      <MovieCardContainer/>
    </div>
  );
};

export default MovieList;