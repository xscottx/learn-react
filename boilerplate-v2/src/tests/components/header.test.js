import React from 'react';
import {Header} from '../../components/header';
import {startLogout} from '../../actions/auth';
import { shallow } from 'enzyme';

test('should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={startLogout} />);
  expect(wrapper).toMatchSnapshot();
})

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
})