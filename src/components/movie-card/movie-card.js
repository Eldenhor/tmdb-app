import "./movie-card.css";

import React, { Component } from "react";
import TmdbService from "../../services/tmdb-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


class MovieCard extends Component {

  render() {
    const {poster_path, vote_average, original_title} = this.props.data;

    return (
      <div className="movie-card">
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
      </div>
    );
  }
};


const withData = (View) => {

  return class extends Component {

    tmdb = new TmdbService();

    state = {
      loading: true,
      error: false,
      data: {}
    };

    componentDidMount() {
      this.updateMovie();
      //setInterval(this.updateMovie, 5000)
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    onMovieLoaded = (data) => {
      this.setState({
        loading: false,
        data
      });
    };

    onError = (err) => {
      this.setState({
        error: true,
        loading: false
      });
      //this.updateMovie();
    };

    updateMovie = () => {
      const id = Math.floor(Math.random() * 800);

      this.tmdb
        .getMovie(id)
        .then(this.onMovieLoaded)
        .catch(this.onError);
    };

    render() {
      const {data, error, loading} = this.state;

      if (loading) {
        return <Spinner/>;
      }

      if (error) {
        return <ErrorIndicator/>;
      }

      return <View data={data}/>;
    }
  };
};

export default withData(MovieCard);

