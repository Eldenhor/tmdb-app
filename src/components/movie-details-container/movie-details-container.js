import "./movie-details-container.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMovie,
  clearMovie,
  addMovieToFavorite
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

  render() {

    if (this.props.movie.error) {
      return <h3>{this.props.movie.error}</h3>;
    }

    if (this.props.movie.loading) {
      return <Spinner/>;
    }


    return (
      <MovieDetails movie={this.props.movie}
                    addToFavorite={this.addToFavorite}/>
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
  addMovieToFavorite: (movieId, userId) => dispatch(addMovieToFavorite(movieId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);