import React from 'react';
import { shallow } from 'enzyme';
import movies from '../fixtures/movies';
import { EditMoviePage } from '../../components/EditMoviePage';

let startEditMovie, startRemoveMovie, history, wrapper;

beforeEach(() => {
  startEditMovie = jest.fn();
  startRemoveMovie = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditMoviePage
      startEditMovie={startEditMovie}
      startRemoveMovie={startRemoveMovie}
      history={history}
      movie={movies[2]}
    />
  );
});

test('should render EditMoviePage', () => {
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
