import "./movie-card.css";

import React, { Component } from "react";
import TmdbService from "../../services/tmdb-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


class MovieCard extends Component {

  render() {
    const {movie, error, loading} = this.props.data;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <RenderMovie movie={movie}/> : null;

    return (
      <div className="movie-card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
};

const RenderMovie = ({movie}) => {
  const {poster_path, original_title, vote_average} = movie;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const f = () => {

  return class extends Component {

    tmdb = new TmdbService();

    state = {
      loading: true,
      error: false,
      movie: {
        id: 0
      }
    };

    componentDidMount() {
      this.updateMovie();
      //setInterval(this.updateMovie, 5000)
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    onMovieLoaded = (movie) => {
      this.setState({
        loading: false,
        movie
      });
    };

    onError = (err) => {
      //  this.setState({
      //    error: true,
      //    loading: false
      //  })
      this.updateMovie();
    };

    updateMovie = () => {
      const id = Math.floor(Math.random() * 800);

      this.tmdb
        .getMovie(id)
        .then(this.onMovieLoaded)
        .catch(this.onError);
    };

    render() {
      return <MovieCard data={this.state}/>
    }
  }
}

export default f();

