import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/loading-page';

test('should render loading page', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
})
