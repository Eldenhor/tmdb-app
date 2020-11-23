import React, { Component } from "react";

import TmdbSearchService from "../../services/tmdb-search-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withSearchService = (View) => {

  return class extends Component {

    tmdbSearchService = new TmdbSearchService();

    state = {
      searchResult: {},
      loading: true,
      error: false
    };

    componentDidMount() {
      this.mounted = true;
      this.updateSearchResults();
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    onSearchResultsLoaded = (searchResult) => {
      if (this.mounted) {
        this.setState({
          loading: false,
          searchResult
        });
      }
    };

    onError = () => {
      this.setState({
        loading: false,
        error: true
      });
    };

    componentDidUpdate(prevProps) {
      if (this.props.searchValue !== prevProps.searchValue) {
        this.updateSearchResults();
      }
    }

    updateSearchResults = () => {

      this.setState({
        loading: true,
        error: false
      });

      this.tmdbSearchService
        // get search value from props this.props.searchValue
        .getSearchResult(this.props.searchValue, "")
        .then(this.onSearchResultsLoaded)
        .catch(this.onError);


    };


    render() {

      const {searchResult, error, loading} = this.state;

      if (loading) {
        return <Spinner/>;
      }

      if (error) {
        return <ErrorIndicator/>;
      }

      return (
        <View searchResult={searchResult}/>
      );
    }
  };
};

export default withSearchService;