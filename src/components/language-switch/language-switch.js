import "./language-switch.css";

import React from "react";


const LanguageSwitch = ({setLanguage, langActive}) => {

  const buttonEnActive = langActive === 'en' ? "btn-primary" : "btn-secondary";
  const buttonRuActive = langActive === 'ru' ? "btn-primary" : "btn-secondary";

  return (
    <div className="btn-group btn-group-toggle language-switch">

      <button className={`btn ${buttonEnActive}`}
              onClick={() => setLanguage("en")}
      >en
      </button>

      <button className={`btn ${buttonRuActive}`}
              onClick={() => setLanguage("ru")}
      >ru
      </button>

    </div>
  );
};

export default LanguageSwitch;