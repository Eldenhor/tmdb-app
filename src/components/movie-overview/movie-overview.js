import "./movie-overview.css";

import React from "react";

const MovieOverview = ({movie}) => {

  const {overview, original_title, tagline} = movie;

  let sliceLength = original_title.length > 25 ? 120 : 160;

  const sliceOverview = (overview) => {
    const textLength = overview.length;
    if (textLength > sliceLength) {
      return overview.slice(0, sliceLength) + "...";
    }
    return overview;
  };

  return (
    <div className="card-body">
      <h4 className="card-title">{original_title}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{tagline}</h6>
      <p className="card-text">{sliceOverview(overview)}</p>
    </div>
  );
};

export default MovieOverview;