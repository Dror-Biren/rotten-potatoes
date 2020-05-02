import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startYear: undefined,
  endYear: undefined
};

const altFilters = {
  text: 'bills',
  sortBy: 'rating',
  startYear: moment(0),
  endYear: moment(0).add(3, 'days')
};

export { filters, altFilters };
