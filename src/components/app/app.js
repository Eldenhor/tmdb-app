import React, { Component } from "react";

import Header from "../header";
import MovieList from "../movie-list";

export default class App extends Component {
  state = {
    data: [
      {id: 550},
      {id: 551},
      {id: 552},
      {id: 553},
    ]
  }

  render() {
    return (
      <div>
        <Header/>

        <MovieList data={this.state.data}/>
      </div>
    );
  }
}