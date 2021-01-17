import "./filter-and-genre-container.css";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SelectSorting from "../select-sorting";
import SelectGenre from "../select-genre";
import { clearMovieList, getTopList } from "../../actions/getMovieListAction";

function FilterAndGenreContainer({clearMovieList, getTopList, page, setPage}) {

  const [sorting, setSorting] = useState("popularity.desc");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    getTopList(page, sorting, genre);
  }, [page, sorting, genre, clearMovieList, getTopList]);

  useEffect(() => {
    setPage(1);
    clearMovieList();
  }, [genre, sorting, clearMovieList, setPage]);

  return (
    <div className="d-flex justify-content-center mt-2">
      <SelectSorting sorting={sorting} setSorting={setSorting}/>
      <SelectGenre genre={genre} setGenre={setGenre}/>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearMovieList: () => dispatch(clearMovieList()),
  getTopList: (page, sorting, genre) => dispatch(getTopList(page, sorting, genre))
});

export default connect(null, mapDispatchToProps)(FilterAndGenreContainer);