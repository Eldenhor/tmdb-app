import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import movie from "./movieReducer";

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movie
});

export default rootReducer;