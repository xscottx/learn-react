import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/login';
import {startLogin} from '../../actions/auth'

test('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
})

test('should call startLogin on click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
})