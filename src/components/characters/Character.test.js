import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders a App', () => {
    const wrapper = shallow(<Character character={{ id: 'hi', name: 'anng', img: 'url' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
