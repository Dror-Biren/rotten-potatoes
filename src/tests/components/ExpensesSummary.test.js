import React from 'react';
import { shallow } from 'enzyme';
import { MoviesSummary } from '../../components/MoviesSummary';

test('should correctly render MoviesSummary with 1 movie', () => {
  const wrapper = shallow(<MoviesSummary movieCount={1} moviesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render MoviesSummary with multiple movies', () => {
  const wrapper = shallow(<MoviesSummary movieCount={23} moviesTotal={23512340987} />);
  expect(wrapper).toMatchSnapshot();
});
