import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  note: 'yummy',
  amount: 195,
  createdAt: moment(0).valueOf()
}, {
  id: '2',
  description: 'Rent',
  note: 'gross',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: 'limitless',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]