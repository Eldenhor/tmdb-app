import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/userAction";

import Dialog from "@material-ui/core/Dialog";
import {
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";

class SignupModal extends Component {

  state = {
    email: "",
    password: "",
    confirmPassword: "",
    errorPassword: "",
    errorEmail: ""
  };


  handleClose = () => {
    this.props.closeModal();
  };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props?.user?.error) {
      if (this.props.user !== prevProps.user) {
        const {code, message} = this.props.user.error;

        if (code === "auth/weak-password") {
          this.setState({
            errorMail: "",
            errorPassword: message
          });
        }

        if (code === "auth/email-already-in-use") {
          this.setState({
            errorEmail: message,
            errorPassword: ""
          });
        }
      }
    }
  }

  firebaseCreateUser = (event) => {
    event.preventDefault();

    const {email, password, confirmPassword} = this.state;

    if (password === confirmPassword) {
      const newUser = {email, password};
      this.props.createUser(newUser);
    } else {
      this.setState({errorPassword: "Passwords must match"});
    }
  };

  render() {
    const {email, password, confirmPassword, errorPassword, errorEmail} = this.state;

    return (
      <Dialog open={this.props.isOpen}
              aria-labelledby="form-dialog-title"
              onClose={this.handleClose}
      >
        <DialogTitle id="form-dialog-title">Signup</DialogTitle>
        <form onSubmit={this.firebaseCreateUser}>
          <DialogContent>
            <TextField
              id="name"
              label="Enter your email"
              type="email"
              value={email}
              name="email"
              error={errorEmail !== ""}
              helperText={errorEmail !== "" ? errorEmail : ""}
              onChange={this.onChangeHandler}
              autoFocus
              fullWidth
              required
            />
            <TextField
              id="password"
              label="Enter Password"
              type="password"
              value={password}
              error={errorPassword !== ""}
              helperText={errorPassword !== "" ? errorPassword : ""}
              onChange={this.onChangeHandler}
              name="password"
              fullWidth
              required
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              error={errorPassword !== ""}
              helperText={errorPassword !== "" ? errorPassword : ""}
              onChange={this.onChangeHandler}
              type="password"
              name="confirmPassword"
              fullWidth
              required
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary"
                    type="submit">
              Signup
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({user: state.user});

const mapDispatchToProps = dispatch => ({createUser: newUser => dispatch(createUser(newUser))});

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
