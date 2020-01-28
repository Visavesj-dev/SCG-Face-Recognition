import React from 'react';
import { shallow } from 'enzyme';
import History from './history';

describe('<History />', () => {
  test('renders', () => {
    const wrapper = shallow(<History />);
    expect(wrapper).toMatchSnapshot();
  });
});
