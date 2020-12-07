import "./movie-cards-container.css";
import favIconStar from "../../images/fav-icon-star.png";

import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";

import MovieCard from "../movie-card";
import CardsGrid from "../cards-grid";
import MovieOverview from "../movie-overview";
import {
  removeFavorite,
  addMovieToFavorite,
} from "../../actions/getMovieAction";

const MovieCardContainer = ({movieList, push, removeFavorite, user, addMovieToFavorite}) => {
  const showId = (id) => {
    push(`/movie/${id}`);
  };

  const removeFav = (movieId, userId) => {
    removeFavorite(movieId, userId);
  };

  const addFav = (movieId, userId) => {
    addMovieToFavorite(movieId, userId);
  };


  const isFavorite = (movieId) => {
    if (user.isLoggedIn && (typeof user.favoriteMovies !== "undefined" && user.favoriteMovies !== null)) {
      // convert current favoriteMovies object keys to array
      // and return true if selected movie already in this array
      return !!Object.keys(user.favoriteMovies).find(element => element === movieId.toString());
    }
  };

  const itemsList = movieList.movieListData.map((movie) => {
    // first check if user is LOGGED IN, if yes -> render ADD or REMOVE buttons
    // if NOT logged in -> NULL (buttons not rendered)
    return (
      <div key={movie.id}>{
        user.isLoggedIn ?
          isFavorite(movie.id)
            ? (<button className="btn add-remove-button"
                       onClick={() => removeFav(movie.id, user.userId)}>
              <img src={favIconStar} alt="fav-icon-star"/>
            </button>)
            : (<button className="btn add-remove-button disabled-star"
                       onClick={() => addFav(movie.id, user.userId)}>
              <img src={favIconStar} alt="fav-icon-star"/>
            </button>)
          : null

      }
        <div
          className="movie-card-container"
          onClick={() => showId(movie.id)}>
          <CardsGrid poster={<MovieCard movie={movie}/>}
                     details={<MovieOverview movie={movie}/>}/>
        </div>
      </div>
    );
  });

  return (
    <div className="movie-card-list-container">
      {itemsList}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  push: (id) => dispatch(push(id)),
  removeFavorite: (movieId, userId) => dispatch(removeFavorite(movieId, userId)),
  addMovieToFavorite: (movieId, userId) => dispatch(addMovieToFavorite(movieId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardContainer);