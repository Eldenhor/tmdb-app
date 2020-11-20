import './movie-list.css'

import React from "react";
import MovieCardContainer from "../movie-cards-container";

const MovieList = ({data, language}) => {
  const movieItems = data.map((item) => {

    return(
      <MovieCardContainer idx={item.id} key={item.id} language={language}/>
    )
  })
  return (
    <div className="movie-list">
      {movieItems}
    </div>
  );
};

export default MovieList;