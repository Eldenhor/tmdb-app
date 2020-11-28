const initialState = {
  page: "",
  movieListData: [],
};

const movieList = (movieList = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_LIST_SUCCESS":
      return {
        movieListData: [
          ...movieList.movieListData,
          ...action.payload.data.results,
        ],
      };
    case "GET_MOVIE_LIST_FAILURE":
      return {
        error: action.payload.error,
        errorStatus: action.payload.status
      };
    case "CLEAR_MOVIE_LIST":
      return {
        ...initialState
      };
    default:
      return movieList;
  }
};


export default movieList;