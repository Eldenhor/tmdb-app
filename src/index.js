import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store";
import firebase from "firebase/app";

import firebaseConfig from "./config/firebaseConfig";
import routes from "./routes";

firebase.initializeApp(firebaseConfig);
const store = new configureStore();

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>

  , document.getElementById("root")
);