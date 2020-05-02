import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddMovie,
  addMovie,
  editMovie,
  startEditMovie,
  removeMovie,
  startRemoveMovie,
  setMovies,
  startSetMovies
} from '../../actions/movies';
import movies from '../fixtures/movies';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const moviesData = {};
  movies.forEach(({ id, title, description, rating, releaseDate }) => {
    moviesData[id] = { title, description, rating, releaseDate };
  });
  database.ref(`users/${uid}/movies`).set(moviesData).then(() => done());
});

test('should setup remove movie action object', () => {
  const action = removeMovie({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_MOVIE',
    id: '123abc'
  });
});

test('should remove movie from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = movies[2].id;
  store.dispatch(startRemoveMovie({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_MOVIE',
      id
    });
    return database.ref(`users/${uid}/movies/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit movie action object', () => {
  const action = editMovie('123abc', { description: 'New description value' });
  expect(action).toEqual({
    type: 'EDIT_MOVIE',
    id: '123abc',
    updates: {
      description: 'New description value'
    }
  });
});

test('should edit movie from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = movies[0].id;
  const updates = { rating: 21045 };
  store.dispatch(startEditMovie(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_MOVIE',
      id,
      updates
    });
    return database.ref(`users/${uid}/movies/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().rating).toBe(updates.rating);
    done();
  });
});

test('should setup add movie action object with provided values', () => {
  const action = addMovie(movies[2]);
  expect(action).toEqual({
    type: 'ADD_MOVIE',
    movie: movies[2]
  });
});

test('should add movie to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const movieData = {
    title: 'Mouse',
    rating: 3000,
    description: 'This one is better',
    releaseDate: 1000
  };

  store.dispatch(startAddMovie(movieData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_MOVIE',
      movie: {
        id: expect.any(String),
        ...movieData
      }
    });

    return database.ref(`users/${uid}/movies/${actions[0].movie.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(movieData);
    done();
  });
});

test('should add movie with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const movieDefaults = {
    title: '',
    rating: 0,
    description: '',
    releaseDate: 0
  };

  store.dispatch(startAddMovie({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_MOVIE',
      movie: {
        id: expect.any(String),
        ...movieDefaults
      }
    });

    return database.ref(`users/${uid}/movies/${actions[0].movie.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(movieDefaults);
    done();
  });
});

test('should setup set movie action object with data', () => {
  const action = setMovies(movies);
  expect(action).toEqual({
    type: 'SET_MOVIES',
    movies
  });
});

test('should fetch the movies from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetMovies()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_MOVIES',
      movies
    });
    done();
  });
});
