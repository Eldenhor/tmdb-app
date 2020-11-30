const initialState = {
  page: "",
  movieListData: [],
};

const movieList = (movieList = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_LIST_SUCCESS":
      return {
        query: action.payload.config.url,
        page: action.payload.data.page,
        total_pages: action.payload.data.total_pages,
        movieListData: [
          ...movieList.movieListData,
          ...action.payload.data.results,
        ],
        loaded: true
      };
    case "GET_MOVIE_LIST_FAILURE":
      return {
        error: action.payload.error,
        errorStatus: action.payload.status
      };
    case "CLEAR_MOVIE_LIST":
      return {
        ...initialState,
        loaded: movieList.loaded
      };
    case "CLEAR_TOTAL_PAGE":
      return {
        ...initialState,
        loaded: false
      };
    default:
      return movieList;
  }
};


export default movieList;