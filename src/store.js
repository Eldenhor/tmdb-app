import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createLogger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

export const history = createBrowserHistory();

const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(createLogger());
}

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), (thunk),(createLogger)))
  );
  return store;
}

