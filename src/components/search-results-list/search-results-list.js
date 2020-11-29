import "./search-results-list.css";

import React from "react";
import { connect } from "react-redux";
import {
  getSearchList,
} from "../../actions/getMovieListAction";
import MovieCardContainer from "../movie-cards-container";

const SearchResultsList = ({pathname, movieList}) => {


  return (
    <div className="search-results-list">
      <div>search list</div>
      <div>
        pathname: {pathname}
      </div>
      <MovieCardContainer movieList={movieList}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movieList
});

const mapDispatchToProps = dispatch => ({
  getSearchList: () => dispatch(getSearchList())
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsList);
