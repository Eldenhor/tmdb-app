import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import movie from "./movieReducer";
import movieList from "./movieListReducer";

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movie,
  movieList
});

export default rootReducer;