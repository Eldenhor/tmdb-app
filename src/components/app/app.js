import "./app.css";

import React, { useState } from "react";

import TopList from "../top-list/top-list";
import FilterAndGenreContainer from "../filter-and-genre-container";

const App = () => {

  const [page, setPage] = useState(1);

  return (
    <React.Fragment>
      <FilterAndGenreContainer page={page} setPage={setPage}/>
      <TopList page={page} setPage={setPage}/>
    </React.Fragment>
  );
};

export default App;

