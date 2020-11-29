import "./search-results-list.css";

import React from "react";
import { connect } from "react-redux";
import {
  getSearchList,
} from "../../actions/getMovieListAction";
import MovieCardContainer from "../movie-cards-container";

const SearchResultsList = ({movieList}) => {


  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-center mt-4">Search Results</h4>
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
