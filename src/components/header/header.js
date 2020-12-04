import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchForm from "../search-form";
import SignupModal from "../signup-modal";

class Header extends Component {

  state = {
    isModalSignupOpen: true
  };

  openSignupModal = () => this.setState({isModalSignupOpen: true});
  closeSignupModal = () => this.setState({isModalSignupOpen: false});

  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="header d-flex">
          <Link className="navbar-brand" to="/">
            TMDB
          </Link>
          <SearchForm/>
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-primary ml-2"
                  onClick={this.openSignupModal}>Signup
          </button>
          <SignupModal isOpen={this.state.isModalSignupOpen}
                       closeModal={this.closeSignupModal}/>
        </div>
      </div>
    );
  }
};

export default Header;