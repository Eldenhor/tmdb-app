import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import movie from "./movieReducer";
import movieList from "./movieListReducer";
import user from "./userReducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movie,
  movieList,
  user
});

export default createRootReducer;

