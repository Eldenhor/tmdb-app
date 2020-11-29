import React from "react";
import { Route, Switch } from "react-router";
import App from "../components/app";
import SearchResultsList from "../components/search-results-list";
import Header from "../components/header";

const routes = (
  <div>
    <Header/>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/search" component={SearchResultsList}/>
      <Route render={() => <h2>Page not found</h2>}/>
    </Switch>
  </div>
);

export default routes;