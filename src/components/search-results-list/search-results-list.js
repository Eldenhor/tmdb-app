import "./search-results-list.css";

import React from "react";
import { connect } from "react-redux";
import {
  getSearchList,
} from "../../actions/getMovieListAction";
import MovieCardContainer from "../movie-cards-container";
import SearchPagination from "../search-pagination";

const SearchResultsList = ({movieList}) => {

  const pagination = (movieList.total_pages === "" || movieList.total_pages === 1)
    ? null
    : <SearchPagination movieList={movieList}/>;

  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-center mt-4">Search Results</h4>
      <div className="search-pagination">
        {pagination}
      </div>
      <div className="search-results-list">
        <MovieCardContainer movieList={movieList}/>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movieList
});

const mapDispatchToProps = dispatch => ({
  getSearchList: () => dispatch(getSearchList())
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsList);
