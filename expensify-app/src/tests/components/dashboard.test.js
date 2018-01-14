import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/dashboard';

test('should render ExpenseDashboardPage', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
})