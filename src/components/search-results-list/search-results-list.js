import "./search-results-list.css";

import React from "react";
import withSearchService from "../hoc-helpers/with-search-service";
import SearchResultItem from "../search-result-item";
import SearchPagination from "../search-pagination";

const SearchResultsList = ({searchResult, setPageNumber, currentPage}) => {

  console.log(searchResult)

  const resultList = searchResult.results.map((resultItem) => {
    return (
      <SearchResultItem key={resultItem.id}
                        searchResultItemData={resultItem}
      />
    );
  });

  return (
    <div className="search-results-list">
      <SearchPagination pageCount={searchResult.total_pages} setPageNumber={setPageNumber} currentPage={currentPage}/>
      {resultList}
    </div>
  );
};

export default withSearchService(SearchResultsList);
