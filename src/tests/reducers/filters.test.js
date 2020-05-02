import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startYear: moment().startOf('month'),
    endYear: moment().endOf('month')
  });
});

test('should set sortBy to rating', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('rating');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startYear: undefined,
    endYear: undefined,
    sortBy: 'rating'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'This is my filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set startYear filter', () => {
  const startYear = moment();
  const action = {
    type: 'SET_START_DATE',
    startYear
  };
  const state = filtersReducer(undefined, action);
  expect(state.startYear).toEqual(startYear);
});

test('should set endYear filter', () => {
  const endYear = moment();
  const action = {
    type: 'SET_END_DATE',
    endYear
  };
  const state = filtersReducer(undefined, action);
  expect(state.endYear).toEqual(endYear);
});
