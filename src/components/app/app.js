import React, { Component } from "react";

import Header from "../header";
import MovieCardContainer from "../movie-cards-container";

export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>

        <MovieCardContainer />
        <MovieCardContainer />
        <MovieCardContainer />
        <MovieCardContainer />
      </div>
    );
  }
}