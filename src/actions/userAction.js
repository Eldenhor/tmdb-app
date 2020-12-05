import firebase from "firebase";
import { formatUserData } from "../helpers";

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
    .then((user) => {
      const userData = formatUserData(user);
      dispatch({
        type: "FILL_USER",
        payload: userData
      });
    })
    .catch(error => {
      dispatch({
        type: "CLEAR_USER",
        error: {code: error.code, message: error.message}
      });
    });
};

export const firebaseState = () => (dispatch,) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      firebase.database().ref(`users/${user.uid}/favoriteMovies`).on(`value`, res => {
        const resMovies = res.val();
        const favoriteMovies = [];

        for (let objKey in resMovies) {
          resMovies[objKey].key = objKey;
          favoriteMovies.push(resMovies[objKey]);
        }

        const userData = formatUserData(user, favoriteMovies);
        dispatch({type: "FILL_USER", payload: userData});
      });
    } else {
      dispatch({type: "CLEAR_USER"});
    }
  });
};

export const logout = () => dispatch => {
  firebase.auth().signOut();
};