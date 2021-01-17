import "./top-list.css";

import React, { Component } from "react";
import MovieCardContainer from "../movie-cards-container";

import { connect } from "react-redux";
import { getTopList, clearMovieList } from "../../actions/getMovieListAction";

class TopList extends Component {

  timer = null;

  componentDidMount() {
    this.props.clearMovieList();

    window.addEventListener("scroll", this.infiniteScroll);
  }

  componentWillUnmount() {
    this.props.clearMovieList();
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  topList = React.createRef();

  infiniteScroll = () => {
    if (window.pageYOffset >= this.topList.current.scrollHeight - window.innerHeight) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() =>
        this.props.getTopList(this.props.movieList.page + 1), 1000);
    }
  };

  render() {

    return (
      <React.Fragment>
        <h4 className="d-flex justify-content-center mt-4">Popular Movies</h4>
        <div className="movie-list"
             ref={this.topList}>
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