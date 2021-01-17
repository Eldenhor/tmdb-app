import "./select-sorting.css";

import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { getTopList, clearMovieList } from "../../actions/getMovieListAction";

import {
  FormControl,
  makeStyles,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

function SelectSorting({getTopList, clearMovieList}) {
  const classes = useStyles();
  const [sorting, setSorting] = useState("popularity.desc");


  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  useEffect(() => {
    clearMovieList();
    getTopList(1, sorting);
  }, [sorting, clearMovieList, getTopList]);

  return (
    <div className="d-flex justify-content-center">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Sorting</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sorting}
          onChange={handleChange}
        >
          <MenuItem value={"popularity.desc"}>Most Popular</MenuItem>
          <MenuItem value={"popularity.asc"}>Less Popular</MenuItem>
          <MenuItem value={"vote_average.desc"}>High Vote</MenuItem>
          <MenuItem value={"vote_average.asc"}>Low Vote</MenuItem>
          <MenuItem value={"release_date.desc"}>Newest First</MenuItem>
          <MenuItem value={"release_date.asc"}>Oldest First</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getTopList: (page, sorting) => dispatch(getTopList(page, sorting)),
  clearMovieList: () => dispatch(clearMovieList())
});

export default connect(null, mapDispatchToProps)(SelectSorting);