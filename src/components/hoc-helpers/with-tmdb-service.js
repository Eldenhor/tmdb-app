import React from "react";
import { TmdbServiceConsumer } from "../tmdb-service-context";

const withTmdbService = () => (Wrapped) => {

  return (props) => {
    return (
      <TmdbServiceConsumer>
        {
          (tmdbService) => {
            return (<Wrapped{...props}
                            tmdbService={tmdbService}/>);
          }
        }
      </TmdbServiceConsumer>
    );
  };
};

export default withTmdbService;