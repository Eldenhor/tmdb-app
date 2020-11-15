import "./cards-grid.css";

import React from "react";

const CardsGrid = ({first, second}) => {
  return (
    <div className="cards-grid">
      <div className="row justify-content-center">
        <div className="col-3">
          {first}
        </div>
        <div className="col-6">
          {second}
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;