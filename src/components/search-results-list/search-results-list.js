import "./search-results-list.css";

import React from "react";
import withSearchService from "../hoc-helpers/with-search-service";
import SearchResultItem from "../search-result-item";
import SearchPagination from "../search-pagination";

const SearchResultsList = ({searchResult, setPageNumber, currentPage}) => {

  return (
    <div className="search-results-list">
      <div>search list</div>
    </div>
  );
};

export default SearchResultsList;
