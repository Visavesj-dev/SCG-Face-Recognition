import React from 'react';
import { shallow } from 'enzyme';
import Body from './body';

describe('<Body />', () => {
  test('renders', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper).toMatchSnapshot();
  });
});
