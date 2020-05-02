import moment from 'moment'

export default [{
  id: '1',
  title: 'Gum',
  description: '',
  rating: 195,
  releaseDate: 0
}, {
  id: '2',
  title: 'Rent',
  description: '',
  rating: 109500,
  releaseDate: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  title: 'Credit Card',
  description: '',
  rating: 4500,
  releaseDate: moment(0).add(4, 'days').valueOf()
}];
