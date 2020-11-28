import React from "react";
import { Route } from "react-router";

import App from "../components/app";
import SearchResultsList from "../components/search-results-list";

const routes = (
  <Route path="/" component={App}>
    <Route path="/search" component={SearchResultsList}/>
    <Route render={() => <h2>Page not found</h2>}/>
  </Route>
);

export default routes;