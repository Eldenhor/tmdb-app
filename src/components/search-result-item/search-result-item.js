import "./search-result-item.css";

import React from "react";

const SearchResultItem = ({searchResultItemData}) => {

  const {
    original_title,
    poster_path,
    release_date,
    vote_average,
    overview
  } = searchResultItemData;

  const dateRegExp = /......$/;

  const voteBadge = vote_average === 0 ? null :
    <div className="badge badge-primary">{vote_average}</div>;

  const poster = poster_path === null ?
    <div className="no-image">
      &#10063;
    </div>
    :
    <img className="search-result-image"
         alt=""
         src={`https://image.tmdb.org/t/p/w92${poster_path}`}/>;


  return (
    <div className="search-result-group">
      {voteBadge}
      <div>
        {poster}
      </div>
      <div className="search-result-item">
        <div className="d-flex">
          <h5 className="card-title">{original_title}</h5>
          <div
            className="text-warning font-weight-bold ml-2">{release_date.replace(dateRegExp, "")}</div>
        </div>
        <div>{overview}</div>
      </div>
    </div>
  );
};

export default SearchResultItem;