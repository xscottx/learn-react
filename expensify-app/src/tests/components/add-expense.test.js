import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/add-expense';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn(); // spy
  history = { push: jest.fn() }; // spy
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);  // shallow render
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})