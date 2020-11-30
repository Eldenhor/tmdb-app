import "./movie-cards-container.css";

import React from "react";

import MovieCard from "../movie-card";
import CardsGrid from "../cards-grid";
import MovieDetails from "../movie-details";

const MovieCardContainer = ({movieList}) => {

  const itemsList = movieList.movieListData.map((movie) => {
    return (
      <div
        className="movie-card-container"
        key={movie.id}>
        <CardsGrid poster={<MovieCard movie={movie}/>}
                   details={<MovieDetails movie={movie}/>}/>
      </div>
    );
  });

  return (
    <div className="movie-card-list-container">
      {itemsList}
    </div>
  );
};

export default MovieCardContainer;