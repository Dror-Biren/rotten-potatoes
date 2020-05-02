import moment from 'moment';
import selectExpenses from '../../selectors/movies';
import movies from '../fixtures/movies';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startYear: undefined,
    endYear: undefined
  };
  const result = selectExpenses(movies, filters);
  expect(result).toEqual([movies[2], movies[1]]);
});

test('should filter by startYear', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startYear: moment(0),
    endYear: undefined
  };
  const result = selectExpenses(movies, filters);
  expect(result).toEqual([movies[2], movies[0]]);
});

test('should filter by endYear', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startYear: undefined,
    endYear: moment(0).add(2, 'days')
  };
  const result = selectExpenses(movies, filters);
  expect(result).toEqual([movies[0], movies[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startYear: undefined,
    endYear: undefined
  };
  const result = selectExpenses(movies, filters);
  expect(result).toEqual([movies[2], movies[0], movies[1]]);
});

test('should sort by rating', () => {
  const filters = {
    text: '',
    sortBy: 'rating',
    startYear: undefined,
    endYear: undefined
  };
  const result = selectExpenses(movies, filters);
  expect(result).toEqual([movies[1], movies[2], movies[0]]);
});
