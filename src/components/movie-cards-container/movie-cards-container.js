import "./movie-cards-container.css";

import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";

import MovieCard from "../movie-card";
import CardsGrid from "../cards-grid";
import MovieOverview from "../movie-overview";

const MovieCardContainer = ({movieList, push}) => {
  const showId = (id) => {
    push(`/movie/${id}`);
  };

  const itemsList = movieList.movieListData.map((movie) => {
    return (
      <div
        className="movie-card-container"
        key={movie.id}
        onClick={() => showId(movie.id)}>
        <CardsGrid poster={<MovieCard movie={movie}/>}
                   details={<MovieOverview movie={movie}/>}/>
      </div>
    );
  });

  return (
    <div className="movie-card-list-container">
      {itemsList}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  push: (id) => dispatch(push(id))
});

export default connect(null, mapDispatchToProps)(MovieCardContainer);