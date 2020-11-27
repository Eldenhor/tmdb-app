import "./movie-cards-container.css";

import React, { Component, useEffect } from "react";

import MovieCard from "../movie-card";
import CardsGrid from "../cards-grid";
import MovieDetails from "../movie-details";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import { connect } from "react-redux";
import { getMovie } from "../../actions";

class MovieCardContainer extends Component {

  componentDidMount() {
    const movieId = 550;
    this.loadMovie(movieId);
  }

  loadMovie = (movieId) => {
    this.props.getMovie(movieId);
  };

  render() {

    const {movie, loading, error} = this.props;
    console.log(this.props);

    if (loading) {
      return <Spinner/>;
    }

    if (error) {
      return <ErrorIndicator/>;
    }

    return (

      <div className="movie-card-container">
        <CardsGrid poster={<MovieCard movie={movie}/>}
                   details={<MovieDetails movie={movie}/>}/>
      </div>

    );
  }

};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = dispatch => ({
  getMovie: movieId => dispatch(getMovie(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardContainer);