import React, { Component } from "react";

import tmdbService from "../../services/tmdb-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {

  return class extends Component {

    tmdb = new tmdbService();

    state = {
      loading: true,
      error: false,
      data: {}
    };

    componentDidUpdate(prevProps) {
      if ((this.props.idx !== prevProps.idx) || (this.props.language !== prevProps.language)) {
        this.updateMovie()
      }
    }

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
       this.setState({
         error: true,
         loading: false
       });
      //this.updateMovie();
    };

    updateMovie = () => {

      this.setState({
        loading: true,
        error: false
      });

      this.tmdb
        .getMovie(this.props.idx, this.props.language)
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
