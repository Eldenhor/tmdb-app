import "./search-pagination.css";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  clearMovieList,
  getSearchList,
} from "../../actions/getMovieListAction";


const SearchPagination = ({movieList, getSearchList, clearMovieList}) => {

  const setPageNumber = (page) => {
    if (movieList.query !== undefined) {
      const url = movieList.query.toString();
      const query = url.slice([104], url.lastIndexOf("&"));

      if (typeof page === "number") {
        if (movieList.page !== page) {
          clearMovieList();
          getSearchList(query, page);
        }
      }
    }
  };

  // current active button number
  const [currentButton, setCurrentButton] = useState(1);

  // array of buttons that we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  /*eslint-disable */
  useEffect(() => {

    // set number of pages array from 1 to N
    const numberOfPages = [];

    for (let i = 1; i <= movieList.total_pages; i++) {
      numberOfPages.push(i);
    }

    let tempNumberOfPages = [...arrOfCurrButtons];

    if (movieList.total_pages <= 10) {

      setArrOfCurrButtons(numberOfPages);
    } else {

      let dotsInitial = "...";
      let dotsLeft = "<";
      let dotsRight = ">";

      if (currentButton >= 1 && currentButton <= 3) {
        tempNumberOfPages = [1, 2, 3, 4, 5, dotsInitial, numberOfPages.length];
      } else if (currentButton === 4) {
        const sliced = numberOfPages.slice(0, 6);
        tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
      }

        // from 5 to 8 -> (10-2)
        // sliced1 (5-2, 5) -> [4, 5]
        // sliced2 (5, 5+1) -> [6]
      // [1, '...', 4, 5, 6, '...', 10]
      else if (currentButton >= 5 && currentButton < numberOfPages.length - 2) {
        const sliced1 = numberOfPages.slice(currentButton - 3, currentButton);
        const sliced2 = numberOfPages.slice(currentButton, currentButton + 2);
        tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]);
      }

        // > 7
      // slice (10 - 4)
      else if (currentButton > numberOfPages.length - 3) {
        const sliced = numberOfPages.slice(numberOfPages.length - 4);
        tempNumberOfPages = ([1, dotsLeft, ...sliced]);
      } else if (currentButton === dotsInitial) {
        // [1, 2, 3, 4, "...", 10].length = 6 - 3 = 3
        // arrOfCurrButtons[3] = 4 + 1 = 5
        // or
        // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
        // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
        setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
      } else if (currentButton === dotsRight) {
        setCurrentButton(arrOfCurrButtons[3] + 2);
      } else if (currentButton === dotsLeft) {
        setCurrentButton(arrOfCurrButtons[3] - 2);
      }

      setArrOfCurrButtons(tempNumberOfPages);
    }

    setPageNumber(currentButton);


  }, [currentButton, movieList.loaded]);
  /*eslint-enable */

  const pageList = arrOfCurrButtons.map((page, index) => {
    return (
      <button
        key={index}
        className={`btn btn-secondary search-button ${currentButton === page ? "active" : "disabled"}`}
        onClick={() => setCurrentButton(page)}>
        {page}
      </button>
    );
  });


  return (
    <div>
      <div className="btn-group search-buttons">
        {pageList}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movieList
});

const mapDispatchToProps = (dispatch) => ({
  clearMovieList: () => dispatch(clearMovieList()),
  getSearchList: (query, page) => dispatch(getSearchList(query, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPagination);