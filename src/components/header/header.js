import "./header.css";

import React from "react";
import LanguageSwitch from "../language-switch";
import SearchForm from "../search-form";

const Header = ({setLanguage, langActive}) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="header d-flex">
        <a className="navbar-brand" href="http://google.com">TMDB</a>
        <SearchForm/>
        <LanguageSwitch setLanguage={setLanguage} langActive={langActive}/>
      </div>
    </div>
  );
};

export default Header;