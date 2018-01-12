import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'

test('should get visible expenses', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    endDate: undefined,
    startDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([ expenses[2], expenses[1]])
})

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    endDate: undefined,
    startDate: moment(0)
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    endDate: moment(0).add(2, 'days'),
    startDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([ expenses[0], expenses[1] ])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    endDate: undefined,
    startDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    endDate: undefined,
    startDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ])
})