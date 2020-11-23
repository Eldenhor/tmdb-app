import React, { Component } from "react";

import Header from "../header";
import MovieList from "../movie-list";
import PageButtons from "../page-buttons";
import SearchResultsList from "../search-results-list/search-results-list";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default class App extends Component {

  state = {
    data: [
      {id: 550},
      {id: 551},
      {id: 552},
      {id: 553},
    ],
    language: "en",
    searchValue: "",
    pageNumber: 1
  };

  // test pages
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
    });
  };

  setLanguage = (lang) => {
    this.setState({
      language: lang
    });
  };


  setPageNumber = (pageNumber) => {
    this.setState({
      pageNumber
    })
  }

  onSearchChange = (searchValue) => {
    this.setState({searchValue});
  };


  render() {

    const showSearchList = this.state.searchValue === ""
      ? null
      : <Redirect to="/search"/>;

    return (
      <div>
        <Router>
          <Header setLanguage={this.setLanguage}
                  langActive={this.state.language}
                  onSearchChange={this.onSearchChange}
                  currentSearchValue={this.state.searchValue}/>

          <Switch>
            <Route path="/search"
                   render={() => (
                     <SearchResultsList searchValue={this.state.searchValue}
                                        pageNumber={this.state.pageNumber}
                                        setPageNumber={this.setPageNumber}/>
                   )}/>
            {showSearchList}
            <Route path="/"
                   exact
                   render={() => (
                     <React.Fragment>
                       <PageButtons pageClick={this.pageClick}/>
                       <MovieList data={this.state.data}
                                  language={this.state.language}/>
                     </React.Fragment>
                   )}/>
            <Redirect to="/"/>
          </Switch>
        </Router>
      </div>
    );
  }
}