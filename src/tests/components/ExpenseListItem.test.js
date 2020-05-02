import React from 'react';
import { shallow } from 'enzyme';
import movies from '../fixtures/movies';
import MovieListItem from '../../components/MovieListItem';

test('should render MovieListItem correctly', () => {
  const wrapper = shallow(<MovieListItem {...movies[0]} />);
  expect(wrapper).toMatchSnapshot();
});
