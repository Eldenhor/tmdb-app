import React from "react";
import { Route, Switch } from "react-router";
import App from "../components/app";
import SearchResultsList from "../components/search-results-list";
import Header from "../components/header";
import MovieDetails from "../components/movie-details-container";

const routes = (
  <div>
    <Header/>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/search" component={SearchResultsList}/>
      <Route path="/movie/:id" component={MovieDetails}/>
      <Route render={() => <h2>Page not found</h2>}/>
    </Switch>
  </div>
);

export default routes;