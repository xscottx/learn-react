import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/header';

// shallow rendering or DOM rendering
// use shallow when not worried about lifecycle events
// full DOM rendering renders child components

// raf - request animatino frame

test('should render header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})