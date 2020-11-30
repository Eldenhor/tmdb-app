import "./search-results-list.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCardContainer from "../movie-cards-container";
import SearchPagination from "../search-pagination";
import Spinner from "../spinner";

class SearchResultsList extends Component {


  render() {

    const pagination = (this.props.movieList.total_pages === "" || this.props.movieList.total_pages === 1)
      ? null
      : <SearchPagination movieList={this.props.movieList}/>;


    const searchResults = (this.props.movieList.loaded === true)
      ? <MovieCardContainer movieList={this.props.movieList}/>
      : <Spinner/>;

    return (
      <React.Fragment>
        <h4 className="d-flex justify-content-center mt-4">Search Results</h4>
        <div className="search-pagination">
          {pagination}
        </div>
        <div className="search-results-list">
          {searchResults}
        </div>
      </React.Fragment>
    );
  };
}


const mapStateToProps = (state) => ({
  movieList: state.movieList
});


export default connect(mapStateToProps)(SearchResultsList);
