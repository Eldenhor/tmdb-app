import "./select-genre.css";
import React from "react";
import {
  FormControl,
  MenuItem,
  makeStyles,
  InputLabel,
  Select
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SelectGenre({genre, setGenre}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setGenre(event.target.value);
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Genre</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={genre}
          onChange={handleChange}
        >
          <MenuItem value={"28"}>Action</MenuItem>
          <MenuItem value={"12"}>Adventure</MenuItem>
          <MenuItem value={"16"}>Animation</MenuItem>
          <MenuItem value={"35"}>Comedy</MenuItem>
          <MenuItem value={"80"}>Crime</MenuItem>
          <MenuItem value={"99"}>Documentary</MenuItem>
          <MenuItem value={"18"}>Drama</MenuItem>
          <MenuItem value={"10751"}>Family</MenuItem>
          <MenuItem value={"14"}>Fantasy</MenuItem>
          <MenuItem value={"36"}>History</MenuItem>
          <MenuItem value={"27"}>Horror</MenuItem>
          <MenuItem value={"10402"}>Music</MenuItem>
          <MenuItem value={"9648"}>Mystery</MenuItem>
          <MenuItem value={"10749"}>Romance</MenuItem>
          <MenuItem value={"878"}>Science Fiction</MenuItem>
          <MenuItem value={"10770"}>TV Movie</MenuItem>
          <MenuItem value={"53"}>Thriller</MenuItem>
          <MenuItem value={"10752"}>War</MenuItem>
          <MenuItem value={"37"}>Western</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
