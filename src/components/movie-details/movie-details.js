import "./movie-details.css";
import posterPlaceholder from "../../images/movie-poster-placeholder.png";

import React from "react";
import { formatDate, formatMoney } from "../../helpers";

const MovieDetails = ({movie}) => {

  const imagePoster = movie.poster_path
    ? <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
           alt="poster"/>
    : <img className="movie-details-image"
           src={posterPlaceholder}
           alt="poster"/>;

  let countryId = 1;

  const country = movie.production_countries
    ? movie.production_countries.map((item) => {
      return (
        <div key={countryId++}>
          {item.name}
        </div>
      );
    })
    : <div>unknown</div>;


  return (
    <div className="movie-details-bg">
      <div className="movie-details">

        <div className="column-left">
          <div className="movie-details-image">
            {imagePoster}
            <h4 className="movie-details-vote">rating {movie.vote_average}</h4>
          </div>
        </div>

        <div className="column-right">
          <div className="movie-details-overview">
            <h2>{movie.original_title}</h2>
            <h6 className="text-muted mb-5">{movie.tagline}</h6>
            <div className="movie-details-about">
              <h5>About the film:</h5>
              <div className="table-container">
                <table className="table table-hover">
                  <tbody>
                  <tr className="table-default">
                    <th scope="row">Release Date</th>
                    <td>{formatDate(movie.release_date)}</td>
                  </tr>
                  <tr className="table-default">
                    <th scope="row">Country</th>
                    <td>{country}</td>
                  </tr>
                  <tr className="table-default">
                    <th scope="row">Budget</th>
                    <td>{formatMoney(movie.budget)}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h5 className="mt-5">Overview:</h5>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;