import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should edit expense', () => {
  const updates = {
    description: 'Mortgage'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  }
  const state = expensesReducer(expenses, action)

  expect(state[0].description).toEqual('Mortgage')
})

test('should not edit expense if id not found', () => {
  const updates = {
    description: 'Mortgage'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'Books',
    note: 'comic books',
    amount: 2000,
    createdAt: moment()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([...expenses, expense])
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1]]);
})