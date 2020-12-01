import axios from "axios";

export const getMovie = (id) => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=de9b386a812a66fa48661258fd6c8359&language=en-US`)
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
