import "./search-results-list.css";

import React from "react";
import withSearchService from "../hoc-helpers/with-search-service";
import SearchResultItem from "../search-result-item";
import SearchPages from "../search-pages";

const SearchResultsList = ({searchResult}) => {
  console.log(searchResult.results);
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
      <SearchPages pageCount={searchResult.total_pages}/>
      {resultList}
    </div>
  );
};

export default withSearchService(SearchResultsList);