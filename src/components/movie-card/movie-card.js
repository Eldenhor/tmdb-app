import "./movie-card.css";

import React from "react";

const MovieCard = ({movie}) => {

  const {poster_path, vote_average} = movie;

  return (
    <div className="movie-card">
      <div className="card border-0">
        <img src={`https://image.tmdb.org/t/p/w185${poster_path}`}
             alt="movie"/>
      </div>

      <h4>
        <span className="badge badge-success">{vote_average}</span>
      </h4>

    </div>
  );
};

export default MovieCard;