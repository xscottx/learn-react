import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/expense-list-filters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setEndDate={setEndDate}
    />);
})

test('should render expense list filters', () => {
  expect(wrapper).toMatchSnapshot();
})

// enzyme lets u .setProps to change fixtures file in
test('should render expense list filters with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenLastCalledWith(value);
})

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenLastCalledWith(value);
})

// TODO fix tests
// test('should handle date changes', () => {
//   const startDate = moment(0).add(4, 'years');
//   const endDate = moment(0).add(8, 'years');
//   wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
//   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// })

// test('should handle date focus changes', () => {
//   const calendarFocused = 'startDate';
//   wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
//   expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
// })