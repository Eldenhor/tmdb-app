import './movie-cards-container.css'

import React from "react";
import MovieCard from "../movie-card";
import CardsGrid from "../cards-grid";
import MovieDetails from "../movie-details";

const MovieCardContainer = () => {

  return (

    <div className="movie-card-container">
      <CardsGrid first={<MovieCard/>} second={<MovieDetails/>}/>
      <CardsGrid first={<MovieCard/>} second={<MovieDetails/>}/>
      <CardsGrid first={<MovieCard/>} second={<MovieDetails/>}/>
      <CardsGrid first={<MovieCard/>} second={<MovieDetails/>}/>
    </div>

  );
};

export default MovieCardContainer;