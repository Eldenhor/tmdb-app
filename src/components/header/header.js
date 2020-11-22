import "./header.css";

import React from "react";
import { Link } from "react-router-dom";

import LanguageSwitch from "../language-switch";
import SearchForm from "../search-form";

const Header = ({setLanguage, langActive, onSearchChange, currentSearchValue}) => {

  const resetSearch = () => {
    onSearchChange("")
  }

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="header d-flex">
        <Link className="navbar-brand" to="/" onClick={resetSearch}>
          TMBD
        </Link>
        <SearchForm onSearchChange={onSearchChange} currentSearchValue={currentSearchValue}/>
        <LanguageSwitch setLanguage={setLanguage} langActive={langActive}/>
      </div>
    </div>
  );
};

export default Header;