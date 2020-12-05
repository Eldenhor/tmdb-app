import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";

import { logIn } from "../../actions/userAction";

class LoginModal extends Component {
  state = {
    email: "",
    password: "",
    errorEmail: "",
    errorPassword: ""
  };

  handleClose = () => {
    this.props.closeModal();
  };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  firebaseLogin = (event) => {
    event.preventDefault();

    const {email, password} = this.state;
    const user = {email, password};
    this.props.logIn(user);
  };

  render() {

    const {email, password, errorEmail, errorPassword} = this.state;

    return (
      <Dialog open={this.props.isOpen}
              aria-labelledby="form-dialog-title"
              onClose={this.handleClose}
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <form onSubmit={this.firebaseLogin}>
          <DialogContent>
            <TextField id="name"
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
            <TextField id="password"
                       label="Enter Password"
                       type="password"
                       value={password}
                       name="password"
                       error={errorPassword !== ""}
                       helperText={errorPassword !== "" ? errorPassword : ""}
                       onChange={this.onChangeHandler}
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

const mapDispatchToProps = dispatch => ({logIn: user => dispatch(logIn(user))});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
