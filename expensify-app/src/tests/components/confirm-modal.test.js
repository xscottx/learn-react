import React from 'react';
import { shallow } from 'enzyme';
import ConfirmModal from '../../components/confirm-modal';
import expenses from '../fixtures/expenses';

let handleCancel, handleRemoveOption, wrapper;

beforeEach(() => {
  handleCancel = jest.fn(); // spy
  handleRemoveOption = jest.fn(); //spy
  wrapper = shallow(
    <ConfirmModal 
      selectedOption={expenses[0].description}
      handleCancel={handleCancel}
      handleRemoveOption={handleRemoveOption}
    />);
})

test('should render confirm modal', () => {
  expect(wrapper).toMatchSnapshot();  
})

test('should handle start remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(handleRemoveOption).toHaveBeenCalled();
})