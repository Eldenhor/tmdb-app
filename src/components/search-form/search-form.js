import "./search-form.css";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
      this.props.onSearchChange("")
      this.props.history.push("/");
    }
    this.setState({
      searchValue: e.target.value
    });

    // sets a new timer, and wait 1 sec before sending
    // the current value to the search
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  };

  // executed when the ENTER is pressed
  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      // kills the timeout if ENTER is pressed
      clearTimeout(this.timer);
      this.triggerChange();
    }
  };

  triggerChange = () => {
    const {searchValue} = this.state;
    this.props.onSearchChange(searchValue);
  };

  render() {

    return (
      <React.Fragment>
        <input
          type="text"
          className="form-control mr-sm-2"
          placeholder="search"
          value={this.state.searchValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </React.Fragment>
    );
  }
};

export default withRouter(SearchForm);