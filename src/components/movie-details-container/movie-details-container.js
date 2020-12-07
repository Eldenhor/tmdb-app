import "./movie-details-container.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMovie,
  clearMovie,
  addMovieToFavorite,
  removeFavorite
} from "../../actions/getMovieAction";

import MovieDetails from "../movie-details";
import Spinner from "../spinner";

class MovieDetailsContainer extends Component {

  componentDidMount() {
    const id = this.props.ownProps.match.params.id;
    this.updateMovie(id);
  }

  componentWillUnmount() {
    this.props.clearMovie();
  }

  updateMovie = (id) => {
    this.props.getMovie(id);
  };

  addToFavorite = () => {
    const {movie, user} = this.props;
    this.props.addMovieToFavorite(movie.id, user.userId);
  };

  removeFavorite = () => {
    const {movie, user} = this.props;
    this.props.removeFavorite(movie.id, user.userId);
  };

  isFavorite = () => {
    const {user, movie} = this.props;
    if (user.isLoggedIn && (typeof user.favoriteMovies !== "undefined" && user.favoriteMovies !== null)) {
      // convert current favoriteMovies object keys to array
      // and return true if selected movie already in this array
      return !!Object.keys(user.favoriteMovies).find(element => element === movie.id.toString());
    }
  };

  render() {

    if (this.props.movie.error) {
      return <h3>{this.props.movie.error}</h3>;
    }

    if (this.props.movie.loading) {
      return <Spinner/>;
    }

    return (
      <MovieDetails movie={this.props.movie}
                    addToFavorite={this.addToFavorite}
                    removeFavorite={this.removeFavorite}
                    isFavorite={this.isFavorite()}
                    isLoggedIn={this.props.user.isLoggedIn}/>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  movie: state.movie,
  user: state.user,
  ownProps
});

const mapDispatchToProps = dispatch => ({
  getMovie: (id) => dispatch(getMovie(id)),
  clearMovie: (id) => dispatch(clearMovie(id)),
  addMovieToFavorite: (movieId, userId) => dispatch(addMovieToFavorite(movieId, userId)),
  removeFavorite: (movieId, userId) => dispatch(removeFavorite(movieId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);