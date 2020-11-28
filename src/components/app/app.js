import "./app.css";

import React from "react";

import TopList from "../top-list/top-list";
import Header from "../header";

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <TopList/>
    </React.Fragment>
  );
};

export default App;

