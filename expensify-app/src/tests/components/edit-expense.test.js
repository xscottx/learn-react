import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/edit-expense';
import expenses from '../fixtures/expenses';

let editExpense, history, removeExpense, wrapper;

beforeEach(() => {
  editExpense = jest.fn(); // spy
  history = { push: jest.fn() }; // spy
  removeExpense = jest.fn(); // spy
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense} 
      history={history} 
      removeExpense={removeExpense} 
      expense={expenses[0]}
    />);
})

test('should render edit-expense', () => {
  expect(wrapper).toMatchSnapshot();  
})

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
})

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click'); // use simulate click here instead of onSubmit
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
})