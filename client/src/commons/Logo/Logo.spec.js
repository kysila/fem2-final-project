/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from './Logo';

describe('Logo component', () => {
  it('Logo render', () => {
    const rendered = shallow(
      <Logo/>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
