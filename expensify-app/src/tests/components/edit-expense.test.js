import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/edit-expense';
import expenses from '../fixtures/expenses';

let editExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
  editExpense = jest.fn(); // spy
  history = { push: jest.fn() }; // spy
  startRemoveExpense = jest.fn(); // spy
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense} 
      history={history} 
      startRemoveExpense={startRemoveExpense} 
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

test('should handle start remove expense', () => {
  wrapper.find('button').simulate('click'); // use simulate click here instead of onSubmit
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
})