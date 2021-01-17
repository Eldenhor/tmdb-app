import "./select-sorting.css";
import React from "react";
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

export default function SelectSorting({sorting, setSorting}) {
  const classes = useStyles();


  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  return (
    <div>
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
}
