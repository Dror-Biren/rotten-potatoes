import moviesReducer from '../../reducers/movies';
import movies from '../fixtures/movies';

test('should set default state', () => {
  const state = moviesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove movie by id', () => {
  const action = {
    type: 'REMOVE_MOVIE',
    id: movies[1].id
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual([movies[0], movies[2]]);
});

test('should not remove movies if id not found', () => {
  const action = {
    type: 'REMOVE_MOVIE',
    id: '-1'
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual(movies);
});

test('should add an movie', () => {
  const movie = {
    id: '109',
    title: 'Laptop',
    description: '',
    releaseDate: 20000,
    rating: 29500
  };
  const action = {
    type: 'ADD_MOVIE',
    movie
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual([...movies, movie]);
});

test('should edit an movie', () => {
  const rating = 122000;
  const action = {
    type: 'EDIT_MOVIE',
    id: movies[1].id,
    updates: {
      rating
    }
  };
  const state = moviesReducer(movies, action);
  expect(state[1].rating).toBe(rating);
});

test('should not edit an movie if id not found', () => {
  const rating = 122000;
  const action = {
    type: 'EDIT_MOVIE',
    id: '-1',
    updates: {
      rating
    }
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual(movies);
});

test('should set movies', () => {
  const action = {
    type: 'SET_MOVIES',
    movies: [movies[1]]
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual([movies[1]]);
});
