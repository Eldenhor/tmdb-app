import "./header.css";

import React from "react";

import SearchForm from "../search-form";

const Header = () => {

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="header d-flex">
        <a className="navbar-brand" href="http:google.com">
          TMDB
        </a>
        <SearchForm/>
      </div>
    </div>
  );
};

export default Header;