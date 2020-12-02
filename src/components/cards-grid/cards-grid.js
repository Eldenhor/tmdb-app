import "./cards-grid.css";

import React from "react";

const CardsGrid = ({poster, details}) => {
  return (
    <div className="cards-grid">
      <div className="col-3 card-first">
        {poster}
      </div>
      <div className="col-6 card-second">
        {details}
      </div>
    </div>
  );
};

export default CardsGrid;