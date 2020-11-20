import "./search-results-list.css";

import React from "react";
import withSearchService from "../hoc-helpers/with-search-service";

const SearchResultsList = ({searchResult}) => {
  console.log(searchResult.results)

  return(
    <div>test</div>
  )
};

export default withSearchService(SearchResultsList);