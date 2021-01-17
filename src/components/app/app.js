import "./app.css";

import React from "react";

import TopList from "../top-list/top-list";
import SelectSorting from "../select-sorting";

const App = () => {
  return (
    <React.Fragment>
      <SelectSorting/>
      <TopList/>
    </React.Fragment>
  );
};

export default App;

