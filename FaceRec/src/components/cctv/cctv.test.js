import React from 'react';
import { shallow } from 'enzyme';
import Cctv from './cctv';

describe('<Cctv />', () => {
  test('renders', () => {
    const wrapper = shallow(<Cctv />);
    expect(wrapper).toMatchSnapshot();
  });
});
