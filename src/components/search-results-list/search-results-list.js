import "./search-results-list.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCardContainer from "../movie-cards-container";
import Spinner from "../spinner";
import Pagination from "@material-ui/lab/Pagination";
import {
  clearMovieList,
  getSearchList
} from "../../actions/getMovieListAction";


class SearchResultsList extends Component {

  state = {
    totalPages: 1,
  };

  setPage = (event, page) => {
    this.updateMovies(this.props.ownProps.match.params.query, page);
  };

  componentDidMount() {
    this.updateMovies();

  }

  componentDidUpdate(prevProps) {
    const newQuery = this.props.ownProps.match.params.query;
    const prevQuery = prevProps.ownProps.match.params.query;

    if (prevProps.movieList.total_pages !== this.props.movieList.total_pages && this.props.movieList.total_pages !== undefined) {
      this.setState({
        totalPages: this.props.movieList.total_pages
      });
    }

    if (prevQuery !== newQuery) {
      this.updateMovies(newQuery);
    }

  }


  updateMovies = (newQuery, page) => {
    this.props.clearMovieList();

    const searchValue = newQuery || this.props.ownProps.match.params.query;

    if (searchValue) {
      this.props.getSearchList(searchValue, page);
    }
  };


  render() {

    const pagination = (this.props.movieList.total_pages === "" || this.props.movieList.total_pages === 1 || this.props.movieList.loaded === false)
      ? null
      : <Pagination count={this.state.totalPages}
                    shape={"rounded"}
                    onChange={this.setPage}/>;


    const searchResults = (this.props.movieList.loaded === true)
      ? <MovieCardContainer movieList={this.props.movieList}/>
      : <Spinner/>;

    if (this.props.movieList.total_pages === 0) {
      return <h3 className="text-center">nothing found</h3>;
    }

    return (
      <React.Fragment>
        <h4 className="d-flex justify-content-center mt-4">Search Results</h4>
        <div className="search-pagination mb-3">
          {pagination}
        </div>
        <div className="search-results-list">
          {searchResults}
        </div>
      </React.Fragment>
    );
  };
}


const mapStateToProps = (state, ownProps) => ({
  movieList: state.movieList,
  ownProps
});

const mapDispatchToProps = dispatch => ({
  clearMovieList: () => dispatch(clearMovieList()),
  getSearchList: (query, page) => dispatch(getSearchList(query, page))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsList);
