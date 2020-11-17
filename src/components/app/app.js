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
    const pgData = {
      pg1: [
        {id: 550},
        {id: 551},
        {id: 552},
        {id: 553},
      ],
      pg2: [
        {id: 554},
        {id: 555},
        {id: 576},
        {id: 557},
      ],
      pg3: [
        {id: 558},
        {id: 559},
        {id: 560},
        {id: 561},
      ],
      pg4: [
        {id: 562},
        {id: 563},
        {id: 564},
        {id: 565},
      ],
    };

    this.setState({
      data: pgData[`pg${pgNumber}`]
    })
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