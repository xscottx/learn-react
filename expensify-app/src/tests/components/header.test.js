import React from 'react';
import Header from '../../components/header';
// http://airbnb.io/enzyme/docs/api/
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json'; // don't need this anymore bc we have it running automatically under package.json 'test'

// shallow rendering or DOM rendering
// use shallow when not worried about lifecycle events
// full DOM rendering renders child components

// raf - request animation frame

test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // Old school way of doing shallow rendering using dated lib, use Enzyme instead
  // expect(wrapper.find('h1').text()).toBe('Expensify');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
})