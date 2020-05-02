import moment from 'moment'

// Get visible movies
export default (movies, { text, sortBy, startYear, endYear }) => {
  //console.log({startYear, endYear});

  function isMovieMatch(movie) {
    const releaseYear = moment(movie.releaseDate).year();

    const startYearMatch = startYear ? startYear <= releaseYear : true;
    const endYearMatch = endYear ? endYear >= releaseYear : true;
    const textMatch = movie.title.toLowerCase().includes(text.toLowerCase());

    return startYearMatch && endYearMatch && textMatch;
  }

  function sortMovies(movie1, movie2) {
    switch(sortBy) {
      case 'viewes':
        return movie2.ratingsAmount - movie1.ratingsAmount;
      case 'date':
        return movie2.releaseDate - movie1.releaseDate;
      case 'rating':
        return movie2.rating - movie1.rating;
    }
  }

  return movies.filter(isMovieMatch).sort(sortMovies);
};
