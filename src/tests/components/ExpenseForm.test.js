import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import MovieForm from '../../components/MovieForm';
import movies from '../fixtures/movies';

test('should render MovieForm correctly', () => {
  const wrapper = shallow(<MovieForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render MovieForm correctly with movie data', () => {
  const wrapper = shallow(<MovieForm movie={movies[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<MovieForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set title on input change', () => {
  const value = 'New title';
  const wrapper = shallow(<MovieForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('title')).toBe(value);
});

test('should set description on textarea change', () => {
  const value = 'New description value';
  const wrapper = shallow(<MovieForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set rating if valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<MovieForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('rating')).toBe(value);
});

test('should not set rating if invalid input', () => {
  const value = '12.122';
  const wrapper = shallow(<MovieForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('rating')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<MovieForm movie={movies[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: movies[0].title,
    rating: movies[0].rating,
    description: movies[0].description,
    releaseDate: movies[0].releaseDate
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<MovieForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('releaseDate')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<MovieForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
