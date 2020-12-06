import axios from "axios";
import apiKey from "../config/tmdbConfig";

// const _apiBase = "https://api.themoviedb.org/3/movie/";
const _apiRest = "?api_key=de9b386a812a66fa48661258fd6c8359&language=en-US";

export const getTopList = (page = 1) => (dispatch) => {
  // axios.get(`${_apiBase}top_rated${_apiRest}&page=${page}`)
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(data => {
      dispatch({
        type: "GET_MOVIE_LIST_SUCCESS",
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: "GET_MOVIE_LIST_FAILURE",
        payload: {
          error: `${error.message}`,
          status: error.response && error.response.data.status_message
        }
      });
    });
};

export const getFavoriteList = (moviesIds = {}) => (dispatch) => {

  console.log(moviesIds);

  const favoriteMoviesList = moviesIds.map((movie) => {
    return (
      axios.get(`https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}&language=en-US`)
        .then(movie => {
          return movie.data;
        })
    );
  });

  Promise.all(favoriteMoviesList)
    .then(data => {
      console.log(data);
      dispatch({
        type: "GET_FAVORITE_LIST",
        payload: data
      });
    });
};

export const getSearchList = (query, page = 1) => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/search/movie${_apiRest}&query=${query}&page=${page}`)
    .then(data => {
      clearMovieList();
      dispatch({
        type: "GET_MOVIE_LIST_SUCCESS",
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: "GET_MOVIE_LIST_FAIL",
        payload: {
          error: `${error.message}`,
          status: error.response && error.response.data.status_message
        }
      });
    });
};

export const clearMovieList = () => (dispatch) => {
  dispatch({
    type: "CLEAR_MOVIE_LIST"
  });
};

export const clearTotalPage = () => (dispatch) => {
  dispatch({
    type: "CLEAR_TOTAL_PAGE"
  });
};


