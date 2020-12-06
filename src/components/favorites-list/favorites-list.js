import "./favorites-list.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCardContainer from "../movie-cards-container";
import Spinner from "../spinner";
import {
  clearMovieList,
  getFavoriteList
} from "../../actions/getMovieListAction";

class FavoritesList extends Component {

  componentDidMount() {
    this.updateFavoriteList();
  }

  componentDidUpdate(prevProps) {
    if (this.props?.user?.favoriteMovies) {
      if (prevProps.user !== this.props.user) {
        this.updateFavoriteList();
      }
    }
  }

  componentWillUnmount() {
    this.props.clearMovieList();
  }

  updateFavoriteList = () => {
    console.log("update fav");
    // this.props.clearMovieList();
    if (this.props?.user?.favoriteMovies !== undefined) {
      this.props.getFavoriteList(Object.keys(this.props.user.favoriteMovies));
      // console.log(Object.keys(this.props.user.favoriteMovies));
    }
  };

  render() {

    const favoriteList = (this.props.movieList.loaded === true)
      ? <MovieCardContainer movieList={this.props.movieList}/>
      : <Spinner/>;

    return (
      <React.Fragment>
        <h4 className="d-flex justify-content-center mt-4">Your Favorites</h4>
        <div className="favorite-list">
          {favoriteList}
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  movieList: state.movieList,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  clearMovieList: () => dispatch(clearMovieList()),
  getFavoriteList: (moviesIds) => dispatch(getFavoriteList(moviesIds))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);