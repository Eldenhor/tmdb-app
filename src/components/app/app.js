import React, { Component } from "react";

import Header from '../header'
import MovieCardContainer from "../movie-cards-container";

export default class App extends Component {

  render() {

    const cardName = "Fight Club";
    const imgCardPath = "/9dlcOgehxDK4QaC2QDfqwQFbk5C.jpg";

    return (
      <div>
        <Header/>

        <MovieCardContainer cardName={cardName} imgCardPath={imgCardPath}/>
      </div>
    );

  }
}