// import { createBrowserHistory } from "history";
// import thunk from "redux-thunk";
// import { applyMiddleware, createStore, compose } from "redux";
// import { routerMiddleware } from "connected-react-router";
// import { createLogger } from "redux-logger";
//
// import createRootReducer from "./reducers";
//
// export const history = createBrowserHistory();
//
// const middlewares = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middlewares.push(createLogger());
// }
//
// export default function configureStore(preloadedState) {
//   const store = createStore(
//     createRootReducer(history),
//     preloadedState,
//     compose(applyMiddleware(routerMiddleware(history), (thunk), (createLogger({collapsed: false}))))
//   );
//
//   return store;
// }

import thunk from "redux-thunk";

import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import { createLogger } from "redux-logger/src";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        createLogger({collapsed:true})
      )
    )
  );

  return store;
}