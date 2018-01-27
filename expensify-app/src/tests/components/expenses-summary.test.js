import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/expenses-summary';

test('should correctly render expenses summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
})

test('should correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={123456789} />);
  expect(wrapper).toMatchSnapshot();
})