import moment from 'moment';
import {
  setStartYear,
  setEndYear,
  setTextFilter,
  sortByRating,
  sortByDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartYear(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startYear: moment(0)
  });
});

test('should generate set end date aciton object', () => {
  const action = setEndYear(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endYear: moment(0)
  });
});

test('should generate set text filter object with text value', () => {
  const text = 'Something in';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate action object for sort by rating', () => {
  expect(sortByRating()).toEqual({ type: 'SORT_BY_AMOUNT' });
});
