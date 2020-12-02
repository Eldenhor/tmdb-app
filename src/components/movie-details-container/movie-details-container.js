import "./movie-details-container.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie, clearMovie } from "../../actions/getMovieAction";

import MovieDetails from "../MovieDetails";
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

  render() {

    if (this.props.movie.error) {
      return <h3>{this.props.movie.error}</h3>;
    }

    if (this.props.movie.loading) {
      return <Spinner/>;
    }


    return (
      <MovieDetails movie={this.props.movie}/>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  movie: state.movie,
  ownProps
});

const mapDispatchToProps = dispatch => ({
  getMovie: (id) => dispatch(getMovie(id)),
  clearMovie: (id) => dispatch(clearMovie(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);