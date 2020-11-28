import "./top-list.css";

import React, { Component } from "react";
import MovieCardContainer from "../movie-cards-container";

import { connect } from "react-redux";
import { getTopList, clearMovieList } from "../../actions/getMovieListAction";

class TopList extends Component {

  componentDidMount() {
    this.props.getTopList();
  }

  componentWillUnmount() {
    this.props.clearMovieList();
  }

  render() {
    return (
      <React.Fragment>
        <h3 className=" mt-5 movie-list">Top List</h3>
        <div className="movie-list">
          <MovieCardContainer
            movieList={this.props.movieList}/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movieList
});

const mapDispatchToProps = dispatch => ({
  getTopList: page => dispatch(getTopList(page)),
  clearMovieList: () => dispatch(clearMovieList())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopList);