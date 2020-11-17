import React, { Component } from "react";

import Header from "../header";
import MovieList from "../movie-list";
import PageButtons from "../page-buttons";

export default class App extends Component {
  state = {
    data: [
      {id: 550},
      {id: 551},
      {id: 552},
      {id: 553},
    ]
  };

  pageClick = (pgNumber) => {
    console.log(pgNumber)
  };

  render() {
    return (
      <div>
        <Header/>
        <PageButtons pageClick={this.pageClick}/>

        <MovieList data={this.state.data}/>
      </div>
    );
  }
}