const initialState = {
  isLoaded: false,
};

const movie = (movie = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...movie,
        ...action.payload.data,
        isLoaded: true
      };
    case "GET_MOVIE_FAIL":
      return {
        error: action.payload.response.data.status_message
      };
    default:
      return movie;
  }
};

export default movie;