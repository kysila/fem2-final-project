/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Shipping } from './Shipping';

describe('Shipping component', () => {
  it('Shipping render', () => {
    const rendered = shallow(
      <Shipping />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
