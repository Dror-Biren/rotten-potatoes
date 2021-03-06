import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { MovieListFilters } from '../../components/MovieListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByRating, setStartYear, setEndYear, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByRating = jest.fn();
  setStartYear = jest.fn();
  setEndYear = jest.fn();
  wrapper = shallow(
    <MovieListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByRating={sortByRating}
      setStartYear={setStartYear}
      setEndYear={setEndYear}
    />
  );
});

test('should render MovieListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render MovieListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by rating', () => {
  const value = 'rating';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByRating).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startYear = moment(0).add(4, 'yearsRange');
  const endYear = moment(0).add(8, 'yearsRange');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startYear, endYear });
  expect(setStartYear).toHaveBeenLastCalledWith(startYear);
  expect(setEndYear).toHaveBeenLastCalledWith(endYear);
});

test('hould handle date focus changes', () => {
  const calendarFocused = 'endYear';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
