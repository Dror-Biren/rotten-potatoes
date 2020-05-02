import selectExpensesTotal from '../../selectors/movies-total';
import movies from '../fixtures/movies';

test('should return 0 if no movies', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single movie', () => {
  const res = selectExpensesTotal([movies[0]]);
  expect(res).toBe(195);
});

test('should correctly add up multiple movies', () => {
  const res = selectExpensesTotal(movies);
  expect(res).toBe(114195);
});
