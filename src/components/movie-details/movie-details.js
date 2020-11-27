import "./movie-details.css";

import React from "react";

const MovieDetails = ({movie}) => {

  const {overview, original_title, tagline} = movie;

  return (
    <div className="card-body">
      <h4 className="card-title">{original_title}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{tagline}</h6>
      <p className="card-text">{overview}</p>
    </div>
  );
};

export default MovieDetails;