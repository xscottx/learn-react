import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/add-expense';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn(); // spy
  history = { push: jest.fn() }; // spy
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);  // shallow render
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
})