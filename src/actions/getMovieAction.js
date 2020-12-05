import firebase from "firebase";
import axios from "axios";
import apiKey from "../config/tmdbConfig";

export const getMovie = (id) => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(data => {
      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: data
      });
    })
    .catch(error => {
      console.log("getMovie error", error);
      dispatch({
        type: "GET_MOVIE_FAIL",
        payload: error
      });
    });
};

export const clearMovie = () => dispatch => {
  dispatch({type: "CLEAR_MOVIE"});
};

export const addMovieToFavorite = (movieId, userId) => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(data => {
      firebase.database().ref(`users/${userId}/favoriteMovies/${movieId}`).set({...data.data});
    });
};