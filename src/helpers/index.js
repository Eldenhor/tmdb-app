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

export const formatUserData = (user, favoriteMovies) => {
  const {uid, email, displayName} = user;

  return {
    isLoggedIn: true,
    userId: uid,
    email,
    displayName,
    favoriteMovies
  };
};

