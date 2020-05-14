import React from 'react';
import { shallow } from 'enzyme';
import movies from '../fixtures/movies';
import { ViewMoviePage } from '../../components/ViewMoviePage';

let startEditMovie, startRemoveMovie, history, wrapper;

beforeEach(() => {
  startEditMovie = jest.fn();
  startRemoveMovie = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <ViewMoviePage
      startEditMovie={startEditMovie}
      startRemoveMovie={startRemoveMovie}
      history={history}
      movie={movies[2]}
    />
  );
});

test('should render ViewMoviePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditMovie', () => {
  wrapper.find('MovieForm').prop('onSubmit')(movies[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditMovie).toHaveBeenLastCalledWith(movies[2].id, movies[2]);
});

test('should handle startRemoveMovie', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveMovie).toHaveBeenLastCalledWith({
    id: movies[2].id
  });
});
