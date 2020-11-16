import "./movie-cards-container.css";

import React from "react";
import MovieCard from "../movie-card";
import CardsGrid from "../cards-grid";
import MovieDetails from "../movie-details";
import withData from "../hoc-helpers/with-data";

const MovieCardContainer = ({data}) => {

  return (

    <div className="movie-card-container">
      <CardsGrid poster={<MovieCard data={data}/>}
                 details={<MovieDetails data={data}/>}/>
    </div>

  );
};

export default withData(MovieCardContainer);