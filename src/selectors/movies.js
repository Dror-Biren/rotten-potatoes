import moment from 'moment'

function hasValueInCommon(strings1, strings2) {
   const getStringStart = str => str.substring(0, 4);
   const compareLexicographicOrder = (str1, str2) => (str1 > str2 ? 1 : -1);

   const sortStrings1 = strings1.map(getStringStart).sort(compareLexicographicOrder);
   const sortStrings2 = strings2.map(getStringStart).sort(compareLexicographicOrder);

   let i1 = 0, i2 = 0;
   while (i1 < sortStrings1.length && i2 < sortStrings2.length) {
      if (sortStrings1[i1] === sortStrings2[i2])
         return true;
      if (sortStrings1[i1] < sortStrings2[i2])
         i1++;
      else
         i2++;
   }
   return false;
}

// Get visible movies
export default (movies, { text, sortBy, yearsRange, genres }) => {
   const [startYear, endYear] = yearsRange;

   function isMovieMatch(movie) {
      //console.log(movie.raters);
      const releaseYear = moment(movie.releaseDate).year();

      const startYearMatch = startYear <= releaseYear;
      const endYearMatch = endYear >= releaseYear;
      const textMatch = movie.title.toLowerCase().includes(text.toLowerCase());
      const genresMatch = hasValueInCommon(genres, movie.genres);

      return startYearMatch && endYearMatch && textMatch && genresMatch;
   }

   function sortMovies(movie1, movie2) {
      switch (sortBy) {
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
