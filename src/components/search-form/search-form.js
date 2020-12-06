import "./search-form.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import {
  clearMovieList,
  getSearchList,
  clearTotalPage
} from "../../actions/getMovieListAction";

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class SearchForm extends Component {

  timer = null;

  state = {
    searchValue: "",
  };

  // kills the timer after every entered character
  handleChange = (e) => {
    clearTimeout(this.timer);

    // if search field is empty, reset search, and redirect to main page
    if (e.target.value === "") {
      this.props.push("/");
    }
    this.setState({
      searchValue: e.target.value
    });

    // sets a new timer, and wait 1 sec before sending
    // the current value to the search
    if (e.target.value !== "") {
      this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
    }
  };

  // executed when the ENTER is pressed
  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      // kills the timeout if ENTER is pressed
      if (e.target.value !== "") {
        clearTimeout(this.timer);
        this.triggerChange();
      }
    }
  };

  triggerChange = () => {
    this.props.clearMovieList();
    this.props.clearTotalPage();
    const {searchValue} = this.state;
    // redux only here???
    const regPattern = /[a-zA-Z0-9а-яА-Я -]+/;
    const regSearchValue = searchValue.toString().match(regPattern);

    if (regSearchValue !== null) {
      // this.props.getSearchList(regSearchValue);
      if (regSearchValue !== "") {
        this.props.push(`/search/${regSearchValue}`);
      }
    }
  };

  componentWillUnmount() {
    // this.props.clearMovieList();
  }

  render() {

    return (
      <React.Fragment>
        <input
          type="text"
          className="search-form form-control mr-sm-2"
          placeholder="search"
          value={this.state.searchValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  movieListData: state.movieListData,
});

const mapDispatchToProps = dispatch => ({
  getSearchList: (query, page) => dispatch(getSearchList(query, page)),
  clearTotalPage: () => dispatch(clearTotalPage()),
  push: (query) => dispatch(push(query)),
  clearMovieList: () => dispatch(clearMovieList())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
