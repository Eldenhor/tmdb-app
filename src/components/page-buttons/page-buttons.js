import "./page-buttons.css";

import React from "react";

const PageButtons = ({pageClick}) => {


  return (
    <div className="btn-toolbar d-flex justify-content-center mt-4">
      <div className="btn-group ">
        <button type="button" className="btn btn-secondary"
                onClick={() => {
                  pageClick(1);
                }}>
          1
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => {
                  pageClick(2);
                }}>
          2
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => {
                  pageClick(3);
                }}>
          3
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => {
                  pageClick(4);
                }}>
          4
        </button>
      </div>
    </div>
  );
};

export default PageButtons;