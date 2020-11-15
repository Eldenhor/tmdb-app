import React from "react";

import "./movie-card.css";

const MovieCard = ({cardName, imgCardPath}) => {

  return (
    <div className="movie-card card border-primary mb-3">

      <img src={`https://image.tmdb.org/t/p/w200${imgCardPath}`}
           alt="movie-image"/>

      <div className="card-body">
        <h4 className="card-title">{cardName}</h4>
        <h6 className="card-subtitle">Some text</h6>
      </div>


    </div>
  );
};

export default MovieCard;