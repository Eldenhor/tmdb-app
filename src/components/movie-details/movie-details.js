import "./movie-details.css";

import React from "react";

const MovieDetails = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Title</h4>
      <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
      <p className="card-text">Jack Torrance accepts a caretaker job at the
        Overlook Hotel, where he, along with his wife Wendy and their son Danny,
        must live isolated from the rest of the world for the winter. But they
        aren't prepared for the madness that lurks within.</p>
    </div>
  );
};

export default MovieDetails;