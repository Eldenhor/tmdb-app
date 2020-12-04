import firebase from "firebase";

export const createUser = ({email, password}) => dispatch => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      dispatch({
        type: "CLEAR_USER",
        error: {code: error.code, message: error.message}
      });
    });
};

export const logIn = ({email, password}) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      dispatch({
        type: "CLEAR_USER",
        error: {code: error.code, message: error.message}
      });
    });
};