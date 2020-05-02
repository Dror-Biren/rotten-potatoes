import React from 'react';
import { shallow } from 'enzyme';
import { AddMoviePage } from '../../components/AddMoviePage';
import movies from '../fixtures/movies';

let startAddMovie, history, wrapper;

beforeEach(() => {
  startAddMovie = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddMoviePage startAddMovie={startAddMovie} history={history} />);
});

test('should render AddMoviePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('MovieForm').prop('onSubmit')(movies[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddMovie).toHaveBeenLastCalledWith(movies[1]);
});
