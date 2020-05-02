export default (movies) => {
  return movies
      .map((movie) => movie.rating)
      .reduce((sum, value) => sum + value, 0);
};
