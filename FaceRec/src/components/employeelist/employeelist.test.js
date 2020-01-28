import React from 'react';
import { shallow } from 'enzyme';
import Employeelist from './employeelist';

describe('<Employeelist />', () => {
  test('renders', () => {
    const wrapper = shallow(<Employeelist />);
    expect(wrapper).toMatchSnapshot();
  });
});
