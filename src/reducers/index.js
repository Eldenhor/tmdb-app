import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import movie from "./movieReducer";
import movieList from "./movieListReducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movie,
  movieList
});

export default createRootReducer;

