import React, { Component } from "react";

import TmdbService from "../../services/tmdb-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

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
      //setInterval(this.updateMovie, 5000);
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
      // this.setState({
      //   error: true,
      //   loading: false
      // });
      this.updateMovie();
    };

    updateMovie = () => {
      const id = Math.floor(Math.random() * 800);

      this.setState({
        loading: true
      });

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

export default withData;
