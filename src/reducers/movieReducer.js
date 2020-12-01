const initialState = {
  loading: true,
};

const movie = (movie = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...movie,
        ...action.payload.data,
        loading: false
      };
    case "GET_MOVIE_FAIL":
      return {
        error: action.payload.response.data.status_message
      };
    case "CLEAR_MOVIE":
      return {
        ...initialState
      };
    default:
      return movie;
  }
};

export default movie;