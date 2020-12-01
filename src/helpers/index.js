import React from "react";

export const formatDate = (releaseDate) => {
  const date = new Date(releaseDate);
  return date.toLocaleDateString();
};

export const formatMoney = (money) => {
  if (money !== 0) {
    return `$${money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1'")}`;
  }

  return "unknown";
};

