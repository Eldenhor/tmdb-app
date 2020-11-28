import "./movie-cards-container.css";

import React from "react";

import MovieCard from "../movie-card";
import CardsGrid from "../cards-grid";
import MovieDetails from "../movie-details";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const MovieCardContainer = ({movieList}) => {

  if (movieList.error) {
    return <ErrorIndicator/>;
  }

  const itemsList = movieList.movieListData.map((movie) => {
    return (
      <div
        key={movie.id}
        className="movie-card-container">
        <CardsGrid poster={<MovieCard movie={movie}/>}
                   details={<MovieDetails movie={movie}/>}/>
      </div>
    );
  });

  return (
    <div className="movie-card-container">
      {itemsList}
    </div>
  );
};

export default MovieCardContainer;