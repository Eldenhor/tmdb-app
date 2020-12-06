import firebase from "firebase/app";
import "firebase/database";
import axios from "axios";
import apiKey from "../config/tmdbConfig";
import { formatMovieData } from "../helpers";

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
      const formattedMovieData = formatMovieData(data.data);
      firebase.database().ref(`users/${userId}/favoriteMovies/${movieId}`).set({...formattedMovieData});
    });
};

export const removeFavorite = (movieId, userId) => dispatch => {
  firebase.database().ref(`users/${userId}/favoriteMovies/${movieId}`).remove();
};