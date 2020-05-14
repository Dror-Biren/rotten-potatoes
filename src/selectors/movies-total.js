export default (movies) => {
  return movies
      .map((movie) => movie.ratingsAmount)
      .reduce((sum, value) => sum + value, 0);
};
