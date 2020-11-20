import React from "react";
import LanguageSwitch from "../language-switch";

const Header = ({setLanguage, langActive}) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="http://google.com">TMDB</a>
      <LanguageSwitch setLanguage={setLanguage} langActive={langActive}/>
    </div>
  );
};

export default Header;