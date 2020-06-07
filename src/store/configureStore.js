import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from '../reducers/movies';
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/user';
import allUsersReducer from '../reducers/allUsers';

const allReducers = combineReducers({
   movies: moviesReducer,
   filters: filtersReducer,
   user: userReducer,
   allUsers: allUsersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk));

const store = createStore(allReducers, middleware);
export default store;

/*
const store = createStore(
   combineReducers({
      movies: moviesReducer,
      filters: filtersReducer,
      user: userReducer,
      allUsers: allUsersReducer
   }),
   composeEnhancers(applyMiddleware(thunk))
);

export default store;
*/




