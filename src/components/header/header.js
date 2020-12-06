import "./header.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import SearchForm from "../search-form";
import SignupModal from "../signup-modal";
import LoginModal from "../login-modal/login-modal";
import { firebaseState, logout } from "../../actions/userAction";

class Header extends Component {

  state = {
    isModalSignupOpen: false,
    isModalLoginOpen: false
  };

  componentDidMount() {
    this.props.firebaseState();
  }

  openSignupModal = () => this.setState({isModalSignupOpen: true});
  closeSignupModal = () => this.setState({isModalSignupOpen: false});
  openLoginModal = () => this.setState({isModalLoginOpen: true});
  closeLoginModal = () => this.setState({isModalLoginOpen: false});

  logout = () => this.props.logout();


  render() {

    const buttons = this.props.user.isLoggedIn
      ? (
        <React.Fragment>
          <button className="btn btn-info ml-2"
                  onClick={() => this.props.push("/favorites/")}>
            Favorites
          </button>
          <button className="btn btn-primary ml-2"
                  onClick={this.logout}>
            Logout
          </button>
        </React.Fragment>)
      : (
        <React.Fragment>
          <button className="btn btn-primary"
                  onClick={this.openLoginModal}>
            Login
          </button>
          <button className="btn btn-primary ml-2"
                  onClick={this.openSignupModal}>
            Signup
          </button>
          <SignupModal isOpen={this.state.isModalSignupOpen}
                       closeModal={this.closeSignupModal}/>
          <LoginModal isOpen={this.state.isModalLoginOpen}
                      closeModal={this.closeLoginModal}/>
        </React.Fragment>);

    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="header d-flex">
          <Link className="navbar-brand" to="/">
            TMDB
          </Link>
          <SearchForm/>
          {buttons}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  firebaseState: () => dispatch(firebaseState()),
  logout: () => dispatch(logout()),
  push: (query) => dispatch(push(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);