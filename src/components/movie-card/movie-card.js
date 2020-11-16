import "./movie-card.css";

import React, { Component } from "react";
import withData from '../hoc-helpers'

const MovieCard = ({data}) => {

  const {poster_path, vote_average, original_title} = data;

  return (
    <div className="movie-card">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}
             alt="movie"/>
      </div>

      <h4>
        <span className="badge badge-success">{vote_average}</span>
      </h4>

      <div>
        <h6 className="card-title">{original_title}</h6>
      </div>
    </div>
  );
};

export default withData(MovieCard);