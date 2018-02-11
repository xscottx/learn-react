import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/expense-form';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  // will bomb out every snapshot bc of the date changing inside moment()
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  // look for state value 'error', it should not be empty and say 'Please provide description and amount'
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  // search by input, index 0 should show description
  // set e to have 'target' variable bc form has target, and target has 'value'
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', () => {
  const value = 'New note'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })

  // can't just pass in expenses[0] below because the 'id' field is not in the form
  // expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0]);

  // onSubmitSpy('Hoang', 'Plano');
  // checks if onsubmit has been called once
  // expect(onSubmitSpy).toHaveBeenCalled();
  // expect(onSubmitSpy).toHaveBeenCalledWith('Hoang', 'Plano');
})

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  // had to add withStyles(SingleDatePicker) to get the actual sdp
  // passing in a function handler bc the method requires a function param
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);
})

// test('should go back to dashboard', () => {
//   const history = jest.fn();
//   const wrapper = shallow(<ExpenseForm history={history}/>);
//   wrapper.find('Link').simulate('click');
//   expect(history).toHaveBeenCalled();
// })