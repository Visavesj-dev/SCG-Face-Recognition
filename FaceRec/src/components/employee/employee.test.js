import React from 'react';
import { shallow } from 'enzyme';
import Employee from './employee';

describe('<Employee />', () => {
  test('renders', () => {
    const wrapper = shallow(<Employee />);
    expect(wrapper).toMatchSnapshot();
  });
});
