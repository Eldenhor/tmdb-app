import React, { Component } from "react";

import Header from "../header";
import MovieList from "../movie-list";

export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>

        <MovieList/>
      </div>
    );
  }
}