import "./header.css";

import React from "react";
import { Link } from "react-router-dom";

import SearchForm from "../search-form";

const Header = () => {

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="header d-flex">
        <Link className="navbar-brand" to="/">
          TMDB
        </Link>
        <SearchForm/>
      </div>
    </div>
  );
};

export default Header;