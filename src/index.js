import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";


import configureStore, { history } from "./store";
import App from "./components/app";
import SearchResultsList
  from "./components/search-results-list/search-results-list";

const store = new configureStore();

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/search" component={SearchResultsList}/>
        <Route render={() => <h2>Page not found</h2>}/>
      </Switch>
    </ConnectedRouter>
  </Provider>

  , document.getElementById("root")
);