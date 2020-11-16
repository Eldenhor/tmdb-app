import "./movie-card.css";

import React from "react";

const MovieCard = ({data}) => {

  const {poster_path, vote_average} = data;

  return (
    <div className="movie-card">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}
             alt="movie"/>
      </div>

      <h4>
        <span className="badge badge-success">{vote_average}</span>
      </h4>

    </div>
  );
};

export default MovieCard;